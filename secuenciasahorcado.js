let intervalId;
let segundos = 0;
let minutos = 0;
let horas = 0;
var palabraactual="";
var conceptoactual="";
var malas=0;
var buenas=0;

const palabras=["AUTOCONCEPTO","ADOLESCENCIA","AUTOIMAGEN","AUTOACEPTACIÓN","AUTORESPETO","AUTOESTIMA","COMUNICACIÓN","RELACIÓN-INTERPERSONAL","RELACIÓN-FAMILIAR","CONFLICTO","COMUNÍCATE","COMPROMISO","ARGUMENTOS","PROBLEMA","ESTRÉS","ACTITUD","APTITUD","CAPACIDAD ","CUALIDADES","AFECTO","PERSONALIDAD","VALORES","HONESTIDAD.","SENSIBILIDAD","GRATITUD","HUMILDAD","PRUDENCIA","RESPETO","INTERPERSONAL","AMOR","AFINIDAD","CORTESÍA","EMPATÍA","RESPONSABILIDAD"];

const definiciones=["Es la imagen que tenemos de nosotros mismos, opiniones, ideas, sentimientos, características y capacidades personales.","En esta etapa se produce el paso a la vida adulta, se termina de formar la identidad personal, el autoconcepto se va a asentar como base de la personalidad. ","Cómo nos percibimos y valoramos","Reconocer y aceptar lo que somos","Atender y satisfacer nuestras propias necesidades y valores","Es la valoración, percepción o juicio positivo o negativo que una persona hace de sí misma ","Es la capacidad para el intercambio efectivo de información.","Vínculo que existe entre dos o más personas basado en sentimientos, emociones, intereses, actividades sociales, entre otros.","Relación que se  forman entre las personas de nuestra familia, que nos acompañan desde que nacimos y tenemos un vínculo de sangre.","Es una situación en la cual dos o más personas con intereses distintos entran en confrontación, oposición o emprenden acciones mutuamente opuestas.","Expresa la situación, explica lo piensas y lo que sientes.","Obligación contraída por una persona que se compromete o es comprometida a algo.","Razonamiento para probar o demostrar una proposición, o para convencer de lo que se afirma o se niega","Un hecho o circunstancia que requiere de una pronta solución o aclaratoria para darle fin. ","Tensión provocada por situaciones agobiantes que originan reacciones psicosomáticas o trastornos psicológicos a veces graves.","Habilidad de una persona hacia algo o hacia alguien, se manifiesta a través de lo que piensa, siente y se comporta.","Capacidad y disposición para el buen desempeño o ejercicio de un negocio, de una industria, de un arte, etc.","Persona que  tiene condiciones para poder desempeñar un cierto tipo de tareas o funciones, ","Las  características que  definen  a la persona y hacen que se distingan de los individuos que la rodean.","Generalmente la consideramos en su versión agradable, como una  Emoción positiva de amor o negativa, dado que a veces también se asocia con los celos o el odio.","Conjunto de rasgos y cualidades que configuran la manera de ser de una persona y la diferencian de las demás.","Cualidad o conjunto de cualidades por las que una persona o cosa es apreciada o bien considerada.","Significa ser objetivo, hablar con sinceridad y respetar las opiniones de otras personas.","Una persona sensible que comprende las miradas y los gestos más allá de las palabras y sabe cuando otra necesita algo.","Agradecer por todo lo que es importante para usted y las cosas buenas en su vida. ","Capacidad de restarle importancia a los propios logros y virtudes, y de reconocer sus defectos y errores.","Implica actuar de manera justa y con cautela, respetando la vida y la libertad de los demás. ","Cualidad o valor que consiste en la consideración y valoración que tiene un individuo hacia las otras personas ","Relación que existe o se desarrolla entre dos o más personas.","El amor es comprender, servir, dar, compartir, querer, respetar y convivir","Similitud o coincidencia de caracteres, opiniones, gustos, entre dos o más personas.","Demostración de respeto y educación que se expresa a través de las buenas costumbres.","Capacidad para ponerse en el lugar de otra persona capaz de entender la situación y los sentimientos que está viviendo otra persona.","Se caracteriza por la capacidad del individuo de actuar de la manera correcta o de acuerdo a lo esperado. "];

