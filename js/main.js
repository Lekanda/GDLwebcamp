(function(){
  "use strict";

  var regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function () {

    var map = L.map('mapa').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();



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
    var errorNombre = document.getElementById('error-nombre');
    var errorApellido = document.getElementById('error-apellido');
    var errorEmail = document.getElementById('error-email');
    var btnRegistro = document.getElementById('btnRegistro');
    var lista_productos = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');

    // Extras
    var etiquetas = document.getElementById('etiquetas');
    var camisas = document.getElementById('camisa-evento');






    calcular.addEventListener('click', calcularTotal);

    pase_dia.addEventListener('blur', mostrarDias);
    pase_dosdias.addEventListener('blur',mostrarDias);
    pase_completo.addEventListener('blur',mostrarDias);


    nombre.addEventListener('blur', validarCampos);
    apellido.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarCampos);





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


    // VALIDAR CAMPOS
    function validarCampos() {
      // Atriibuto #id del campo input.
      const id = this.getAttribute('id');
      // Sí esta vacio...
      if (this.value == '') {

        if (id === 'nombre') {
          errorNombre.style.display = "block";
          errorNombre.innerHTML = "* Nombre obligatorio";
          this.style.border = "2.5px solid red";
          // errorNombre.style.border="2.5px solid red";
          errorNombre.style.color = "red";
          errorApellido.style.display = "none";
          errorEmail.style.display = "none";
        }
        if (id === 'apellido') {
          errorApellido.style.display = "block";
          errorApellido.innerHTML = "* El Apellido es obligatorio";
          this.style.border = "2.5px solid red";
          errorApellido.style.color = "red";
          errorNombre.style.display = "none";
          errorEmail.style.display = "none";
        }
        if (id === 'email') {
          errorEmail.style.display = "block";
          errorEmail.innerHTML = "* El Email es obligatorio";
          this.style.border = "2.5px solid red";
          errorEmail.style.color = "red";
          errorNombre.style.display = "none";
          errorApellido.style.display = "none";
        }

      } else { // Esta con datos

        // Nombre no menos de 3 letras.
        if (id === 'nombre') {
          if (this.value.length < 3) {
            errorNombre.style.display = "block";
            errorNombre.innerHTML = "* El Nombre 3 letras min.";
            errorNombre.style.color = "red";
            // errorApellido.style.display="none";
            // errorEmail.style.display="none";
          } else {
            this.style.border = "2.5px solid green";
            errorApellido.style.display = "none";
            errorEmail.style.display = "none";
            errorNombre.style.display = "none";
          }
        }


        // Apellido no menos de 3 letras.
        if (id === 'apellido') {
          if (this.value.length < 3) {
            errorApellido.style.display = "block";
            errorApellido.innerHTML = "* El Apellido 3 letras min.";
            errorApellido.style.color = "red";
            errorNombre.style.display = "none";
            errorEmail.style.display = "none";
          } else {
            this.style.border = "2.5px solid green";
            errorApellido.style.display = "none";
            errorEmail.style.display = "none";
            errorNombre.style.display = "none";
          }
        }

        if (id === 'email') {
          // console.log('email');
          if (this.value.indexOf("@") == -1 || this.value.indexOf(".com") == -1) {
            console.log(this.value);
            errorEmail.style.display = "block";
            errorEmail.innerHTML = "* El Email no es valido";
            this.style.border = '2px solid red';
          } else {
            errorEmail.style.border = 'none';
            this.style.border = '2.5px solid green';
            // errorEmail.innerHTML = "";
            errorEmail.style.display = "none";
          }
        }
      }
    }

  });// DOM CONTENT LOADED
})();
