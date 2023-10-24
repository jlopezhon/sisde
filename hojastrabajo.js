// JavaScript Document

var scriptElement = document.createElement('script');
scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js';
document.head.appendChild(scriptElement);

var scriptElement = document.createElement('script');
scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js';
document.head.appendChild(scriptElement);
 
//<script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>
  //<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>

document.write('<div class="col-md-12 m-2" style="width:90%" id="coloresb"><div id="contenedor" class="bg bg-white rounded rounded-5 p-2">Selector de Colores	');

var colores = [
	"#000000", // Negro
	"#FF0000", // Rojo
	"#00FF00", // Verde
	"#0000FF", // Azul
	"#FFFF00", // Amarillo
	"#FF00FF", // Magenta
	"#00FFFF", // Cian
	"#FFA500", // Naranja
	"#800080", // Morado
	"#008000", // Verde oscuro
	"#000080", // Azul oscuro
	"#800000", // Marrón
	"#808000", // Oliva
	"#008080", // Verde azulado
	"#808080", // Gris
	"#FFFFFF"  // Blanco
];

var indice=0;

var container = document.getElementById("contenedor");

colores.forEach(function(color) {
	var div = document.createElement("div");
	div.className = "color-div";
	div.style.backgroundColor = color;
	
	if(indice==15){
		//div.style.border = "solid";		
		const imgElement = document.createElement('img');
		imgElement.src = '../../imagenes/borrador.jpg'; 
		div.appendChild(imgElement);
		
		imgElement.style.width = '32px';
		imgElement.style.height = '24px';
		imgElement.style.border="none";

	}
	
	div.addEventListener("click", function() {
		colorlinea=color;
	});
	container.appendChild(div);
	indice++;
});

document.write('</div><div id="botones" class="col-md-12 m-2"><button type="button" id="limpiarCanvas" class="btn btn-primary me-2">Limpiar Lienzo</button><button type="button" id="guardarCanvas" onclick="capturarPantalla()" class="btn btn-success">Guardar Lienzo</button></div></div>');

function seleccionado(item){
	if(item==3||item==5||item==7||item==11){
		alert("Seleccionaste la opción correcta!!!!");	
		$("#btns"+item).removeClass("btn-light");    
    $("#btns"+item).addClass("btn-primary");  
	}
	else{
		alert("Intentalo de nuevo");		
	}
}

function capturarPantalla() {
    $("#botones,#coloresb").hide();

	
	var elemento = document.getElementById("dibujo");

	domtoimage.toBlob(elemento)
		.then(function(blob) {
			saveAs(blob, "MiTrabajo.png");
		})
		.catch(function(error) {
			console.error("Error al capturar la pantalla:", error);
		});
	
	$("#botones,#coloresb").show();
  
}