let porcentaje = 50;
let porcentajesup = 550;
let posl=550;
let post=50;
var posicion=1;
var posicion2=1;
var preguntasel="";

var preguntas=["","¿Desde los 6 a los 15 años has observado cambios físicos y emocionales?","¿Te gusta ser parte de grupos y hacer nuevas actividades que de niño no hacías? ","¿Los cambios que has tenido NO han afectado tú aspecto físico o tu carácter?","¿Los cambios físicos, nuestra forma de pensar y nuestras emociones son parte de nuestra vida?","¿Los cambios siempre son malos? No dan la oportunidad de conocer a nuevas personas o hacer nuevas actividades ","Una de las claves para adaptarnos a los cambios es aceptar que probablemente ya no haremos algunas cosas que nos gustan, pero aprenderemos cosas nuevas ","La empatía es la capacidad de ver, sentir, conocer y comprender opiniones desde la perspectiva de otra persona. ","¿Es cierto que las personas que son empáticas tienen mejores habilidades de adaptación, son más sensibles y comprensivas?","Para ser una persona empática se escucha atentamente, viendo a los ojos y ubicándome en la situación de la otra persona. ","¿Una buena decisión es saber escoger la mejor alternativa para alcanzar los objetivos deseados?","Una buena decisión es ponerme a  revisar las redes sociales en lugar de cumplir con mi tareas y deberes.","¿El tomar decisiones en momentos con sentimientos confusos conduce a buenas decisiones?","¿ Toda decisión tiene consecuencias, por eso antes de elegir  debemos darnos tiempo para pensarlo bien y buscar consejo?","Antes de tomar una decisión debo pensar si, ¿Estaré contento después? ¿Me castigarán si lo hago? ¿Es bueno lo que haré? ¿Estoy dañando a alguien? ","¿Cuando discuto por algo siempre quiero tener la razón y estoy dispuesto a no escuchar, gritar y hasta golpear? ","Las personas con liderazgo son capaces de comunicarse individual y en grupo e influir positivamente en sus ideas y emociones.","La persona líder no necesita tener Iniciativa, creatividad y responsabilidad, solo basta ser guapos) para agradarle a todos. ","Utilizar palabras amables permite que las personas se sientan más cómodas hablando con nosotros","Tenemos buena autoestima cuando nos sentimos bien con nosotros mismos, aceptamos nuestras virtudes y defectos y somos conscientes de nuestras capacidades.","En la vida experimentamos constantes cambios positivos y negativos, y debemos estar dispuestos para aceptarlos, enfrentarlos y  adaptarnos a las nuevas experiencias que nos brinde vivir."];

var respuestas=[99,1,1,2,1,2,1,1,1,1,1,2,2,1,1,2,1,2,1,1,1,];      

function seleccionar(valor,jugador,imagen){
		$('#fondo')[0].play();
	
    if(jugador==1){
      elemento="#i"+valor+jugador;
      $("#i11,#i21,#i31,#i41").css('border','none');

      $(elemento).css('border', '2px solid red');
      $('#nino1,#f1').attr('src', 'multimedia/'+imagen);

    }
    else{
      if(jugador==2){
        elemento="#c"+valor+jugador;
        $("#c12,#c22,#c32,#c42").css('border','none');

        $(elemento).css('border', '2px solid blue');
        $('#nino2,#f2').attr('src', 'multimedia/'+imagen);
      }
    }
  }

function validar(respuesta){
	var rcorrecta=respuestas[preguntasel];	

	if(rcorrecta==respuesta){
		$("#rbuena").show("slow");
		$("#rmala").hide("slow");		
    $('#escaleras')[0].play();

		if(posicion==6){
			setTimeout("circle = document.getElementById('ficha');  circle.style.top = '350px';circle.style.left = '550px';",500);

			posicion=18;

		}
		if(posicion==12){
			setTimeout("circle = document.getElementById('ficha');  circle.style.top = '250px';circle.style.left = '50px';",500);

			posicion=19;
		}
		if(posicion==15){
			setTimeout("circle = document.getElementById('ficha');  circle.style.top = '150px';circle.style.left = '250px';",500);

			posicion=27;
		}				

	}
	else{          
		$("#botonv,#botonf").prop('disabled', true);
    $('#caer')[0].play();

		$("#rmala").show("slow");
		$("#rbuena").hide("slow");					

		if(posicion==11){
			setTimeout("circle = document.getElementById('ficha');  circle.style.top = '550px';circle.style.left = '250px';",500);

			posicion=3;
		}
		if(posicion==23){
			setTimeout("circle = document.getElementById('ficha');  circle.style.top = '350px';circle.style.left = '350px';",500);

			posicion=16;
		}
		if(posicion==25){
			setTimeout("circle = document.getElementById('ficha');  circle.style.top = '250px';circle.style.left = '150px';",500);

			posicion=20;
		}
		if(posicion==35){
			setTimeout("circle = document.getElementById('ficha');  circle.style.top = '150px';circle.style.left = '350px';",500);

			posicion=28;
		}
	}
}

