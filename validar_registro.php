<?php include_once '../GDLwebcampPHP/includes/templates/header.php' ?>
<section class="seccion contenedor">
  <h2>Resumen registro</h2>

  <!-- isset mira que la variable exista -->
  <?php if (isset($_POST['submit'])) :
      $nombre = $_POST['nombre'];
      $apellido = $_POST['apellido'];
      $email = $_POST['email'];
      $regalo = $_POST['regalo'];
      $total = $_POST['total_pedido'];
      $fecha = date('Y-m-d H:i:s');

      //Pedidos
      $boletos = $_POST['boletos'];
      $camisas = $_POST['pedido_camisas'];
      $etiquetas = $_POST['pedido_etiquetas'];
      include_once '../GDLwebcampPHP/includes/funciones/funciones.php';
      $pedido = productos_json($boletos,$camisas,$etiquetas);
      // echo "<pre>";
      //   var_dump($pedido);
      // echo "</pre>";

      // Eventos
      $eventos = $_POST['registro'];
      $registro = eventos_json($eventos);


    try {
      require_once('includes/funciones/db_conexion.php');

      $stmt = $conn->prepare("INSERT INTO registrados (nombre_registrado,apellido_registrado,email_registrado,fecha_registro,pases_articulos,talleres_registrados,regalo,total_pagado) VALUES (?,?,?,?,?,?,?,?) ");
      $stmt->bind_param("ssssssis", $nombre,$apellido,$email,$fecha,$pedido,$registro,$regalo,$total);


    } catch (\Throwable $th) {
      echo $th->getMessage();
    }


  ?>
    
  <?php endif; ?>

</section>
<?php include_once '../GDLwebcampPHP/includes/templates/footer.php' ?>

