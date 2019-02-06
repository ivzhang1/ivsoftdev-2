//team Redchewahwah - Ivan Zhang, Ahnaf Kazi
// SoftDev pd7
// K #04: What is it saving the screen from?
// 2019-02-07

var anim = document.getElementById("circle");
var dvd = document.getElementById("dvd");
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

var dvdLogoSetup = function(){
  window.cancelAnimationFrame(id);
  var rectWidth = 100;
  var rectHeight = 50;

  var rectX = Math.floor(Math.random() * (c.width-rectWidth));
  var rectY =  Math.floor(Math.random() * (c.height-rectHeight));

  var xVel = 2;
  var yVel = 2;
  var logo = new Image();
  logo.src = "logo_dvd.jpg"

  var dvd_mover = function(){
    window.cancelAnimationFrame(id);
    clear();
    //ctx.fillRect( rectX, rectY, rectWidth, rectHeight);
    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight)
    rectX += xVel;
    rectY += yVel;

    if(rectX <= 0 || rectX  + rectWidth >= c.width){
      xVel *= -1;
    }
    if(rectY <= 0 || rectY  + rectHeight >= c.height){
      yVel *= -1;
    }

    id = window.requestAnimationFrame(dvd_mover);
  }

  dvd_mover()
}



anim.addEventListener("click", drawDot);
stopbut.addEventListener("click", stop);
dvd.addEventListener("click", dvdLogoSetup);
