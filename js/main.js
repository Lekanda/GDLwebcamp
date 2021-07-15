(function(){
  "use strict";

  var regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function () {


    if (document.getElementById('mapa')) {
      // Aquí colocas todo el código el mapa, no dejes fuera ni una línea
      var map = L.map('mapa').setView([43.127173, -2.766173], 17);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([43.127173, -2.766173]).addTo(map)
        // Crea un Pin
        .bindPopup('Lekanda.Net<br>2021')
        .openPopup()
        // Crea una ventana con mensaje al hacer hover en el Pin
        .bindTooltip('Un Tooltip')
        .openTooltip();

      var myIcon = L.icon({
        iconUrl: '../../GDLwebcampPHP/img/my-icon.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        // shadowUrl: '../../img/my-icon-shadow.png',
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
      });
      L.marker([43.127173, -2.766173], { icon: myIcon }).addTo(map);


      L.control.scale().addTo(map);
    }




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








    if (document.getElementById('calcular')) {

      calcular.addEventListener('click', calcularTotal);

      pase_dia.addEventListener('blur', mostrarDias);
      pase_dosdias.addEventListener('blur', mostrarDias);
      pase_completo.addEventListener('blur', mostrarDias);


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
        } else {
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
          if (boletosDia >= 1) {
            listadoProductos.push('Pases día: ' + boletosDia);
          }
          if (boletos2Dias >= 1) {
            listadoProductos.push('Pases de 2 días: ' + boletos2Dias);
          }
          if (boletoCompleto >= 1) {
            listadoProductos.push('Pases completos: ' + boletoCompleto);
          }

          // Extras: Camiseta, Etiquetas
          if (cantCamisas >= 1) {
            listadoProductos.push('Camisetas Evento: ' + cantCamisas);
          }
          if (cantEtiquetas >= 1) {
            listadoProductos.push('Etiquetas Evento: ' + cantEtiquetas);
          }

          console.log(listadoProductos);



          lista_productos.style.display = "block";

          // Resumen de pago
          lista_productos.innerHTML = '';
          listadoProductos.forEach(producto => {
            lista_productos.innerHTML += producto + '<br/>';
          });

          // Total a pagar
          suma.innerHTML = totalPagar.toFixed(2) + '€';

        }

      }

      function mostrarDias() {
        let boletosDia = parseInt(pase_dia.value, 10) || 0,
          boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
          boletosCompleto = parseInt(pase_completo.value, 10) || 0;

        let diasElegidos = [];

        //aca uso push el profe pero yo preferi igualar para que los pueda ocultar
        if (boletosDia > 0) {
          diasElegidos = ["viernes"];
        }
        if (boletos2Dias > 0) {
          diasElegidos = ["viernes", "sabado"];
        }
        if (boletosCompleto > 0) {
          diasElegidos = ["viernes", "sabado", "domingo"];
        }
        console.log(diasElegidos);
        for (let i = 0; i < diasElegidos.length; i++) {
          document.getElementById(diasElegidos[i]).style.display = "block";
        }

        //Para ocultar si vuelven a 0
        if (diasElegidos.length < 3) {
          document.getElementById("domingo").style.display = "none";
        }
        if (diasElegidos.length < 2) {
          document.getElementById("sabado").style.display = "none";
        }
        if (diasElegidos.length < 1) {
          document.getElementById("viernes").style.display = "none";
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
    }

  });// DOM CONTENT LOADED
})();


$(function(){

  // Animar letras (Lettering)
  $('.nombre-sitio').lettering();

  // Menu NAV con scroll
  var windowHeight = $(window).height();
  var barraAltura = $('.barra').innerHeight();


  console.log(barraAltura);
  console.log(windowHeight);

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    // console.log(scroll);
    if (scroll>windowHeight) {
      // console.log("Rebasado");
      $('.barra').addClass('fixed');
      $('body').css({'margin-top':barraAltura + 'px'});
    } else {
      // console.log("sin rebasar");
      $('.barra').removeClass('fixed');
      $('body').css({'margin-top': '0px'});
    }
  });


  // Menu Responsive
  $('.menu-movil').on('click', function () {
    $('.navegacion-principal').slideToggle();
  });






  // Menu/Programa de conferencias.
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');

  $('.menu-programa a').on('click', function () {

      $('.menu-programa a').removeClass('activo')
      $(this).addClass('activo');

      $('.ocultar').hide();
      var enlace = $(this).attr('href');
      // console.log(enlace);
      $(enlace).fadeIn(1000);
      return false;
  });


  // Animaciones para los Numeros
  $('.resumen-evento li:nth-child(1) p').animateNumber({number:6},1500);
  $('.resumen-evento li:nth-child(2) p').animateNumber({number:15},1200);
  $('.resumen-evento li:nth-child(3) p').animateNumber({number:3},600);
  $('.resumen-evento li:nth-child(4) p').animateNumber({number:9},1500);



  // Cuenta Regresiva
  $('.cuenta-regresiva').countdown('2021/12/10 09:00:00', function (e) {
    $('#dias').html(e.strftime('%D'));
    $('#horas').html(e.strftime('%H'));
    $('#minutos').html(e.strftime('%M'));
    $('#segundos').html(e.strftime('%S'));
  });


  // ColorBox
  $('.invitado-info').colorbox({inline:true, width:"50%"});






});



