<?php include_once '../GDLwebcampPHP/includes/templates/header.php' ?>

  <section class="seccion contenedor">
    <h2>Calendario de Eventos</h2>

    <?php
      try {
        require_once('includes/funciones/db_conexion.php');
        $sql = "SELECT * FROM eventos";
        $resultado = $conn->query($sql);
        echo $resultado;
      } catch (\Throwable $th) {
        echo $th->getMessage();
      }

    ?>

    <div class="calendario">
      <?php
        $eventos=$resultado->fetch_assoc(); // Trae el primer registro. Para uun arreglo asociativo
      ?>

      <pre>
        <?php var_dump($eventos) ?>
      </pre>
    </div>

    <?php
      $conn->close();
    ?>

  </section>

<?php include_once '../GDLwebcampPHP/includes/templates/footer.php' ?>
