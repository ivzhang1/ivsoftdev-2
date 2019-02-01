// team Northpoint (Ivan Zhang, Qian Zhou)
// SoftDev2 pd7
// K #01: ...and I want to Paint It Better
// 2019-01-31


c = document.getElementById("slate");
ctx = c.getContext("2d");

var clear = document.getElementById("clear");

clear.addEventListener( "click" , function() {
    ctx.clearRect( 0, 0, c.width, c.height );
    //event.preventDefault();
});

var rect = false; //State var for box | dot
c.addEventListener( "click" , function(event) {
    //event.preventDefault(); // Disable default process for event
    if (rect) {
        ctx.fillRect( event.offsetX, event.offsetY, 100, 100 ); // Get the X, Y cors of Mouse-based on Canvas Coords
    } else {
        ctx.beginPath(); // Empty list of saved subpaths and starts new one
        ctx.ellipse( event.offsetX, event.offsetY, 20, 10, 0, 0, 2 * Math.PI );
        ctx.fill();
    }
});

var toggle = document.getElementById("toggle");

toggle.addEventListener( "click" , function() {
    rect = !rect;
});
