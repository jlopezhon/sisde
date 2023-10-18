const datos=[
  ["500","Se considera niño, niña","Menor de 6 años","6 a 12 años","12 a 18 años","Menor de 18 años","Menor de 18 años"],
  ["1,000","La persona que se traslada fuera de su lugar de residencia dentro de un país o a través de una frontera internacional es:","Turista","Residente","Vacacionista","Migrante","Migrante"],
  ["2,000","Usar intencionalmente la fuerza física para causar daño, sufrimiento como golpear, sacudir, quemar, mutilación genital femenina, tortura es: ","Castigo","Disciplina","Educar","Abuso físico","Abuso físico"],
  ["3,000","Causar daño a una niña o niño, que es llamándole por nombres feos o apodos, crítica constante, avergonzarle, amenazarle, confinarlo o aislarlo solitario es:","Abuso Físico","Abuso Sexual","Disciplina","Abuso Emocional","Abuso Emocional"],
  ["4,000","Abuso Sexual significa:","Usar intencionalmente la fuerza física para causar daño, sufrimiento","Trabajo forzado (comúnmente en fábricas o en la agricultura).","Causar daño al desarrollo emocional, intelectual, mental o psicológico a una niña o niño, incluyendo trato humillante, degradante","Utilizar a un niño, niña, joven en un acto sexual, tocarlo o manosearlo de forma indecente, exhibicionismo, incesto, matrimonio precoz y forzado, violación, participación en pornografía, esclavitud sexual","Utilizar a un niño, niña, joven en un acto sexual, tocarlo o manosearlo de forma indecente, exhibicionismo, incesto, matrimonio precoz y forzado, violación, participación en pornografía, esclavitud sexual"],
  ["5,000","Es cualquier participación en cualquier actividad sexual sin consentimiento a cambio de dinero, regalos, alimento, alojamiento, afecto, estatus o cualquier otra cosa que ellos o su familia necesiten","Trabajo forzado (comúnmente en fábricas o en la agricultura).","Pornografía Infantil","Abuso Emocional","Explotación Sexual","Explotación Sexual"],
  ["10,000","Trato Negligente es:","Maltrato Infantil","Manipulacion","Abuso Sexual","Incapacidad persistente para satisfacer las necesidades físicas o psicológicas básicas de una niña o niño","Incapacidad persistente para satisfacer las necesidades físicas o psicológicas básicas de una niña o niño"],
  ["15,000","Son formas de trato negligente:","No proporcionar alimentos, ropa o refugio","No brindar atención medica, exposición a la violencia con acceso a armas","No permitir que hagan los que quieran","A, B y C son correctas","A, B y C son correctas"],
  ["25,000","Una relación con niño, niña o joven o en el cual un cuidador se gana su confianza o la confianza de su cuidador con fines de abusar o explotarle sexualmente es:","Negligencia","Explotación","Abuso Emocional","Manipulación","Manipulación"],
  ["50,000","Todos los niños gozan de los mismos derechos, sin importar quienes sean, donde vivan, idioma, religión, sean niñas o niños, discapacitados, ricos, pobres; quien sea su padre, su madre y su familia. No debe tratarse injustamente a ningún niño, por ningún motivo. Es el derecho de:","Derechos a la Vida","Derecho a la Educación","Derecho al Juego","No discriminación","No discriminación"],
  ["100,000","Derecho a la vida, supervivencia y desarrollo consiste en:","Ser inscritos al nacer y recibir un nombre y una nacionalidad","No ser separado de su padre o madre","Poder elegir sus propias ideas, opiniones y religión, siempre que no impidan a otras personas disfrutar de sus propios derechos","Los gobiernos deben asegurar que los niños sobrevivan y crezcan en todo su potencial","Los gobiernos deben asegurar que los niños sobrevivan y crezcan en todo su potencial"],
  ["250,000","Derecho a un nombre y nacionalidad significa que:","Todo niño tiene derecho a recibir una educación","Todo niño tiene derecho su propia lengua, cultura, religión","Todo niño tiene derecho al descanso, a relajarse, a jugar","Todos los niños deben ser inscritos al nacer y recibir un nombre que el gobierno les reconozca oficialmente","Todos los niños deben ser inscritos al nacer y recibir un nombre que el gobierno les reconozca oficialmente"],
  ["500,000","Libertad de pensamiento y religión significa que:","Los niños tienes derecho a su propia lengua, cultura, religión","La incapacidad persistente para satisfacer las necesidades físicas o psicológicas básicas","Todas las Anteriores","Los niños pueden elegir sus propias ideas, opiniones y religión, siempre que no impidan a otras personas disfrutar de sus propios derechos","Los niños pueden elegir sus propias ideas, opiniones y religión, siempre que no impidan a otras personas disfrutar de sus propios derechos"],
  ["1,000,000","Cada niño tiene derecho a una educación primaria debería ser gratuita, la secundaria y superior deben estar al alcance de todos, se refiere a:","Derecho a la Vida","Derecho a la Salud y Nutrición","Derecho a un Nombre","Derecho a la Educación","Derecho a la Educación"]];

