var clock = document.getElementById('Timer');
var redClockDisplay = document.getElementById('redClock');
var greenClockDisplay = document.getElementById('greenClock');
var redButton = document.getElementById('red');
var greenButton  = document.getElementById('green');
var neutral = document.getElementById('neutral');

var redTimer = new stopWatch(redClockDisplay);
var greenTimer = new stopWatch(greenClockDisplay);


var interval;

redButton.addEventListener('click',function () {
    if(!redTimer.isOn){//Red gets takedown
        clearInterval(interval);
        redTimer.start();
        interval = setInterval(setMainClockTime, 1000);
        console.log('red takedown');
    }
    if(greenTimer.isOn){
        greenTimer.stop();
    }
});

greenButton.addEventListener('click',function () {
    if(!greenTimer.isOn){ //green gets takedown
        clearInterval(interval);
        greenTimer.start();
        setInterval(setMainClockTime, 1000);
        console.log('green takedown');
    }
    if(redTimer.isOn){
        redTimer.stop();
    }

});

neutral.addEventListener('click',function () {
    redTimer.stop();
    greenTimer.stop();
    clearInterval(interval);

});
function timeFormatter(timeInMS){
        var time = new Date(timeInMS);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();

        if(minutes.length < 2){
          minutes = '0' + minutes;
        };
        if(seconds.length < 2){
          seconds = '0' + seconds;
        };

        return minutes + ':' + seconds
    };

function setMainClockTime() {
    var mainClockTime;
    var redTime = Math.round(redTimer.getTime()/1000);
    var greenTime = Math.round(greenTimer.getTime()/1000);
    console.log("Red Time: " + redTime)
    console.log("Green Time: " + greenTime)
    if(redTime > greenTime){
        mainClockTime = redTime - greenTime;
    }else{
        mainClockTime = greenTime - redTime;
    };
    var formattedTime = timeFormatter(mainClockTime*1000);
    console.log("Formatted Time: " + formattedTime);
    clock.innerHTML = formattedTime;

};



