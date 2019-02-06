//team Redchewahwah -- Ivan Zhang, Ahnaf Kazi
// SoftDev2 pd7
// K #03: They lock us in the tower whenever we get caught
// 2019-02-06

var anim = document.getElementById("circle");
var stopbut = document.getElementById("stop");
var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var id;
var radius = 1;
var growing = true;

ctx.fillStyle = "ffff00";

var clear = function(e){
    ctx.clearRect(0, 0, c.width, c.height);
}

var stop = function(){
    window.cancelAnimationFrame(id);
}

var drawDot = function(){
    window.cancelAnimationFrame(id);
    clear();
    ctx.beginPath();
    ctx.arc(c.width/2,c.height/2,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    if(c.width/2 == radius || c.height/2 == radius){
	     growing = false;
    }
    if(radius == 1){
	     growing = true;
    }
    if(growing){
	     radius+=1;
    }
    else{
	     radius-=1;
    }
    id = window.requestAnimationFrame(drawDot);

}

anim.addEventListener("click", drawDot);
stopbut.addEventListener("click", stop);
