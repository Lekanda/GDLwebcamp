<?php
  $conn = new mysqli('localhost','root','root','gdlwebcampphp');

  if ($conn->connect_error) {
    echo $error->conn->connect_error;
  }
  $conn->set_charset("utf8");// Para caracteres del castellano.
?>
