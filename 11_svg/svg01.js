// Ivan Zhang
// SoftDev pd7
// K #11: Ask Circles [Change || Die] …While On The Go
// 2019-03-14

var pic = document.getElementById("vimage");
var mys = document.getElementById("mysterio");
var move = document.getElementById("move");
var clear = document.getElementById("but_clear");
var isMoving = false;

move.addEventListener("click", function() {
  isMoving = !isMoving;
})


clear.addEventListener( "click" , function() {

    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", 500);
    rect.setAttribute("height", 500);
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("fill", "white");

    pic.appendChild(rect);
});

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
      circle.setAttribute("stroke", "black");
      circle.setAttribute("fill", "blue");
      pic.appendChild(circle);
      circles.push(circle);
    }

    newCircle = true;





});
