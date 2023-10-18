var clicado=[99,0,0,0,0,0,0,0,0,0,0,0,0];
var vision=[0,0,0,0,0,0,0,0,0,0,0,0];
var textostit=["","Perseverante","Paciente","Adaptable","Cooperativos","Decididos","Tolerantes","Tranquilidad","Inteligente","Amoroso(a)","Receptivo(a)","Positiva(o)","Generosa(o)","Alternativa","Participativa(o)","Auténtica(o)","Responsable","Alegre","Madura","Proveedor(a)","Compasiva(o)","Solidaria(o)","Sensible","Agradecida(o)","Optimista","Saludable",
];

var ciclo=99;
var cartaactual=0;
var cartafinal=0;
var elementoactual=0;
var elementofinal=0;
var intentos=10;
var intentosbuenos=0;
var inicio=0;
var contador=5;
var posiciones=[];


function ocultar(){
  $("#miniciar").modal('show');
  actualizarContador();
  inicio=1;  
	$('#fondo')[0].play();
  
  for(mov=0;mov<=11;mov++){
    $("#c"+posiciones[mov]).attr('src','multimedia/Imagen'+cartas[mov]+'.png');  
  }
  
  setTimeout(function(){
    $("#acarta")[0].play(); 
  },3000);
  
}

//6 10 y 12 intentos

function cambio(elemento,valor){	
  if(elemento!=elementoactual){		
    if(clicado[elemento]==0){
      if(inicio>0){    				
        $("#acarta")[0].play();
        if(ciclo==99){
          for(mov=0;mov<=11;mov++){
            if(elemento==posiciones[mov]){
              $("#c"+elemento).attr('src','multimedia/Imagen'+cartas[mov]+'.png');    
              vision[mov]=1;
              cartaactual=cartas[mov];
              elementoactual=elemento;
              mov=100;
              ciclo=1
            }      
          }    
        }
        else{
          if(ciclo==1){
            intentos--;

            for(mov=0;mov<=11;mov++){
              if(elemento==posiciones[mov]){
                $("#c"+elemento).attr('src','multimedia/Imagen'+cartas[mov]+'.png');    
                vision[mov]=1;
                cartafinal=cartas[mov];
                elementofinal=elemento;

                if(cartaactual==cartafinal){
                  intentosbuenos++;

                  if(intentosbuenos<10){
                    var data='<img src="multimedia/completas/Imagen'+cartas[mov]+'.png" width="200px" height="400px">';
                    $("#frase").html(data);
                    $("#titulofrase").html(textostit[cartas[mov]]);
                    $("#mfrase").modal('show');
                    $("#rotulo").html("Excelente trabajo!!!<br>tienes "+intentos+' intentos mas');
                  }
                  setTimeout(function(){
                      $("#c"+elementoactual).attr('src','multimedia/bueno.jpg');
                      $("#c"+elemento).attr('src','multimedia/bueno.jpg');
                    },500);          

                  clicado[elementoactual]=1;
                  clicado[elemento]=1;
                  
                  $("#abuena")[0].play();
                }
                else{                  
                  $("#rotulo").html("Lo siento, no coinciden las imágenes!!!<br>tienes "+intentos+" intentos mas");
                  $("#amala")[0].play();
                  setTimeout(malpaso,500);  
                  clicado[elementoactual]=0;
                  clicado[elemento]=0;
                }

                mov==100;
              }      
            }         

            ciclo=99;

            if(intentosbuenos==6){
              $("#ganador").modal('show');
              $("#rotulo").html("Tienes muy buena memoria, Felicidades!!!!");
							$('#fondo')[0].pause();
              $("#aganador")[0].play();
            }        
            if(intentos==0){
							$('#fondo')[0].pause();
              $("#nointentos").modal('show');
              $("#aperdedor")[0].play();
            }                     
          }    
        }
      }
    }
  }
}

function malpaso(elemento1, elemento2){
  $("#c"+elementoactual).attr('src','multimedia/cover.jpg');    
  $("#c"+elementofinal).attr('src','multimedia/cover.jpg');    
}

function azar(max) {
  let numeroAzar = Math.floor(Math.random() * max) + 1; 
  return numeroAzar;
}

function textos(){
	var seleccionados=[];
	
	cartas = generarNumerosAleatorios(25,6);	
  posiciones=generarNumerosAleatorios(12,12);	
  
  cartas.push(cartas[0]);
  cartas.push(cartas[1]);
  cartas.push(cartas[2]);
  cartas.push(cartas[3]);
  cartas.push(cartas[4]);
  cartas.push(cartas[5]);  
    	
	var contador=0;
}

function generarNumeroAleatorio(min, max, numerosGenerados) {
  let numero;
  do {
    numero = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (numerosGenerados.includes(numero));
  return numero;
}

function generarNumerosAleatorios(maximo,cantidad) {
  const numerosGenerados = [];
  const cantidadNumeros = cantidad;
  const min = 1;
  const max = maximo;

  for (let i = 0; i < cantidadNumeros; i++) {
    const numero = generarNumeroAleatorio(min, max, numerosGenerados);
    numerosGenerados.push(numero);
  }

  return numerosGenerados;
}

function actualizarContador() {
  if (contador > 0) {
    $('#contador').text(contador);
    contador--;
    setTimeout(actualizarContador, 1000);
  } else {
    //$('#contador').text('¡Listo!');
    $("#miniciar").modal('hide');
    $("#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8,#c9,#c10,#c11,#c12").animate({opacity:0.3},500, function() {    
      $("#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8,#c9,#c10,#c11,#c12").animate({
        opacity: 1
      }, 500);  
    });

    setTimeout(function(){
      for(mov=1;mov<=12;mov++){
        $("#c"+mov).attr('src','multimedia/cover.jpg');
      }}
    ,500);
    
    $("#rotulo").html("Tienes "+intentos+" intentos, <br>Selecciona una carta para inciar!!!");
  }
}

textos();

$(document).ready(function() {	
  $("mintentos").modal('show');
});

