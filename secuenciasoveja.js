var intentosbuenos=0;
var intentosmalos=0;
var intentostotales=0;
var alea=0;

let intervalId;
let segundos = 0;
let minutos = 0;
let horas = 0;

const maudio = document.getElementById('audio');
const gaudio = document.getElementById('gaudio');
const paudio = document.getElementById('paudio');

var palabras=["","Una emoción es…","Las emociones negativas ","Las emociones positivas ","La alegría la expresamos ","Ira o enfado. ","Miedo","Desagrado","Tristeza","Alegría","Sorpresa","Amor","Me enojo cuando","Me siento alegre cuando","Que cosas me entristecen","Que me da miedo ","Que me desagrada","Angustia","Disminuyo la angustia si","La angustia se manifiesta con ","Para calmar el enojo o ira ","Cuando tengo miedo ","Cuando estoy triste","Para ayudar a una persona angustiada puedo","Para ayudar a una persona angustiada debo"];

var valores=["","Es una respuesta a una emoción en específico","Como la culpa son respuestas ante situaciones desagradables, implican esfuerzo para afrontarlas y buscar un cambio","Respuesta favorable ante una situación que nos resulta agradable","Mediante la risa y la sonrisa","Es desencadenada por insatisfacción, llevándonos a perder el control y manifestarse en gritos y agresividad","Aparece cuando creemos que algo es peligroso, haciendo que nos escondamos o huyamos del peligro","Es la sensación ante algo que nos repugna","Nos sentimos mal cuando perdemos algo, queremos estar solos y lloramos","Se experimenta cuando algo nos agrada, nos hace reír","Aparece ante algo inesperado, inoportuno o extraño","Es una capacidad natural de las personas para establecer lazos afectivos con otros","Invaden mi espacio: como revisan mi celular, critican mi apariencia, etc","Recibo respeto, alcanzo metas, recibo apoyo familiar y disfruto de mis actividades preferidas","Pérdida afectiva, sentirme rechazado, criticado, frustrado por no alcanzar metas y lidiar con cambios corporales","Experimentar rechazo social, carecer de amor romántico, sentirme ignorado y enfrentar la incertidumbre sobre el futuro","Sentirme frustrado por ser tratado como un niño, ser objeto de burlas, ser ignorado y ser comparado con otros","Es una sensación de preocupación y tensión debido a una amenaza real o imaginaria anticipada","Respiro profundamente, reflexiono sobre sentimientos, actividades placenteras y pensamientos positivos","Mareos, náuseas, falta de aire, trastornos del sueño y opresión en el pecho","Beber agua, respirar profundamente, contar hasta diez y alejarse de la fuente de enojo","Busco apoyo, encontro un lugar seguro o refugio, y me mantengo alejado de la persona que provoca la emoción","Reflexiono sobre mis sentimientos, hablo con alguien de confianza, hago ejercicio y participo en actividades activas","Mantengo la calma, pregunto qué sucede, intento tranquilizarla, respire profundamente y estando presente hasta que se calme","Mantengo la calma, la traslado a un lugar tranquilo, hablo con frases simples, no intento convencerle, pregunto si quiere hablar sobre lo que ocurrió"];

var valoractual=0;

//valores=["","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"];

var seleccionados=[""];
var pseleccionados=[""];

$("#botonesprin").hide();

function coloraleatorio(){
  var mov=0;
  var color=0;
  var colores = [
  '#FFFFFF', // Blanco
  '#FFFAF0', // Marfil
  '#F0FFF0', // Miel de rocío
  '#F5F5DC', // Beige
  '#FFE4C4', // Cáscara de huevo
  '#F0E68C', // Amarillo khaki
  '#FAFAD2', // Amarillo arena
  '#FFFACD', // Amarillo limón
  '#FFD700', // Oro
  '#FFFFF0', // Marfil claro
  '#FFEFD5', // PapayaWhip
  '#FFF5E1', // Almendra
  '#FAEBD7', // Almendra claro
  '#FFE4B5', // Moccasin
  '#FFDEAD', // Piel de melocotón
  '#FFE4E1', // Rosa almendra
  '#FFF0F5', // Lavanda rojiza
  '#FAF0E6', // Lino
  '#FFEBCD', // Trigo
  '#FFFAFA', // Nieve
  '#F5FFFA', // Menta marina
  '#F0FFFF', // Azul celeste
  '#E0FFFF', // Azul claro
  '#FAF0F0', // Rosa pastel
  '#FFE4CC', // Melocotón
  '#FFF5EE'  // Seashell
];

  
  for(mov=1;mov<=15;mov++){
    color=Math.floor(Math.random() * 24) + 1;
    
    $("#b"+mov).css('background-color',colores[color]);    
  }
}

