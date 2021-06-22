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
    var lista_productos = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');

    // Extras
    var etiquetas = document.getElementById('etiquetas');
    var camisas = document.getElementById('camisa-evento');






    calcular.addEventListener('click', calcularTotal);

    pase_dia.addEventListener('blur', mostrarDias)
    pase_dosdias.addEventListener('blur',mostrarDias)
    pase_completo.addEventListener('blur',mostrarDias)





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
        var boletosDia = parseInt(pase_dia.value, 10) || 0,
            boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
            boletoCompleto = parseInt(pase_completo.value) || 0,
            cantCamisas = parseInt(camisas.value) || 0,
            cantEtiquetas = parseInt(etiquetas.value) || 0;
            // console.log("Boletos de Dia: " + boletosDia);

        // Total a pagar
        var totalPagar = (boletosDia * 30) +
                         (boletos2Dias * 45) +
                         (boletoCompleto * 50) +
                         ((cantCamisas * 10) * .93) + // Descuento del 7%
                         (cantEtiquetas * 2);
        // console.log(totalPagar);

        var listadoProductos = [];

        // Boletos Evento
        if (boletosDia >=1) {
          listadoProductos.push('Pases día: ' + boletosDia);
        }
        if (boletos2Dias >=1) {
          listadoProductos.push('Pases de 2 días: ' + boletos2Dias);
        }
        if (boletoCompleto >=1) {
          listadoProductos.push('Pases completos: ' + boletoCompleto);
        }

        // Extras: Camiseta, Etiquetas
        if (cantCamisas >=1) {
          listadoProductos.push('Camisetas Evento: ' + cantCamisas);
        }
        if (cantEtiquetas >=1) {
          listadoProductos.push('Etiquetas Evento: ' + cantEtiquetas);
        }

        console.log(listadoProductos);



        lista_productos.style.display="block";

        // Resumen de pago
        lista_productos.innerHTML = '';
        listadoProductos.forEach(producto => {
          lista_productos.innerHTML += producto + '<br/>';
        });

        // Total a pagar
        suma.innerHTML = totalPagar.toFixed(2) + '€';

      }

    }

    function mostrarDias(){
      let boletosDia = parseInt(pase_dia.value, 10)|| 0,
          boletos2Dias= parseInt(pase_dosdias.value, 10)|| 0,
          boletosCompleto= parseInt(pase_completo.value, 10)|| 0;

      let diasElegidos = [];

      //aca uso push el profe pero yo preferi igualar para que los pueda ocultar
      if (boletosDia > 0) {
        diasElegidos=["viernes"];
      }
      if (boletos2Dias > 0) {
        diasElegidos=["viernes","sabado"];
      }
      if (boletosCompleto > 0) {
        diasElegidos=["viernes","sabado","domingo"];
      }
      console.log(diasElegidos);
      for(let i=0;i < diasElegidos.length;i++){
      document.getElementById(diasElegidos[i]).style.display= "block";
      }

      //Para ocultar si vuelven a 0
      if(diasElegidos.length<3 ) {
              document.getElementById("domingo").style.display= "none";
          }
      if(diasElegidos.length<2 ) {
              document.getElementById("sabado").style.display= "none";
          }
      if(diasElegidos.length<1 ) {
              document.getElementById("viernes").style.display= "none";
          }
    }


  });// DOM CONTENT LOADED
})();
