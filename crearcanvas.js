// JavaScript Document
function crearcanvas(nombrelienzo){
	var colorlinea='black';

	var div1 = document.getElementById('div1');
	var canvas1 = document.getElementById(nombrelienzo);  
	var ctx1 = canvas1.getContext('2d');
	
	function drawOnCanvas1(event) {
		var x = event.clientX - canvas1.offsetLeft;
		var y = event.clientY - canvas1.offsetTop;
		
		ctx1.beginPath();
		ctx1.lineWidth = 5;  
		ctx1.lineCap = "round";
		ctx1.strokeStyle = colorlinea;
		ctx1.setLineDash=([]);
		ctx1.moveTo(x, y);    
		ctx1.lineTo(x, y);
		ctx1.stroke();
	}
	
	canvas1.addEventListener('mousedown', function(event) {
		canvas1.addEventListener('mousemove', drawOnCanvas1);
	});

	canvas1.addEventListener('mouseup', function(event) {
		canvas1.removeEventListener('mousemove', drawOnCanvas1);
	});
}