
  function getTouchPos(canvasDom, touchEvent) {
      var rect = canvasDom.getBoundingClientRect();
      return {
          x: touchEvent.touches[0].clientX - rect.left,
          y: touchEvent.touches[0].clientY - rect.top
      };
  }

  function getMousePos(canvasDom, mouseEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
      x: mouseEvent.clientX - rect.left,
      y: mouseEvent.clientY - rect.top
  };
  }

  // Inicializar el canvas y los eventos táctiles y de mouse

  var canvas = document.getElementById('lienzo');
  var context = canvas.getContext('2d');
  var colorlinea='black';

  //canvas.width = window.innerWidth;
  //canvas.height = window.innerHeight;

  // Evento touchstart o mousedown
  function startDrawing(event) {
      var pos;
      if (event.type === 'touchstart') {
          pos = getTouchPos(canvas, event);
      } else {
          pos = getMousePos(canvas, event);
      }
      var mouseX = pos.x;
      var mouseY = pos.y;

      context.beginPath();
      context.moveTo(mouseX, mouseY);
      context.lineWidth = 3;
      context.lineCap = 'round';
      context.strokeStyle = colorlinea;

      // Evento touchmove o mousemove
      function draw(event) {
          event.preventDefault();
          var pos;
          if (event.type === 'touchmove') {
              pos = getTouchPos(canvas, event);
          } else {
              pos = getMousePos(canvas, event);
          }
          var mouseX = pos.x;
          var mouseY = pos.y;

          context.lineTo(mouseX, mouseY);
          context.stroke();
      }

      // Agregar evento touchmove o mousemove
      if (event.type === 'touchstart') {
          canvas.addEventListener('touchmove', draw, false);
      } else {
          canvas.addEventListener('mousemove', draw, false);
      }

      // Evento touchend o mouseup
      function stopDrawing(event) {
          if (event.type === 'touchend') {
              canvas.removeEventListener('touchmove', draw);
              canvas.removeEventListener('touchend', stopDrawing);
          } else {
              canvas.removeEventListener('mousemove', draw);
              canvas.removeEventListener('mouseup', stopDrawing);
          }
      }

      // Agregar evento touchend o mouseup
      if (event.type === 'touchstart') {
          canvas.addEventListener('touchend', stopDrawing, false);
      } else {
          canvas.addEventListener('mouseup', stopDrawing, false);
      }
  }

  // Agregar evento touchstart o mousedown
  canvas.addEventListener('touchstart', startDrawing, false);
  canvas.addEventListener('mousedown', startDrawing, false);

  var limpiarBtn = document.getElementById("limpiarCanvas");

  limpiarBtn.addEventListener("click", function() {
    limpiarCanvas();
  });

  function limpiarCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }        
