window.addEventListener("load", function() {
  var boton = document.getElementById("calcular");
  boton.addEventListener("click", function() {
    var segundos = parseFloat(document.getElementById("segundos").value);
    var inicial = parseFloat(document.getElementById("numero").value);
     setInterval(function() {
     document.getElementById("resultado").innerHTML= inicial++;
      }, segundos*1000);
  });
});