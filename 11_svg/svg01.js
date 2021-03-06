// Ivan Zhang
// SoftDev pd7
// K #11: Ask Circles [Change || Die] …While On The Go
// 2019-03-14

var pic = document.getElementById("vimage");
var mys = document.getElementById("mysterio");
var move = document.getElementById("move");
var clear = document.getElementById("but_clear");
var isMoving = false;
var isColor = false;
var xVel = 1;
var yVel = 1;
var id;
var circles = [];

mys.addEventListener("click", function(){
  isColor = true;
})
move.addEventListener("click", function() {
  isMoving = true;
  var circle_mover = function(){
    window.cancelAnimationFrame(id);
    for(var i=0; i<circles.length; i++) {
      var circle = circles[i];
      var cur_x = Number(circle.getAttribute("cx"));
      var cur_y = Number(circle.getAttribute("cy"));

      circle.setAttribute("cx", cur_x+xVel);
      circle.setAttribute("cy", cur_y+yVel);

      cur_x = Number(circle.getAttribute("cx"));
      cur_y = Number(circle.getAttribute("cy"));

      if(cur_x <= 0 || (cur_x  + Number(circle.getAttribute("r"))) >= 500){
        xVel *= -1;

      }
      if(cur_y <= 0 || (cur_y  + Number(circle.getAttribute("r"))) >= 500){
        yVel *= -1;

      }
      if(isColor && circle.getAttribute('fill') != 'green'){
        if(cur_x <= 250){
          circle.setAttribute("fill", "pink");
        }
        else{
          circle.setAttribute("fill", "blue");
        }
      }
    }
    id = window.requestAnimationFrame(circle_mover);
  }
  circle_mover();
})


var clear2 = function(){
  var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("width", 500);
  rect.setAttribute("height", 500);
  rect.setAttribute("x", 0);
  rect.setAttribute("y", 0);
  rect.setAttribute("fill", "white");

  pic.appendChild(rect);
  window.cancelAnimationFrame(id);
}

clear.addEventListener( "click" , clear2);

newCircle = true;

pic.addEventListener( "click" , function(event) {
    event.preventDefault();

    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    circle.addEventListener('click', function(e){
      var c = circle.getAttribute('fill');
      if (c == 'blue' || c == 'pink'){
          circle.setAttribute('fill', 'green');
      }
      else{
          circle.setAttribute("cx", circle.getAttribute("cx") - (Math.floor(Math.random() * 150) - 75));
          circle.setAttribute("cy", circle.getAttribute("cy") - (Math.floor(Math.random() * 150) - 75));
          circle.setAttribute('fill', 'blue');
      }
      newCircle = false;
    })

    if(newCircle){
      circle.setAttribute("cx", event.offsetX);
      circle.setAttribute("cy", event.offsetY);
      circle.setAttribute("r", 20);
      circle.setAttribute("stroke", "black");
      circle.setAttribute("fill", "blue");
      pic.appendChild(circle);
      circles.push(circle);
    }

    newCircle = true;

});
