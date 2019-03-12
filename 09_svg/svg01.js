// Ivan Zhang
// SoftDev pd7
// K09 -- basic SVG work
// 2019-03-13
// JS file for initial forays into SVG...

var pic = document.getElementById("vimage");


var clear = document.getElementById("but_clear");

clear.addEventListener( "click" , function() {
    ctx.clearRect( 0, 0, c.width, c.height );
});

pic.addEventListener( "click" , function(event) {
    //event.preventDefault();
    console.log("HELLO")
    var circle = document.createElementNS("https://www.w3.org/2000/svg", "circle")
    circle.setAttribute("cx", event.offsetX)
    circle.setAttribute("cy", event.offsetY)
    circle.setAttribute("r", 10)
    circle.setAttribute("stroke", "black")
    circle.setAttribute("fill", "blue")
    var pic = document.getElementById("vimage");

    pic.appendChild(circle)
});