function changePosition(aleatorio) {				

	posicion+=aleatorio;	

	posicionesl=["","50","150","250","350","450","550","550","450","350","250","150","50","50","150","250","350","450","550","50","150","250","350","450","550","50","150","250","350","450","550","50","150","250","350","450","550","550","550","550"];
	posicionest=["","550","550","550","550","550","550","450","450","450","450","450","450","350","350","350","350","350","350","250","250","250","250","250","250","150","150","150","150","150","150","50","50","50","50","50","50","50","50","50"];

	const circle = document.getElementById('ficha');        
	circle.style.left = posicionesl[posicion] + 'px';
	circle.style.top =  posicionest[posicion] + 'px';

	if(posicion==6||posicion==12||posicion==15||posicion==11||posicion==23||posicion==25||posicion==35){
		preg= Math.floor(Math.random() * 20) + 1;    

		$("#botonv,#botonf").prop('disabled', false);
		$("#rbuena,#rmala").hide("slow");			
		preguntasel=preg;
		$("#pregunta").html(preguntas[preg]);
		$('#modal2').modal('show');

	}        
	else{
		if(posicion>35){

		}
		else{
			setTimeout(rollDice2(),2000);
		}					
	}
	
	if(posicion>35){
		setTimeout("circle = document.getElementById('ficha');  circle.style.top = '50px';circle.style.left = '550px';",500);   
		posicion=36;
		$('#modalganador').modal('show');
	}

}

function changePosition2(aleatorio) {  
	posicion2+=aleatorio;	

	posicionesl=["","50","120","220","320","420","520","520","420","320","220","120","0","20","120","220","320","420","520","0","120","220","320","420","520","0","120","220","320","420","520","0","120","220","320","420","520","520","550","550"];
	posicionest=["","550","550","550","550","550","550","450","450","450","450","450","450","350","350","350","350","350","350","250","250","250","250","250","250","150","150","150","150","150","150","50","50","50","50","50","50","50","50","50"];

	const circle2 = document.getElementById('ficha2');        
	circle2.style.left = posicionesl[posicion2] + 'px';
	circle2.style.top =  posicionest[posicion2] + 'px';
	
 if(posicion2==6){
		setTimeout("circle = document.getElementById('ficha2');  circle.style.top = '350px';circle.style.left = '520px';",500);

		posicion2=18;

	}
	if(posicion2==12){
		setTimeout("circle = document.getElementById('ficha2');  circle.style.top = '250px';circle.style.left = '20px';",500);

		posicion2=19;
	}
	if(posicion2==15){
		setTimeout("circle = document.getElementById('ficha2');  circle.style.top = '150px';circle.style.left = '220px';",500);

		posicion2=27;
	}		

	if(posicion2==11){
		setTimeout("circle = document.getElementById('ficha2');  circle.style.top = '550px';circle.style.left = '220px';",500);

		posicion2=3;
	}
	if(posicion2==23){
		setTimeout("const circle = document.getElementById('ficha2');  circle.style.top = '350px';circle.style.left = '320px';",500);

		posicion2=16;
	}
	if(posicion2==25){
		setTimeout("circle = document.getElementById('ficha2');  circle.style.top = '250px';circle.style.left = '120px';",500);

		posicion2=20;
	}
	if(posicion2==35){
		setTimeout("circle = document.getElementById('ficha2');  circle.style.top = '150px';circle.style.left = '320px';",500);

		posicion2=28;
	}
	
	if(posicion2>35){
		setTimeout("circle = document.getElementById('ficha2');  circle.style.top = '50px';circle.style.left = '500px';",500);   
		posicion2=36;
		$('#modalganador2').modal('show');
	}
}

const diceElement = document.getElementById('dice');
const diceElement2 = document.getElementById('dice2');

$(document).ready(function() {
	
});


const diceImages = [
	'multimedia/1.png',
	'multimedia/2.png',
	'multimedia/3.png',
	'multimedia/4.png',
	'multimedia/5.png',
	'multimedia/6.png'
];

const diceImages2 = [
	'multimedia/1.png',
	'multimedia/2.png',
	'multimedia/3.png',
	'multimedia/4.png',
	'multimedia/5.png',
	'multimedia/6.png'
];



function rollDice() {
	$("#turno").html("Turno del Computador");  

	const randomNum = Math.floor(Math.random() * 6) + 1;

	
	diceElement.style.transform = 'rotate(360deg)';
	setTimeout(() => {
		diceElement.src = diceImages[randomNum - 1];
		diceElement.style.transform = 'rotate(0deg)';

		changePosition(randomNum);
	}, 500);


}

function rollDice2() {  
  setTimeout(()=>{    
    $("#turno").html("Turno del Jugador");
    
    const randomNum = Math.floor(Math.random() * 6) + 1;
    
    diceElement2.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      $('#dados')[0].play();
      diceElement2.src = diceImages2[randomNum - 1];
      diceElement2.style.transform = 'rotate(0deg)';

      changePosition2(randomNum)
    },500);
  },900);


}
