// team Northpoint (Ivan Zhang, Qian Zhou)
// SoftDev2 pd7
// K #02: Connecting the Dots
// 2019-02-02


c = document.getElementById("playground");
ctx = c.getContext("2d");
isDots = false; // is true if there is at least one dot on canvas
prevX = 0; // Store x cord of prev point
prevY = 0; // Store y cord of prev point

var clear = document.getElementById("clear");

clear.addEventListener( "click" , function() {

    ctx.clearRect( 0, 0, c.width, c.height ); //clears canvas
    ctx.beginPath(); // resets the paths drawn, puts pen down
    isDots = false; // resets isDots boolean

});

c.addEventListener( "click" , function(event) {

    if(!isDots){
      ctx.beginPath(); // puts pen down
      ctx.ellipse( event.offsetX, event.offsetY, 10, 10, 0, 0, 2 * Math.PI );
      ctx.fill(); //fills ellipse
      isDots = true; 
      x = event.offsetX;
      y = event.offsetY;
    }
    else{
      ctx.beginPath(); // puts pen down
      ctx.moveTo(x,y); // moves pen to place of prev point
      x = event.offsetX;
      y = event.offsetY;
      ctx.lineTo(x,y); // draws line to new point
      ctx.ellipse( x, y, 10, 10, 0, 0, 2 * Math.PI ); // puts point down on new start of line
      ctx.fill(); //fill in point
    }


});
