var posicionesx=[0,100,154,208,215,281,358,425,506,527,526,523,525,496,436,387,388,388,386,319,276,271,273,268,274,317,385,457,520,511,436,366,299,228,189,190,192,189,151,83,71,73,73,73,73,77,154,216,252,329,416,507];
var posicionesy=[0,162,220,190,98,69,72,76,85,159,227,297,358,427,429,384,319,257,196,178,213,270,337,399,467,510,511,507,537,602,614,615,613,614,568,491,417,342,280,303,393,468,548,616,682,761,780,776,725,706,708,708,521];

var preguntas=[0,"¿La comunicación efectiva es cuando transmito el mensaje de manera clara, respetuosa y escuchando a los demás?","Me comunico mejor cuando escucho atentamente y miro a los ojos del oyente.","La buena comunicación No requiere de un esfuerzo continuo en dar y recibir mensajes claros","En una comunicación efectiva, expreso lo que pienso sin dañar a los demás.","En la comunicación es importante manejar un buen tono de voz, gritar o hablar fuerte.","¿Una condición efectiva para comunicarme es una actitud de respeto hacia los demás?","¿Es importante enfocarnos en una escucha activa y concentramos en la conversación?","Es buena práctica expresar mis ideas con amabilidad y escuchar al otro tratando de entenderlo","La comunicación en familia es importante para tener buenas relaciones","Para crecer en la comunicación dentro de la familia necesito aprende hablar con claridad y a escuchar con atención","Los conflictos entre personas suceden a menudo. No se necesita una solución que requiere en muchos casos de una negociación","¿En los conflictos negociamos, esto representa ceder algo? ¿Para quedar todos contentos?","¿Cuándo negociamos no debemos: ◊ Escuchar los puntos de vista de los otros y expresar los nuestros?","¿Cuándo negociamos, lo hacemos analizando con mente abierta las opiniones o peticiones de los demás?","¿Se deben buscar alternativas de solución en los conflictos y problemas y llegar a un acuerdo?","¿Afrontar los problemas a tiempo y tratar de resolverlos con buena comunicación, respeto reducen el conflicto?","Los problemas no son parte de la vida y todos los tenemos que enfrentar y resolver.","Una de las mejores estrategias frente a un conflicto, es buscar mediación, como práctica para soluciones a problemas de forma acertada.","Una buena mediación exige buena voluntad de las partes involucradas para resolver el conflicto.","Estoy comunicándome agresivamente cuando elevo la voz, interrumpo, insultos, amenazo y sólo importa lo que yo diga y sienta.","La comunicación efectiva no es cuando transmito el mensaje de manera clara, respetuosa y escuchando a los demás","Me comunico peor cuando escucho atentamente y miro a los ojos del oyente.","La buena comunicación no requiere de un esfuerzo continuo en dar y recibir mensajes claros","En una comunicación efectiva, no expreso lo que pienso dañando a los demás.","En la comunicación no es importante manejar un buen tono de voz, gritar o hablar fuerte.","Una condición efectiva para comunicarme no es una actitud de respeto hacia los demás","No es importante enfocarnos en una escucha activa y concentramos en la conversación","No es buena práctica expresar mis ideas con amabilidad y escuchar al otro tratando de entenderlo","La comunicación en familia no es importante para tener buenas relaciones","Para crecer en la comunicación dentro de la familia no necesito aprende hablar con claridad y a escuchar con atención","Los conflictos entre personas suceden a menudo. Se necesita una solución que requiere en muchos casos de una negociación","¿En los conflictos negociamos, esto no representa ceder algo? ¿Para quedar todos contentos?","Cuándo negociamos debemos: Escuchar los puntos de vista de los otros y expresar los nuestros","Cuándo negociamos,no lo hacemos analizando con mente abierta las opiniones o peticiones de los demás?","¿No se deben buscar alternativas de solución en los conflictos y problemas y llegar a un acuerdo?","¿Afrontar los problemas a tiempo y tratar de resolverlos con buena comunicación, respeto no reducen el conflicto?","Los problemas son parte de la vida y todos los tenemos que enfrentar y resolver.","Una de las mejores estrategias frente a un conflicto, no es buscar mediación, como práctica para soluciones a problemas de forma acertada.","Una buena mediación no exige buena voluntad de las partes involucradas para resolver el conflicto.","No estoy comunicándome agresivamente cuando elevo la voz, interrumpo, insultos, amenazo y sólo importa lo que yo diga y sienta."];

var respuestas=[99,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0];

var obstaculos=[0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,2];

var posobs=[6,8,12,16,21,23,24,29,31,34,37,41,45,49];

var oimg=[0,0,0,0,0,0,"policia.png",0,"puente.png",0,0,0,"cactus.png",0,0,0,"llorando.png",0,0,0,0,"cactus.png",0,"maleante.png","pobreza.png",0,0,0,0,"rio.png",0,"enferma.png",0,0,"puente.png",0,0,"pobreza.png",0,0,0,"maleante.png",0,0,0,"llorando.png",0,0,0,"enferma.png",0,2];


