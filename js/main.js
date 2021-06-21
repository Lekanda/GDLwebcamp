(function(){
  "use strict";

  var regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function () {
    // console.log("listo");

    // Campos Usuario
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    // Campos Pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_completo = document.getElementById('pase_completo');
    var pase_dosdias = document.getElementById('pase_dosdias');

    // Botones y Divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var btnRegistro = document.getElementById('btnRegistro');
    var resultado = document.getElementById('lista-productos');

    calcular.addEventListener('click', calcularTotal);


    function calcularTotal(e) {
      e.preventDefault();
      // console.log("Has hecho click...");
      // console.log(regalo.value);
      if (regalo.value === '') {
        alert("Debes elegir un regalo");
        regalo.focus();
      }else{
        // console.log('El regalo es ' + regalo.value);
        // console.log(pase_dia.value);

        // Variables de tipo de entradas
        var boletosDia = pase_dia.value,
            boletos2Dias = pase_dosdias.value,
            boletoCompleto = pase_completo.value;
            // console.log("Boletos de Dia: " + boletosDia);

        // Total a pagar
        var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50);
        // console.log(totalPagar);


        //


      }

    }

  });// DOM CONTENT LOADED
})();
