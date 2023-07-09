// JavaScript Document

$(document).ready(function() {
  $('[id^="m"]').click(function() {
    var itemId = $(this).attr('id');		
    var pdfUrl = 'multimedia/libros/cuentosm2/c' + itemId.charAt(itemId.length - 1) + '.pdf';
    $('#lector').attr('src', pdfUrl);
    //$('#lectura').modal('show');
  });
	$('[id^="guia"]').click(function() {
    var itemId = $(this).attr('id');		
    var pdfUrl = 'multimedia/libros/guia2/' + itemId.charAt(itemId.length - 1) + '.pdf';
    $('#lector').attr('src', pdfUrl);
    //$('#lectura').modal('show');
  });
		$('[id^="mod"]').click(function() {
    var itemId = $(this).attr('id');		
    var pdfUrl = 'multimedia/libros/guia3/' + itemId.charAt(itemId.length - 1) + '.pdf';
    $('#lector').attr('src', pdfUrl);
    //$('#lectura').modal('show');
  });
});

function cambiaraudio(archivo){
	var audio = document.getElementById("reproductor");
	var fuenteAudio = document.getElementById("fuenteAudio");
	
	var ruta="multimedia/audio/modulo2/sr/"+archivo;	
	
	fuenteAudio.src =ruta;
	audio.load();
	audio.play();
	
	$("#numitem").html(archivo);
	
}

function cargacontenido(nombrediv,nombresitio){
	$("#"+nombrediv).load(nombresitio);
}

function pintarcolor(item,sitio){	
	if(sitio=='quiensoy.html'){
		$("#circulo1,#circulo2,#circulo3").css('background-color','white')
		$("#circulo"+item).css('background-color','red')
	}
}

function reproducirAudio(valor) {    
	var audio = document.getElementById(valor);
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
}

function reiniciodatos(){
	$("input").val("");
	
}


/*var colorlinea='black';

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
});*/
