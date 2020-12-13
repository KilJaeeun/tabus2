var DELAY = 700, clicks = 0, timer = null;

$(function () {
    $("button")
        .on("dblclick", function (e) {
            e.preventDefault();  //cancel system double-click event
        });
});

function speech(obj) {
    //one click
    var is = true;

    var utterThis = new SpeechSynthesisUtterance(obj.innerText);
     utterThis.lang= 'ko-KR';
    var synth = window.speechSynthesis;
    synth.speak(utterThis);
    console.log("work")
    return is;
}

function goto(place) {
    return location.href = place;
}