const animacion=setInterval(function() {  
	$('#binicio').fadeOut(1000, function() {				
		$('#binicio').fadeIn(500); 
	});
}, 2000);

function numal() {
  let numerosGenerados = new Set();
  
  while (numerosGenerados.size < 24) {
    let numeroAleatorio = Math.floor(Math.random() * 24) + 1;
    numerosGenerados.add(numeroAleatorio);
  }
  
  return [...numerosGenerados];
}

function asignacion(){
  var mov=0;
  $("#rotulo").hide();
  
  for(mov=1;mov<=24;mov++){
    $("#b"+mov).hide();
  }
  
  const nal=numal();
  
  for(mov=1;mov<=12;mov++){    
    $("#b"+mov).show();        
    $("#b"+mov).text(valores[nal[mov]]);  
    seleccionados.push(valores[nal[mov]]);
    pseleccionados.push(palabras[nal[mov]]);
    
    $("#b"+mov).css('font-size','12px');
    $("#b"+mov).css('color','black');
    
  }
  
}

function iniciar(){
  valor=Math.floor(Math.random()*12)+1;  
  
  $("#rotulo").show();  
  $("#palabra").html(pseleccionados[valor]);
	$("#botonesprin").show("slow");
	clearInterval(animacion);
  valoractual=valor;  
	maudio.play();	
}



function actualizarCronometro() {
  segundos++;
  if (segundos == 60) {
    segundos = 0;
    minutos++;
    if (minutos == 60) {
      minutos = 0;
      horas++;
    }
  }

  const tiempo = `${horas < 10 ? '0' : ''}${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  $('#cronometro').text(tiempo);
}

$(document).ready(function() { 
  $("button").click(function() {
    var idboton=$(this).attr('id');
    var valorb=idboton.substr(1,10);
    
    if(idboton=="binicio"){            
      $("#binicio,#instrucciones").hide();			
			document.getElementById("binicio").display="none";
      
      setInterval(actualizarCronometro, 1000);
      
    }
    else{
      if($("#"+idboton).html()!=""){
        intentostotales++;

        if(valor==valorb){
          intentosbuenos++;
          $("#buenas").html(intentosbuenos);

          $("#modalbuena").modal('show');

          $("#"+idboton).html("");
          pseleccionados[valor]="-";

          setTimeout(function(){$("#modalbuena").modal('hide');},1500);

          if(intentosbuenos==12){
            $("#tiempo").html($("#cronometro").html());
            $("#intentosusados").html(intentostotales);
            setTimeout(function(){$("#ganador").modal('show');},1600); 
						
						gaudio.play();
						maudio.pause();
          }
        }
        else{
          intentosmalos++;        
          $("#modalmala").modal('show');

          setTimeout(function(){$("#modalmala").modal('hide');},1500);

          $("#vida"+intentosmalos).animate({opacity:0},1000);

          if(intentosmalos==3){
            setTimeout(function(){$("#nointentos").modal('show');},1600);
						
						paudio.play();
						maudio.pause();

          }
        }      

        $("#palabra").hide("slow");
        setTimeout(function(){
           
					if(intentosbuenos<12&intentosmalos<3){
						var validador=0;

						while (validador < 1) {          
							alea=Math.floor(Math.random() * 12) + 1;
							if(pseleccionados[alea]!="-"){
								valor=alea;
								$("#palabra").html(pseleccionados[alea]);            
								$("#palabra").show("slow");
								validador=2;
							}
						}
					}
        },1600);
      }
    }
  });
});



coloraleatorio();
asignacion();