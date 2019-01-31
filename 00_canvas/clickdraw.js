
c = document.getElementById("slate");
ctx = c.getContext("2d");

var clear = document.getElementById("clear");

clear.addEventListener( "click" , function() {
    ctx.clearRect( 0, 0, c.width, c.height );
});

c.addEventListener( "click" , function(event) {

    if (rect) {
        ctx.fillRect( event.offsetX, event.offsetY, 100, 100 );
    } else {
        ctx.beginPath();
        ctx.ellipse( event.offsetX, event.offsetY, 20, 10, 0, 0, 2 * Math.PI );
        ctx.fill();
    }
});

var rect = false;
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
