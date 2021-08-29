function preload(){

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
        console.log("left eye x = " + results[0].pose.leftEye.x);
        console.log("left eye y = " + results[0].pose.leftEye.y);
        console.log("right eye x = " + results[0].pose.rightEye.x);
        console.log("right eye y = " + results[0].pose.rightEye.y);
        console.log("left ear x = " + results[0].pose.leftEar.x);
        console.log("left ear y = " + results[0].pose.leftEar.y);
        console.log("right ear x = " + results[0].pose.rightEar.x);
        console.log("right ear x = " + results[0].pose.rightEar.y);

    }
}

function draw(){
     image(video,0,0,300,300);
}

function snapshot(){
    save("Glasses.png");
}