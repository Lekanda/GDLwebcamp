<?php if (isset($_POST['submit'])) :
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $regalo = $_POST['regalo'];
    $total = $_POST['total_pedido'];
    $fecha = date('Y-m-d H:i:s');
    $boletos = $_POST['boletos'];
    $camisas = $_POST['pedido_camisas'];
    $etiquetas = $_POST['pedido_etiquetas'];
    include_once '../GDLwebcampPHP/includes/funciones/funciones.php';
    $pedido = productos_json($boletos, $camisas, $etiquetas);
    $eventos = $_POST['registro'];
    $registro = eventos_json($eventos);
    try {
      require_once('includes/funciones/db_conexion.php');
      $stmt = $conn->prepare("INSERT INTO registrados (nombre_registrado,apellido_registrado,email_registrado,fecha_registro,pases_articulos,talleres_registrados,regalo,total_pagado) VALUES (?,?,?,?,?,?,?,?) ");
      $stmt->bind_param("ssssssis", $nombre, $apellido, $email, $fecha, $pedido, $registro, $regalo, $total);
      $stmt->execute();
      $stmt->close();
      $conn->close();
      // Redirecciona para que no se carguen 2 registros al actualizar la pagina..
      header('Location: validar_registro.php?exitoso=1');
    } catch (\Throwable $th) {
      echo $th->getMessage();
    }
?>
<?php endif; ?>
<?php include_once '../GDLwebcampPHP/includes/templates/header.php'; ?>
<section class="seccion contenedor">
  <h2>Resumen registro</h2>


  <?php if (isset($_GET['exitoso'])) {
    if ($_GET['exitoso'] == "1") {
      echo "Registro hecho ok";
    }
  } ?>

</section>
<?php include_once '../GDLwebcampPHP/includes/templates/footer.php'; ?>
