function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dBxIewknO/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error)
    }else {
        console.log(results)
        r=Math.floor(Math.random() * 255) + 1;
        g=Math.floor(Math.random() * 255) + 1;
        b=Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +r+","+g+","+r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +r+","+g+","+r+")";

        img = document.getElementById('cat');
        img1 = document.getElementById('dog');
        img2 = document.getElementById('lion');
        img3 = document.getElementById('duck');

        if (results[0].label == "Meow") {
            img.src = 'cat.gif';
            img1.src = 'dog.jpg';
            img2.src = 'lion.jpg';
            img3.src = 'duck.jpg';
        }else if (results[0].label == "Bark") {
            img.src = 'cat.jpg';
            img1.src = 'dog.gif';
            img2.src = 'lion.jpg';
            img3.src = 'duck.jpg';
        }else if (results[0].label == "Roar") {
            img.src = 'cat.jpg';
            img1.src = 'dog.jpg';
            img2.src = 'lion.gif';
            img3.src = 'duck.jpg';
        }else {
            img.src = 'cat.jpg';
            img1.src = 'dog.jpg';
            img2.src = 'lion.jpg';
            img3.src = 'duck.gif';
    }
}
