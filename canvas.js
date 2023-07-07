// JavaScript Document
var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");
var coord = { x: 0, y: 0 };
var colorlinea='black';

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();

function resize() {
  ctx.canvas.width = window.innerWidth;
  //ctx.canvas.height = window.innerHeight;
}
function reposition(event) {
  coord.x = event.pageX - canvas.offsetLeft;
  coord.y = event.pageY - canvas.offsetTop;
}
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 2;  
  ctx.lineCap = "round";
  ctx.strokeStyle = colorlinea;
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}

var limpiarBtn = document.getElementById("limpiarCanvas");

limpiarBtn.addEventListener("click", function() {
	limpiarCanvas();
});

function limpiarCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}	