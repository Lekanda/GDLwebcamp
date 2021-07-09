<?php include_once '../GDLwebcampPHP/includes/templates/header.php' ?>



<section class="seccion contenedor">
      <h2>Calendario de Eventos</h2>

      <?php
          try {
            require_once('includes/funciones/db_conexion.php');
            $sql = " SELECT `evento_id`, `nombre_evento`, `fecha_evento`, `hora_evento`, `cat_evento`, `nombre_invitado`, `apellido_invitado` ";
            $sql .= " FROM `eventos` ";
            $sql .= " INNER JOIN `categoria_evento` ";
            $sql .= " ON `eventos`.`id_cat_evento` = `categoria_evento`.`id_categoria` ";
            $sql .= " INNER JOIN `invitados` ";
            $sql .= " ON `eventos`.`id_inv` = `invitados`.`invitado_id` ";
            $sql .= " ORDER BY evento_id ";
            $resultado = $conn->query($sql);
            // echo $resultado;
            // echo $sql;
          } catch (\Throwable $th) {
            echo $th->getMessage();
          }
      ?>

      <div class="calendario">
            <?php
              $calendario = array();
              while ($eventos=$resultado->fetch_assoc()) {
                // Obtiene la fecha del evento
                $fecha = $eventos['fecha_evento'];
                $categoria = $eventos['cat_evento'];

                $evento = array(
                  'titulo' => $eventos['nombre_evento'],
                  'fecha' => $eventos['fecha_evento'],
                  'hora' => $eventos['hora_evento'],
                  'categoria' => $eventos['cat_evento'],
                  'invitado' => $eventos['nombre_invitado'] . " " . $eventos['apellido_invitado']
                );

                $calendario[$categoria][]= $evento;

                ?>
            <?php } ?>
            <pre>
              <?php var_dump($calendario);?>
            </pre>



      </div>

      <?php
        $conn->close();
      ?>
</section>



<?php include_once '../GDLwebcampPHP/includes/templates/footer.php' ?>
