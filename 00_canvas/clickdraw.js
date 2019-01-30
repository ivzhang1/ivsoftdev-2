//c = document.getElementById("slate")
//ctx = c.getContext("2d")
//ctx.fillStyle = "#ffffff"
//ctx.fillRect(0,0, c.height,c.width)
//ctx.ellipse(10,10,10,10, 0, 0, Math.PI*2)

function drawRec(event) {
  var x = event.clientX;
  var y = event.clientY;
  ctx.fillStyle = "#000000"
  ctx.fillRect(x-10,y-10,x+10,y+10)

}

function drawDot(event) {
  var x = event.clientX;
  var y = event.clientY;
  ctx.fillStyle = "#000000"
  ctx.fillRect(x-10,y-10,x+10,y+10)

}
