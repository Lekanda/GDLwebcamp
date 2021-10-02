<!doctype html>
<!-- <html class="no-js" lang="es"> -->
<html lang="es" xml:lang="es" xmlns="http://www.w3.org/1999/xhtml">



<head>
  <meta charset="utf-8">
  <title>GDL WebCampPHP</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="css/normalize.css">
  <script src="https://kit.fontawesome.com/9b21360d5e.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
  <link rel="stylesheet" href="css/main.css">

  <?php
  // Nos devuelve el nombre del archivo que esta cargando
  $archivo = basename($_SERVER['PHP_SELF']);
  $pagina = str_replace(".php", "", $archivo);
  if ($pagina == 'invitados' || $pagina == 'index') {
    echo '<link rel="stylesheet" href="css/colorbox.css">';
  } else if ($pagina == 'conferencia') {
    echo '<link rel="stylesheet" href="css/lightbox.css">';
  }

  ?>


  <meta name="theme-color" content="#fafafa">
  <script id="mcjs">
    ! function(c, h, i, m, p) {
      m = c.createElement(h), p = c.getElementsByTagName(h)[0], m.async = 1, m.src = i, p.parentNode.insertBefore(m, p)
    }(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/18c3f637667a4a88d98e0463d/587909079aafe8d1c2e88b938.js");
  </script>
  <!-- MailerLite Universal -->
  <script>
    (function(m, a, i, l, e, r) {
      m['MailerLiteObject'] = e;

      function f() {
        var c = {
          a: arguments,
          q: []
        };
        var r = this.push(c);
        return "number" != typeof r ? r : f.bind(c.q);
      }
      f.q = f.q || [];
      m[e] = m[e] || f.bind(f.q);
      m[e].q = m[e].q || f.q;
      r = a.createElement(i);
      var _ = a.getElementsByTagName(i)[0];
      r.async = 1;
      r.src = l + '?v' + (~~(new Date().getTime() / 1000000));
      _.parentNode.insertBefore(r, _);
    })(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

    var ml_account = ml('accounts', '3478475', 'y6e8l0z6o7', 'load');
  </script>
  <!-- End MailerLite Universal -->
</head>

<body class="<?php echo $pagina ?>">

  <header class="site-header">
    <div class="hero">
      <div class="contenido-header">
        <nav class="redes-sociales">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-pinterest"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </nav>

        <div class="informacion-evento">
          <div class="clearfix">
            <p class="fecha"><i class="fas fa-calendar-alt"></i>10-12 Dic</p>
            <p class="ciudad"><i class="fas fa-map-marker-alt"></i>Dima, EH</p>
          </div>
          <h1 class="nombre-sitio">GdlWebCamp</h1>
          <p class="slogan">La mejor conferencia de <span>Diseño Web</span></p>
        </div>
      </div>
      <!--.hero-->
  </header>

  <div class="barra">
    <div class="contenedor clearfix">
      <div class="logo">
        <a href="/GDLwebcampPHP/">
          <img src="/GDLwebcampPHP/img/logo.svg" alt="Logo de la barra de Navegacion">
        </a>
      </div>
      <div class="menu-movil">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav class="navegacion-principal clearfix">
        <a href="conferencia.php">Conferencia</a>
        <a href="calendario.php">Calendario</a>
        <a href="invitados.php">Invitados</a>
        <a href="registro.php">Reservas</a>
      </nav>
    </div>
    <!--Cierre Contenedor-->
  </div>
  <!--Cierre Barra-->
