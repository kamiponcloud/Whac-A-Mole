// window.onload = init();
var Time;
var mouse;
var mouseuptime;
var sum = 0 //分数
var n = 15;  //倒计时
function startgame(k,j){
    mouseuptime=j;
    mouse = window.setInterval("mouseup()",k)
    Time = window.setInterval("time()",1000)
    var g = document.getElementById("gbtn");
    g.style.display="none";
}

function mouseup() {
    var r = parseInt(Math.random()*6+1);
    var obj = document.createElement("img");
    obj.src="img/mouse.gif";
    obj.style.animation="mouse "+ mouseuptime +"s linear"
    var d = document.getElementById("d"+r);
    d.appendChild(obj);
    obj.onclick = move;
}

function move() {
    sum++;
    this.parentNode.removeChild(this);
}

function time() {
    var t = document.getElementById("time");
    t.innerHTML = n+"s";
    n--;
    if(n===-2){
        end();
        window.clearInterval(Time);
        window.clearInterval(mouse);
        t.innerHTML = "0s";
    }
}

function end() {
    var obj = document.getElementById("end");
    obj.style.display="block";
    var result = document.getElementById("result");
    result.innerHTML=sum;
}

function restart() {
    sum=0;
    var obj = document.getElementById("end");
    obj.style.display="none";
    var g = document.getElementById("gbtn");
    g.style.display="flex";
    n = 5;
}