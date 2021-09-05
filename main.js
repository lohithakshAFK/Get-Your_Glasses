right_eye_x = 0;
right_eye_y = 0;

function preload(){
    img = loadImage("https://i.postimg.cc/kXTjV0Xn/trhrt-removebg-preview.png");
}

function setup(){
     canvas = createCanvas(300,300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300,300);
     video.hide();

     posenet = ml5.poseNet(video,modelLoaded);
      posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        right_eye_x = results[0].pose.rightEye.x - 20;
        right_eye_y = results[0].pose.rightEye.y - 20;
        console.log("right eye x = " + results[0].pose.rightEye.x);
        console.log("right eye y = " + results[0].pose.rightEye.y);

    }
}

function draw(){
     image(video,0,0,300,300);
     image(img,right_eye_x,right_eye_y,70,50);
}

function snapshot(){
    save("Glasses.png");
}