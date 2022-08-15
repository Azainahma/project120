predictiction_1 = ""


Webcam.set({
    width:350,
    height:300,
    image_format : 'jpeg',
    jpeg_quality :90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = '<img id="captured_image"  src="'+data_uri+'"/>';
    }); 
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/mPPdVujFk/model.json',modelLoaded);

function modelLoaded(){
    console.log('model loded!');
}

function speak(){
    var synth = window.SpeechSynthesis;
    speak_data_1 = "The first predicition is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis)
}


  function check()
  {
    img = document.getElementById('captured_image');
    classifier.slassify(img, gotResult);
  }