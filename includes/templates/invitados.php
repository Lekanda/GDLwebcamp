<section class="seccion contenedor">
  <?php
  try {
    require_once('includes/funciones/db_conexion.php');
    $sql = " SELECT * FROM `invitados`";
    $resultado = $conn->query($sql);
  } catch (\Throwable $th) {
    echo $th->getMessage();
  }
  ?>

  <div class="calendario">
    <section class="invitados contenedor seccion">
          <h2>Nuestros invitados</h2>
          <ul class="lista-invitados clearfix">

          <?php while ($invitados = $resultado->fetch_assoc()) { ?>
            <li>
              <div class="invitado">
                <a class="invitado-info" href="#invitado<?php echo $invitados['invitado_id']?>">
                    <img src="img/<?php echo $invitados['url_imagen'] ?>" alt="Invitado 1">
                    <p><?php echo $invitados['nombre_invitado'] . " " . $invitados['apellido_invitado'] ?></p>
                </a>
              </div>
            </li>
            <div style="display:none">
              <div class="invitado-info" id="invitado<?php echo $invitados['invitado_id'] ?>">
                <h2><?php echo $invitados['nombre_invitado'] . " " . $invitados['apellido_invitado'] ?></h2>
                <img src="img/<?php echo $invitados['url_imagen'] ?>" alt="Invitado 1">
                <p><?php echo $invitados['descripcion'] ?></p>
              </div>
            </div>
          <?php } ?>

          </ul>
        </section>
  </div>

  <?php
  $conn->close();
  ?>
</section>