function actualizarCronometro() {
  segundos++;

  if (segundos == 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos == 60) {
    minutos = 0;
    horas++;
  }

  const displayHoras = horas < 10 ? '0' + horas : horas;
  const displayMinutos = minutos < 10 ? '0' + minutos : minutos;
  const displaySegundos = segundos < 10 ? '0' + segundos : segundos;
  
  $('#cronometro').text(displayHoras + ':' + displayMinutos + ':' + displaySegundos);
}

function generarNumerosAleatorios(cantidad, minimo, maximo) {
  if (cantidad > (maximo - minimo + 1) || maximo < minimo) {
    return null;
  }

  const numerosAleatorios = [];
  const numerosDisponibles = Array.from({ length: maximo - minimo + 1 }, (_, i) => i + minimo);

  for (let i = 0; i < cantidad; i++) {
    const indiceAleatorio = Math.floor(Math.random() * numerosDisponibles.length);
    numerosAleatorios.push(numerosDisponibles.splice(indiceAleatorio, 1)[0]);
  }

  return numerosAleatorios;
}

const numerosAleatorios = generarNumerosAleatorios(34, 0, 33);

$(document).ready(function() {
	$("#modalinicio").modal("show");
  
  $('#iniciar').click(function() {
    intervalId = setInterval(actualizarCronometro, 1000);
    $('#iniciar').prop('disabled', true);
    $('#detener').prop('disabled', false);
    $('#reiniciar').prop('disabled', false);
  });

  $('#detener').click(function() {
    clearInterval(intervalId);
    $('#iniciar').prop('disabled', false);
    $('#detener').prop('disabled', true);
    $('#reiniciar').prop('disabled', false);
  });

  $('#reiniciar').click(function() {
    clearInterval(intervalId);
    segundos = 0;
    minutos = 0;
    horas = 0;
    $('#cronometro').text('00:00:00');
    $('#iniciar').prop('disabled', false);
    $('#detener').prop('disabled', true);
    $('#reiniciar').prop('disabled', true);
  });
  
  $('button').click(function() {
    valor=$(this).text();
    
    if(valor.length==1){
      buscarletra(valor);
      $(this).hide("slow");
    }    
  });
});

function buscarletra(parametro){
  var validador=0;
  
  for(mov=0;mov<=largoactual;mov++){
    pos=mov+1;    
    ltr=palabraactual.substr(mov,1);
    
    if(ltr==parametro){
      $("#p"+pos).animate({fontSize:'30px'},1000);
      $("#p"+pos).html(ltr);
      validador=1;
      buenas++;
    }
  }
  
  if(validador==0){
    malas++;
    $("#ahor").show("slow");
    $("#modalmala").modal("show");
    $("#ahor").prop("src","multimedia/a"+malas+".png");    
    setTimeout(function(){$("#modalmala").modal("hide");},1000);    
    
    if(malas==11){
      setTimeout(function(){$("#nointentos").modal("show");$("#fondoaudio")[0].pause();$("#paudio")[0].play();$("#palabrabuena").html("La palabra es: "+palabraactual)},1400);        
    }
    
  }
  else{        
    $("#modalbuena").modal("show");    
    setTimeout(function(){$("#modalbuena").modal("hide");},1000);    
    
    if(buenas==largoactual){
      $("#def").html('"'+conceptoactual+'"');
      $("#tit").html(palabraactual);
      $("#tiempo").html("Lo lograste en: "+$("#cronometro").html());
      setTimeout(function(){$("#ganador").modal("show");$("#fondoaudio")[0].pause();$("#gaudio")[0].play();},1400);    
    }
  }
}

function inicio(){
	$("#modalinicio").modal("hide");
	$("#fondoaudio")[0].play();
  $("#cronometro").show("slow");
  $("#reinicio").show("slow");    
  
  palabraactual=palabras[numerosAleatorios[0]];
  conceptoactual=definiciones[numerosAleatorios[0]];
  $("#concepto").html(conceptoactual);
  
  colocarpalabra();
  
  intervalId = setInterval(actualizarCronometro, 1000);
}

function colocarpalabra(){
  largoactual=palabraactual.length;
  
  ocultar();
  
  for(mov=1;mov<=largoactual;mov++){
    $("#p"+mov).html("");
    $("#p"+mov).show("slow");
  }
  
}

function ocultar(){
  for(mov=1;mov<=25;mov++){
    $("#p"+mov).hide();
  }
}


