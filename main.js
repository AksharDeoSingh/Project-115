function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotResults);
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x= " +results[0].pose.nose.x);
        console.log("nose y= " +results[0].pose.nose.y);
    }
}


function modelloaded(){
    console.log("model is initialized")
}

 function draw(){
  image(video, 0, 0, 300, 300);  

}

function takeSnapshot(){
    save('fltered image.png');
}

