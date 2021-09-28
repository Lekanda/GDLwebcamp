<?php include_once '../GDLwebcampPHP/includes/templates/header.php' ?>

<section class="seccion contenedor">
  <h2>La mejor Conferencia de diseño web en Español</h2>
  <p>Praesent rutrum efficitur pharetra. Vivamus scelerisque pretium velit, id tempor turpis pulvinar et. Ut bibendum finibus massa non molestie. Curabitur urna metus, placerat gravida lacus ut, lacinia congue orci. Maecenas luctus mi at ex blandit vehicula. Morbi porttitor tempus euismod.</p>
</section>
<!--Seccion de info-->

<section class="programa">
  <div class="contenedor-video">
    <video autoplay loop poster="/GDLwebcampPHP/img/bg-talleres.jpg" muted>
      <source src="video/video.mp4" type="video/mp4">
      <source src="video/video.webm" type="video/webm">
      <source src="video/video.ogv" type="video/ogv">
    </video>
  </div>
  <!--Fin contenedor Video-->
  <div class="contenido-programa">
    <div class="contenedor">
      <div class="programa-evento">
        <h2>Programa del Evento</h2>


        <?php
        try {
          require_once('includes/funciones/db_conexion.php');
          $sql = " SELECT * FROM `categoria_evento` ";
          $resultado = $conn->query($sql);
          // echo $resultado;
          // echo $sql;
        } catch (\Throwable $th) {
          echo $th->getMessage();
        }
        ?>



        <nav class="menu-programa">
          <?php while ($cat = $resultado->fetch_array(MYSQLI_ASSOC)) { ?>
            <!-- <pre>
              <?php var_dump($cat) ?>
            </pre> -->

            <?php $categoria = $cat['cat_evento'] ?>
            <a href="<?php echo strtolower($categoria) ?>">
              <i class="fa <?php echo $cat['icono'] ?>"></i><?php echo $categoria ?></a>
          <?php } ?>
        </nav>


        <?php
        try {
          require_once('includes/funciones/db_conexion.php');
          $sql = " SELECT `evento_id`, `nombre_evento`, `fecha_evento`, `hora_evento`, `cat_evento`, `icono`,`nombre_invitado`, `apellido_invitado` ";
          $sql .= " FROM `eventos` ";
          $sql .= " INNER JOIN `categoria_evento` ";
          $sql .= " ON `eventos`.`id_cat_evento` = `categoria_evento`.`id_categoria` ";
          $sql .= " INNER JOIN `invitados` ";
          $sql .= " ON `eventos`.`id_inv` = `invitados`.`invitado_id` ";
          $sql .= " AND eventos.id_cat_evento = 1 ";
          $sql .= " ORDER BY evento_id LIMIT 2";
          $resultado = $conn->query($sql);
          // echo $resultado;
          // echo $sql;
        } catch (\Throwable $th) {
          echo $th->getMessage();
        }
        ?>


        <?php $eventos=$resultado->fetch_assoc(); ?>
        <pre>
              <?php var_dump($eventos) ?>
        </pre>







        <?php  ?>



        <div id="talleres" class="info-curso ocultar clearfix">
          <div class="detalle-evento">
            <h3>HTML5, CSS3, JavaScript</h3>
            <p><i class="fas fa-clock"></i> 16:00 hrs</p>
            <p><i class="fas fa-calendar"></i> 10 de Dic</p>
            <p><i class="fas fa-user"></i> Andres Bernaola Olivares</p>
          </div>
          <div class="detalle-evento">
            <h3>WordPress</h3>
            <p><i class="fas fa-clock"></i> 20:00</p>
            <p><i class="fas fa-calendar"></i> 10 de Dic</p>
            <p><i class="fas fa-user"></i> Andres Bernaola Olivares</p>
          </div>
          <a href="#" class="button float-right">Ver Todos</a>
        </div>



        <div id="conferencias" class="info-curso ocultar clearfix">
          <div class="detalle-evento">
            <h3>Como ser Freelancer?</h3>
            <p><i class="fas fa-clock"></i> 10:00 hrs</p>
            <p><i class="fas fa-calendar"></i> 10 de Dic</p>
            <p><i class="fas fa-user"></i> Luis Perez</p>
          </div>
          <div class="detalle-evento">
            <h3>Tecnologias del Futuro</h3>
            <p><i class="fas fa-clock"></i> 17:00</p>
            <p><i class="fas fa-calendar"></i> 10 de Dic</p>
            <p><i class="fas fa-user"></i> Luis Perez</p>
          </div>
          <a href="#" class="button float-right">Ver Todos</a>
        </div>



        <div id="seminarios" class="info-curso ocultar clearfix">
          <div class="detalle-evento">
            <h3>Diseño UI para moviles</h3>
            <p><i class="fas fa-clock"></i> 17:00 hrs</p>
            <p><i class="fas fa-calendar"></i> 11 de Dic</p>
            <p><i class="fas fa-user"></i> Luis Perez</p>
          </div>
          <div class="detalle-evento">
            <h3>Aprende a programar en una mañana</h3>
            <p><i class="fas fa-clock"></i> 10:00</p>
            <p><i class="fas fa-calendar"></i> 11 de Dic</p>
            <p><i class="fas fa-user"></i> Luis Perez</p>
          </div>
          <a href="#" class="button float-right">Ver Todos</a>
        </div>






      </div>
    </div>
  </div>
