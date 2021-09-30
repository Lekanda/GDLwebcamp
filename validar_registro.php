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

  ?>
    <pre>
      <?php var_dump($_POST); ?>
    </pre>
  <?php endif; ?>

</section>
<?php include_once '../GDLwebcampPHP/includes/templates/footer.php' ?>

