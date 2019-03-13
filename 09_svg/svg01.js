// Ivan Zhang
// SoftDev pd7
// K09 -- basic SVG work
// 2019-03-13
// JS file for initial forays into SVG...

var pic = document.getElementById("vimage");


var clear = document.getElementById("but_clear");

var prevX = null
var prevY = null

clear.addEventListener( "click" , function() {
    while (pic.lastChild) {
      pic.removeChild(pic.lastChild);
    }
    prevX = null
    prevY = null
    // var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    // rect.setAttribute("width", 500);
    // rect.setAttribute("height", 500);
    // rect.setAttribute("x", 0);
    // rect.setAttribute("y", 0);
    // rect.setAttribute("fill", "white");
    //
    // pic.appendChild(rect);
});

pic.addEventListener( "click" , function(event) {
    event.preventDefault();
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", event.offsetX);
    circle.setAttribute("cy", event.offsetY);
    circle.setAttribute("r", 10);
    circle.setAttribute("stroke", "black");
    circle.setAttribute("fill", "blue");
    //console.log(circle)
    pic.appendChild(circle);

    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    if(!prevX || !prevY){
      prevX = event.offsetX;
      prevY = event.offsetY;
    }

    line.setAttribute("x1", prevX);
    line.setAttribute("x2", event.offsetX);
    line.setAttribute("y1", prevY);
    line.setAttribute("y2", event.offsetY);
    line.setAttribute("stroke", "black");

    prevX = event.offsetX;
    prevY = event.offsetY;

    pic.appendChild(line);




});
