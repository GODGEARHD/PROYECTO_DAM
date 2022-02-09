<?php

  error_reporting(0);

    require 'database.php';

    $montaje = 0;

    $checkbox = $_POST['montaje'];

    if ($checkbox == 'on') {

      $montaje = 1;

    }else {

      $montaje = 0;

    }

    $message = '';

    if (!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['paypal'])) {
        $sql = "INSERT INTO custom_cfg (nombre_usuario, email, paypal, precio_total, cpu, refri_cpu, ram, placa_base, disco_duro_1, disco_duro_2, caja, psu, gpu, tarjeta_sonido, lector_tarjetas, dvd, monitor, teclado, raton, altavoces, tarjeta_tv, adaptador_eth_wifi, montaje, sistema_operativo) VALUES (:nombre, :email, :telefono, :resumen)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre', $_POST['nombre']);
        $stmt->bindParam(':email', $_POST['email']);
        $stmt->bindParam(':telefono', $_POST['telefono']);
        $stmt->bindParam(':resumen', $_POST['resumen']);

        if ($stmt->execute()) {
            $message = '¡Gracias por tus comentarios!';
        } else {
            $message = 'Lo sentimos, se ha debido de producir algun error al procesar tus comentarios';
        }
}

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>¡Gracias!</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <?php require 'partials/header.php' ?>
      <br>
      <p><?= $message ?></p>
      <br>
      <br>
      <form action="../" method="POST">
        <input type="submit" value="Ir a Inicio">
      </form>
  </body>
</html>