var odesc=[0,0,0,0,0,0,"Los policias corruptos pueden ser un obstaculo importante si eres un migrante",0,"En tu camino encontraras muchos puentes en mal estado",0,0,0,"El clima arido puede ser un factor desfavorable al momento de migrar de tu pais",0,0,0,"Puedes encontrar muchas dificultades en el camino que te haran llorar",0,0,0,0,"El clima arido puede ser un factor desfavorable al momento de migrar de tu pais",0,"Los traficantes de personas estan al acecho, asi que debes ser cuidadoso","La falta de recursos economicos puede dificultar el camino del migrante",0,0,0,0,"En tu camino encontraras muchos rios que evitaran tu paso",0,"Puedes contagiarte de muchas enfermedades en tu camino, por lo que debes tener cuidado",0,0,"En tu camino encontraras muchos puentes en mal estado",0,0,"La falta de recursos economicos puede dificultar el camino del migrante",0,0,0,"Los traficantes de personas estan al acecho, asi que debes ser cuidadoso",0,0,0,"Puedes encontrar muchas dificultades en el camino que te haran llorar",0,0,0,"Puedes contagiarte de muchas enfermedades en tu camino, por lo que debes tener cuidado",0,2];


var mensajes=[];

var seleccionado=0;
var tiradas=0;
var tiradas2=0;
var tiradasanterior=0;
var valordado=1;
var valordado2=1;
var posiciones=[];
var valoractual=0;
var tiradasant=0;
var indice=0;

const diceElement = document.getElementById('dado1');
const diceElement2 = document.getElementById('dado2');

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

$(document).ready(function() {
	$("#modalinicio").modal("show");  
  
});

function rollDice() {	
	const randomNum = Math.floor(Math.random() * 6) + 1;
	
	diceElement.style.transform = 'rotate(360deg)';
	setTimeout(() => {
    //$('#dados')[0].play();
		diceElement.src = diceImages[randomNum - 1];
		diceElement.style.transform = 'rotate(0deg)';

		//changePosition(randomNum);
	}, 500);
  
  valordado=randomNum;

}

function rollDice2() {	
	const randomNum = Math.floor(Math.random() * 6) + 1;
	
	diceElement2.style.transform = 'rotate(360deg)';
	setTimeout(() => {
    //$('#dados')[0].play();
		diceElement2.src = diceImages2[randomNum - 1];
		diceElement2.style.transform = 'rotate(0deg)';

		//changePosition(randomNum);
	}, 500);
  
  valordadopc=randomNum;

}

function movimiento(){
  $("#rmala,#rbuena").hide();
  setTimeout(rollDice(),1000);
  setTimeout(mover(),1100);
}

var pos=1;

function movilidad(){
  posx=posicionesx[tiradasant]-20;
  posy=posicionesy[tiradasant]-20;

  $('#jugador').animate({
    'left': posy+'px',  
    'top': posx+'px'    
  },800);
  
  if(tiradasant==tiradas){
    clearInterval(movid);
    $("#fondoaudio")[0].play();	
    $("#acarro")[0].pause();	
    
    if(tiradas<51){
      if(obstaculos[tiradas]==1){ //Con Obstaculo
        setTimeout(function(){
          $("#imagenrel").prop("src","multimedia/"+oimg[tiradas]);
          $("#imagenrel").prop("height",220);
          $("#imagenrel").prop("widht",190);
          $("#dobstaculo").html(odesc[tiradas]);
          $("#pregunta").modal("show");
        },1200);
      }
      else{ //Sin obstaculo
        setTimeout(moverfichapc,1000);
      }
    }
    else{      
      //setTimeout(moverfichapc,1000);
      $("#ganador").modal("show");
      clearInterval(movid);
      
      /*  $('#jugador').animate({
          'left':'715px',  
          'top': '528px'    
        },800);*/      
      
    }
  }
  
  tiradasant++;
}

