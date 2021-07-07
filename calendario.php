<?php include_once '../GDLwebcampPHP/includes/templates/header.php' ?>

  <section class="seccion contenedor">
    <h2>Calendario de Eventos</h2>

    <?php
      try {
        require_once('includes/funciones/db_conexion.php');
        $sql = "SELECT * FROM eventos";
        $resultado = $conn->query($sql);
        // echo $resultado;
      } catch (\Throwable $th) {
        echo $th->getMessage();
      }

    ?>

    <div class="calendario">

      <pre>
        <?php
          while ($evento=$resultado->fetch_assoc()) {
            var_dump($evento);
            
          }
        ?>
      </pre>
    </div>

    <?php
      $conn->close();
    ?>

  </section>

<?php include_once '../GDLwebcampPHP/includes/templates/footer.php' ?>
