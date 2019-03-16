// Ivan Zhang
// SoftDev pd7
// K #11: Ask Circles [Change || Die] …While On The Go
// 2019-03-14

var pic = document.getElementById("vimage");
var mys = document.getElementById("mysterio");
var move = document.getElementById("move");
var clear = document.getElementById("but_clear");
var isMoving = false;

var id;
var circles = [];

move.addEventListener("click", function() {
  isMoving = true;

  for(var i=0; i<circles.length; i++) {
    var circle = circles[i];
    console.log("TEST");
    var circle_mover = function(){
        window.cancelAnimationFrame(id);
        var cur_x = Number(circle.getAttribute("cx"));
        var cur_y = Number(circle.getAttribute("cy"));
        var xVel = Number(circle.getAttribute("xVel"));
        var yVel = Number(circle.getAttribute("yVel"));

        circle.setAttribute("cx", cur_x+xVel);
        circle.setAttribute("cy", cur_y+yVel);

        cur_x = Number(circle.getAttribute("cx"));
        cur_y = Number(circle.getAttribute("cy"));

        if(cur_x <= 0 || (cur_x  + Number(circle.getAttribute("r"))) >= 500){
          xVel *= -1;
          circle.setAttribute("xVel", xVel);

        }
        if(cur_y <= 0 || (cur_y  + Number(circle.getAttribute("r"))) >= 500){
          yVel *= -1;
          circle.setAttribute("yVel", yVel);

        }

        id = window.requestAnimationFrame(circle_mover);
    }
    circle_mover();
  }
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
      if (c == 'blue'){
          circle.setAttribute('fill', 'green');
      }
      else{
          circle.setAttribute("cx", circle.getAttribute("cx") - (Math.floor(Math.random() * 200) - 100));
          circle.setAttribute("cy", circle.getAttribute("cy") - (Math.floor(Math.random() * 200) - 100));
          circle.setAttribute('fill', 'blue');
      }
      newCircle = false;
    })

    if(newCircle){
      circle.setAttribute("cx", event.offsetX);
      circle.setAttribute("cy", event.offsetY);
      circle.setAttribute("r", 20);
      circle.setAttribute("xVel", 1);
      circle.setAttribute("yVel", 1);
      circle.setAttribute("stroke", "black");
      circle.setAttribute("fill", "blue");
      pic.appendChild(circle);
      circles.push(circle);
    }

    newCircle = true;
    // if(isMoving){
    //   for(var i=0; i<circles.length; i++) {
    //     circle_mover(circles[i]);
    //   }
    // }

});
