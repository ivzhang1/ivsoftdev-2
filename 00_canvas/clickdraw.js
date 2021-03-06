// Ivan Zhang
// SoftDev2 pd7
// K #00: I See a Red Door...
// 2019-01-30


c = document.getElementById("slate");
ctx = c.getContext("2d");

var clear = document.getElementById("clear");

clear.addEventListener( "click" , function() {
    ctx.clearRect( 0, 0, c.width, c.height );
});

var rect = false;
c.addEventListener( "click" , function(event) {
    //event.preventDefault();
    if (rect) {
        ctx.fillRect( event.offsetX, event.offsetY, 100, 100 );
    } else {
        ctx.beginPath();
        ctx.ellipse( event.offsetX, event.offsetY, 20, 10, 0, 0, 2 * Math.PI );
        ctx.fill();
    }
});

var toggle = document.getElementById("toggle");

toggle.addEventListener( "click" , function() {
    rect = !rect;
    if(rect){
      toggle.innerHTML = "Current Mode: Rectangle";
    }
    else{
      toggle.innerHTML = "Current Mode: Dot";
    }

});