function mover(){  
  tiradasant=tiradas+1;
  tiradas=tiradas+valordado;
  //tiradas=posobs[indice];  
  //tiradas=tiradas+49;  
  $("#fondoaudio")[0].pause();	
  $("#acarro")[0].play();
  
  indice++;
  
  movid=setInterval(movilidad, 800);
  
  if(tiradas>50){    
    $('#jugador').animate({
      'left':'715px',  
      'top': '528px'    
    },800);
    setTimeout(function(){$("#ganador").modal("show");},1000);
    
    clearInterval(movid);
  }
  
  //posx=posicionesx[tiradas]-20;
  //posy=posicionesy[tiradas]-20;
  
  /*posx1=posicionesx[1]-20;
  posy1=posicionesy[1]-20;  
  posx2=posicionesx[2]-20;
  posy2=posicionesy[2]-20;  
  posx3=posicionesx[3]-20;
  posy3=posicionesy[3]-20;  
  posx4=posicionesx[4]-20;
  posy4=posicionesy[4]-20;  
  posx5=posicionesx[5]-20;
  posy5=posicionesy[5]-20;  
  posx6=posicionesx[6]-20;
  posy6=posicionesy[6]-20;
  
  const div = $('#jugador');
  
  div.animate({
    left: posy1+'px',
    top: posx1+'px'
  }, 1000, function() {
    // Callback para la segunda animación
    div.animate({
      left: posy2+'px',
      top: posx2+'px'
    }, 1000, function() {
      // Callback para la tercera animación
      div.animate({
        left: posy3+'px',
        top: posx3+'px'
      }, 1000);
    });
  });*/
  
  

  /*for(mov=tiradasant;mov<=tiradas;mov++){
    console.log(posicionesx[mov]-20+" - "+posicionesy[mov]);
    posx=posicionesx[mov]-20;
    posy=posicionesy[mov]-20;
    
    $('#jugador').animate({
      'left': posy+'px',  
      'top': posx+'px'    
    });
    
    /*$('#jugador').animate({
      'left': posy+'px',  
      'top': posx+'px'    
    }, 1000);
    
  }*/
  
  
  /*$('#jugador').animate({
    'left': posy+'px',  
    'top': posx+'px'    
  }, 1000);  */
  
  /*if(tiradas<51){
    if(obstaculos[tiradas]==1){
      setTimeout(function(){
        $("#imagenrel").prop("src","multimedia/"+oimg[tiradas]);
        $("#dobstaculo").html(odesc[tiradas]);
        $("#pregunta").modal("show");
      },1200);
    }
    else{
      setTimeout(moverfichapc(),2600);
    }
  }
  else{
    $("#ganador").modal("show");
  }*/
}

function seleccion(parametro){
  for(mov=1;mov<=7;mov++){
    $("#b"+mov).css("border-color","white");    
  }
  
  $("#b"+parametro).css("border-color","red");
  $("#b"+parametro).css("border-width","5px");
  $("#logojug").prop("src","multimedia/niñoa"+parametro+".png");  
  $("#play").prop("src","multimedia/niñoa"+parametro+".png");  
  seleccionado=parametro;
}

 function obtenerPosicionRelativa(event) {
  const contenedor = document.getElementById('cont');

  const rectContenedor = contenedor.getBoundingClientRect();
  const xRelativa = event.clientX - rectContenedor.left;
  const yRelativa = event.clientY - rectContenedor.top;

  console.log('Posición relativa (X, Y):', `(${xRelativa}, ${yRelativa})`);
}

function generarNumerosAleatorios() {  
  const numeros = Array.from({ length: 40 }, (_, index) => index + 1);
    
  function obtenerIndiceAleatorio(max) {
    return Math.floor(Math.random() * max);
  }
    
  for (let i = numeros.length - 1; i > 0; i--) {
    const j = obtenerIndiceAleatorio(i + 1);
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
  }
  
  return numeros;
}

function validarr(parametro){  
  $("#rmala,#rbuena").hide();
  
  if(respuestas[posiciones[valoractual]]==parametro){    
    $("#rbuena").show("slow");    
    
    setTimeout(function(){
      $("#pregunta").modal("hide");    
    },1500);
  }
  else{
    $("#rmala").show("slow");
    
    setTimeout(function(){
      $("#pregunta").modal("hide");
    
      tiradas=tiradas-valordado;
      posx=posicionesx[tiradas]-20;
      posy=posicionesy[tiradas]-20;

      $('#jugador').animate({
        'left': posy+'px',  
        'top': posx+'px'    
      }, 1000);  
    },1500);
  }
  
  valoractual++;
  setTimeout(function(){$("#preguntado").html(preguntas[posiciones[valoractual]]);},3000);
  setTimeout(moverfichapc,2300);
}

function moverfichapc(){  
  rollDice2();
  
  tiradas2=tiradas2+valordadopc;  
  //tiradas2=tiradas2+49;  
  
  if(tiradas2<51){
    posxpc=posicionesx[tiradas2]-20;
    posypc=posicionesy[tiradas2]-20;

    $('#pc').animate({
      'left': posypc+'px',  
      'top': posxpc+'px'    
    }, 1000);
  }
  else{
    $('#pc').animate({
      'left': '715px',  
      'top': '528px'    
    }, 1000);
    
    setTimeout(function(){$("#nointentos").modal("show")},1500);
  }
  
  
}

function inicio(){
  valoractual=0  
  posiciones=generarNumerosAleatorios();  
  
	$("#modalinicio").modal("hide");      
  $("#preguntado").html(preguntas[posiciones[valoractual]]);
	$("#fondoaudio")[0].play();	
  
}