</section>
<!--Seccion de Programa-->


<?php include_once '../GDLwebcampPHP/includes/templates/invitados.php' ?>



<div class="contador parallax clearfix">
  <div class="contenedor">
    <ul class="resumen-evento">
      <li>
        <p class="numero"></p>Invitados
      </li>
      <li>
        <p class="numero"></p>Talleres
      </li>
      <li>
        <p class="numero"></p>Dias
      </li>
      <li>
        <p class="numero"></p>Conferencias
      </li>
    </ul>
  </div>
</div>




<!-- PRECIOS -->
<section class="precios seccion">
  <h2>Precios</h2>
  <div class="contenedor">
    <ul class="lista-precios clearfix">

      <li>
        <div class="tabla-precio">
          <h3>Pase por día</h3>
          <p class="numero">30€</p>
          <ul>
            <li>Bocadillos Gratis</li>
            <li>Todas las Conferencias</li>
            <li>Todos los Talleres</li>
          </ul>
          <a href="#" class="button hollow">Comprar</a>
        </div>
      </li>

      <li>
        <div class="tabla-precio">
          <h3>Todos los días</h3>
          <p class="numero">50€</p>
          <ul>
            <li>Bocadillos Gratis</li>
            <li>Todas las Conferencias</li>
            <li>Todos los Talleres</li>
          </ul>
          <a href="#" class="button">Comprar</a>
        </div>
      </li>

      <li>
        <div class="tabla-precio">
          <h3>Pase por 2 días</h3>
          <p class="numero">45€</p>
          <ul>
            <li>Bocadillos Gratis</li>
            <li>Todas las Conferencias</li>
            <li>Todos los Talleres</li>
          </ul>
          <a href="#" class="button">Comprar</a>
        </div>
      </li>

    </ul>
  </div>
</section>



<!-- MAPA -->
<div id="mapa" class="mapa"></div>




<!-- OPINIONES -->
<section class="seccion">
  <h2>Opiniones</h2>
  <div class="testimoniales contenedor clearfix">
    <div class="testimonial">
      <blockquote>
        <p class="txt-blockquote">Sed mollis velit sit amet felis condimentum ultrices. Fusce vehicula ut sem vitae semper. Nullam blandit neque eu semper ullamcorper. Duis commodo quam in orci condimentum ultricies.</p>
        <footer class="info-testimonial clearfix">
          <img src="img/testimonial.jpg" alt="imagen testimonial">
          <cite>Andres Bernaola Olivares <span>Diseñador en @LekandaNet</span></cite>
        </footer>
      </blockquote>
    </div>
    <div class="testimonial">
      <blockquote>
        <p class="txt-blockquote">Sed mollis velit sit amet felis condimentum ultrices. Fusce vehicula ut sem vitae semper. Nullam blandit neque eu semper ullamcorper. Duis commodo quam in orci condimentum ultricies.</p>
        <footer class="info-testimonial clearfix">
          <img src="img/testimonial.jpg" alt="imagen testimonial">
          <cite>Andres Bernaola Olivares <span>Diseñador en @LekandaNet</span></cite>
        </footer>
      </blockquote>
    </div>
    <div class="testimonial">
      <blockquote>
        <p class="txt-blockquote">Sed mollis velit sit amet felis condimentum ultrices. Fusce vehicula ut sem vitae semper. Nullam blandit neque eu semper ullamcorper. Duis commodo quam in orci condimentum ultricies.</p>
        <footer class="info-testimonial clearfix">
          <img src="img/testimonial.jpg" alt="imagen testimonial">
          <cite>Andres Bernaola Olivares <span>Diseñador en @LekandaNet</span></cite>
        </footer>
      </blockquote>
    </div>
  </div>
</section>




<!-- NEWSLETTER -->
<div class="newsletter parallax">
  <div class="contenido contenedor">
    <p>Registrate al Newsletter</p>
    <h3>GdlWebCamp</h3>
    <a href="#" class="button transparente">Registro</a>
  </div>
</div>




<!-- REGRESIVA -->
<section class="seccion">
  <h2>Faltan</h2>
  <div class="cuenta-regresiva contenedor">
    <ul class="clearfix">
      <li>
        <p id="dias" class="numero"></p>días
      </li>
      <li>
        <p id="horas" class="numero"></p>horas
      </li>
      <li>
        <p id="minutos" class="numero"></p>minutos
      </li>
      <li>
        <p id="segundos" class="numero"></p>segundos
      </li>
    </ul>
  </div>
</section>


<?php include_once '../GDLwebcampPHP/includes/templates/footer.php' ?>