const puntajes=[500,1000,2000,3000,4000,5000,10000,15000,25000,50000,100000,250000,500000,1000000];

const opciones=["A. ","B. ","C. ","D. "];
 
var aumento=0;
var numaleatorio=0;
var actual=0;
var posiciones=0;
var puntajeacumulado=0;
var puntajeganado=0;
var buena="NOOOO";

const numeros = [1, 2, 3, 4];

let audio = document.getElementById('fondoaudio');
let perdida = document.getElementById('paudio');
let ganador = document.getElementById('gaudio');
let reproduciendo = false;

function reproducirDetenerAudio() {
  if (reproduciendo) {
    audio.pause();  // Detiene la reproducción si está en reproducción
  } else {
    audio.play();  // Reproduce si está detenido
  }
  reproduciendo = !reproduciendo;  // Invierte el estado de reproducción
}



function inicio(){  	
  posiciones=generarNumerosAleatorios15();		
  $("#pregunta").html(datos[posiciones[0]][1]);  
  
  numal=generarNumerosAleatorios();	
	numb=generarNumerosAleatoriosb();
	
	buena=datos[posiciones[0]][6];
		
  for(mov=2;mov<=5;mov++){    
		nal=mov-2;
    opcion=mov-2;
    if(datos[posiciones[0]][mov]!=''){      
     //$("#boton"+numb).text(opciones[opcion]+datos[posiciones[0]][mov]);  
      $("#boton"+numb[nal]).text(datos[posiciones[0]][numal[nal]]);  
      
     var largo=$("#boton"+numb).text();

    }
    else{
      $("#boton"+numb).hide("slow"); 
    }
  }
  
  $("#cuadropregunta").hide();
 
}

let intervalId;
let minutos = 0;
let segundos = 30;

function actualizarTemporizador() {
  if (segundos === 0 && minutos === 0) {
    audio.pause();
    detenerTemporizador();        
    $("#nointentos").modal('show');
		perdida.play();
    return;
  }

	if(segundos==10){
		$("#tempo").css("color","red");
		$("#modalseg").modal("show")		
	}
	
	if(segundos<10){
		$("#modalseg").modal("hide");
	}
	
  if (segundos === 0) {
    minutos--;
    segundos = 59;
  } else {
    segundos--;
  }

  const displayMinutos = minutos < 10 ? '0' + minutos : minutos;
  const displaySegundos = segundos < 10 ? '0' + segundos : segundos;

  $("#tempo").html(segundos);
}

function detenerTemporizador() {
  clearInterval(intervalId);  
}

function reiniciarTemporizador() {
  detenerTemporizador();
  segundos = 30;
  $("#tempo").html(segundos);
}

function iniciojuego(){
  reproducirDetenerAudio();	
	$("#opor").show("slow");
	$("#cglobal").css("height","150px");
	$("#puntaje").css("height","150px");
  $("#ayuda").show("slow");
  $("#binicio").prop("disabled",true);
  $("#cuadropregunta").show("slow");
  $("#tempo").show("slow");
  $("#puntaje").hide();
  $("#puntaje").html("<span class='bajo'>Estas jugando por</span>"+puntajes[0]+ " Puntos");
  $("#puntaje").show("slow");
  intervalId = setInterval(actualizarTemporizador, 1000);
}

