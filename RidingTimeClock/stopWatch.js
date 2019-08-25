function stopWatch(element) {
    var time = 0;
    var interval;
    var offset;

    function update (){
        time += delta();
        var formattedTime = timeFormatter(time);
        element.innerHTML = formattedTime;
    };
    function delta(){
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;


    };
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

    //Check if stopwatch is running
    this.isOn = false;

    //Start the timer
    this.start = function () {
        if(!this.isOn){
            interval = setInterval(update, 1000);
            offset = Date.now();
            this.isOn = true;
        };
    };

    //Stop the timer
    this.stop = function () {
        if(this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        };

    };

    this.getTime = function () {
        return time;
    };

    //Reset the timer to 0
    this.restart = function () {
        time = 0;

    };

    //Manually set a time in case of user mistake
    this.manualTime = function () {

    }
    
};

