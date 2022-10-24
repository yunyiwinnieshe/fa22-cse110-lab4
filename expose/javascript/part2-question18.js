setInterval(function printTime(){
    var d = new Date();
    var time = d.toLocaleTimeString();
    console.log(time)}, 1000)