function generarNumerosAleatorios() {
  const numerosDisponibles = [2, 3, 4, 5];
  const numerosAleatorios = [];

  for (let i = 2; i < 6; i++) {
    const indiceAleatorio = Math.floor(Math.random() * numerosDisponibles.length);
    const numeroAleatorio = numerosDisponibles.splice(indiceAleatorio, 1)[0];
    numerosAleatorios.push(numeroAleatorio);
  }

  return numerosAleatorios;
}

function generarNumerosAleatoriosb() {
  const numerosDisponibles = [1, 2, 3, 4];
  const numerosAleatorios = [];

  for (let i = 1; i < 5; i++) {
    const indiceAleatorio = Math.floor(Math.random() * numerosDisponibles.length);
    const numeroAleatorio = numerosDisponibles.splice(indiceAleatorio, 1)[0];
    numerosAleatorios.push(numeroAleatorio);
  }

  return numerosAleatorios;
}


function generarNumerosAleatorios15() {
  const numerosDisponibles = [0,1, 2, 3, 4,5,6,7,8,9,10,11,12,13];
  const numerosAleatorios = [];

  for (let i = 0; i < 14; i++) {
    const indiceAleatorio = Math.floor(Math.random() * numerosDisponibles.length);
    const numeroAleatorio = numerosDisponibles.splice(indiceAleatorio, 1)[0];
    numerosAleatorios.push(numeroAleatorio);
  }

  return numerosAleatorios;
}

function help(parametro){	
	var contador=0;
	
	if(parametro==1){
		for(mov=2;mov<=5;mov++){
			bot=mov-1;
			
			
			if($("#boton"+bot).text()!=buena&contador<2){	
				contador++;
				$("#boton"+bot).hide("slow");	
			}
		}
		
		$("#ayuda").attr("disabled","disabled");
	}
}

function funcion(parametro){
	$("#boton1,#boton2,#boton3,#boton4").show("slow");	
	
	if(puntajes[aumento]==1000000){		
		audio.pause();
		paudio.pause();
		ganador.play();		
		detenerTemporizador();
		$("#tempo").html();
		$("#puntaje").hide();
		$("#puntaje").html("GANADOR!!!!");
		$("#resultadobien").html("Ganaste "+puntajeacumulado+" Puntos");
		$("#puntaje").show("slow");
		setTimeout(function(){$("#ganador").modal("show");},1000);
	}
	else{
		var validacion=0;
		reiniciarTemporizador();
		aumento++;

		$("#pregunta").html(datos[posiciones[aumento]][1]);   
		$("#puntaje").hide();
		$("#puntaje").html("<span class='bajo'>Estas jugando por</span>"+puntajes[aumento]+ " Puntos");
		$("#puntaje").show("slow");
		
		if(buena==$("#boton"+parametro).text()||datos[posiciones[actual]][6]=="Todas son corectas"||datos[posiciones[actual]][6]=="A, B y C son correctas"){
			validacion=1;			
			puntajeganado=puntajes[actual];
			puntajeacumulado=puntajes[aumento];
      buena=datos[posiciones[aumento]][6];
			$("#modalbuena").modal("show");
			$("#a"+aumento).css('background-color','white');
			$("#a"+aumento).css('color','black');
			setTimeout(function(){$("#modalbuena").modal("hide");},1500);
			setTimeout(function(){intervalId = setInterval(actualizarTemporizador, 1000);},1500);
			
		}    

		if(validacion==0){    
      audio.pause();
			ganador.pause();
			$("#resultadomal").html("Ganaste "+puntajeganado+" Puntos");
			$("#nointentos").modal('show');
			perdida.play();
			$("#puntaje").html("");
		}
		else{
			numal=generarNumerosAleatorios();    			
			
			numb2=0;
			numb=generarNumerosAleatoriosb();
			
			for(mov=2;mov<=5;mov++){				
				if(datos[aumento][mov]!=''){           
					$("#boton"+numb[numb2]).text(datos[posiciones[aumento]][mov]);    
					

					numb2++;
				}
				else{
					$("#boton"+numb).hide("slow"); 
				}
			} 
		}  

		actual=aumento;
	}
}

function masseg(parametro){
	segundos+=10;
	$("#o"+parametro).attr("disabled","disabled");
}

$(document).ready(function() {
	
});



inicio();
