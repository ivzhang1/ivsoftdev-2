// team Northpoint (Ivan Zhang, Qian Zhou)
// SoftDev2 pd7
// K #01: ...and I want to Paint It Better
// 2019-01-31


c = document.getElementById("playground");
ctx = c.getContext("2d");

var clear = document.getElementById("clear");

clear.addEventListener( "click" , function() {

    ctx.clearRect( 0, 0, c.width, c.height );
    //event.preventDefault();
    ctx.beginPath();

});

c.addEventListener( "click" , function(event) {
  ctx.ellipse( event.offsetX, event.offsetY, 10, 10, 0, 0, 2 * Math.PI );
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.beginPath();

    ctx.fill();


});
