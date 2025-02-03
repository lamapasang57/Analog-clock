document.addEventListener("DOMContentLoaded", function(){
    setInterval(function(){
        var dateObject = new Date();
        var h = dateObject.getHours();
        var m = dateObject.getMinutes();
        var s = dateObject.getSeconds();
        var l = dateObject.getMilliseconds();
        move(h*30 + m*0.5,m*6,(s+l/1000) *6);
    },10);
    function move(a,b,c){
        document.querySelector("#hand_hour").style.setProperty("transform","rotate(" + a + "deg)");
        document.querySelector("#hand_minute").style.setProperty("transform","rotate(" + b +"deg)");
        document.querySelector("#hand_second").style.setProperty("transform","rotate(" + c +"deg)");
    }
});