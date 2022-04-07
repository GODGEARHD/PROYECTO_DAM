<?php

error_reporting(0);

require 'database.php';

$montaje = 0;

$checkbox = $_POST['montaje'];

if ($checkbox == 'on') {

  $montaje = 1;
} else {

  $montaje = 0;
}

$message = '';

if (!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['paypal'])) {
  $sql = "INSERT INTO custom_cfg (nombre_usuario, email, paypal, precio_total, cpu, refri_cpu, ram, placa_base, disco_duro_1, disco_duro_2, caja, psu, gpu, tarjeta_sonido, lector_tarjetas, dvd, monitor, teclado, raton, altavoces, tarjeta_tv, adaptador_eth_wifi, montaje, sistema_operativo) VALUES (:nombre, :email, :paypal, :precio, :cpu, :refri, :ram, :placa, :disco1, :disco2, :caja, :psu, :gpu, :audio, :lector, :dvd, :monitor, :teclado, :raton, :altavoces, :tv, :red, :montaje, :so)";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':nombre', $_POST['nombre']);
  $stmt->bindParam(':email', $_POST['email']);
  $stmt->bindParam(':paypal', $_POST['paypal']);
  $stmt->bindParam(':precio', $_POST['totalOculto']);
  $stmt->bindParam(':cpu', $_POST['cpu']);
  $stmt->bindParam(':refri', $_POST['refri']);
  $stmt->bindParam(':ram', $_POST['ram']);
  $stmt->bindParam(':placa', $_POST['placa']);
  $stmt->bindParam(':disco1', $_POST['disco1']);
  $stmt->bindParam(':disco2', $_POST['disco2']);
  $stmt->bindParam(':caja', $_POST['caja']);
  $stmt->bindParam(':psu', $_POST['psu']);
  $stmt->bindParam(':gpu', $_POST['gpu']);
  $stmt->bindParam(':audio', $_POST['audio']);
  $stmt->bindParam(':lector', $_POST['lector']);
  $stmt->bindParam(':dvd', $_POST['dvd']);
  $stmt->bindParam(':monitor', $_POST['monitor']);
  $stmt->bindParam(':teclado', $_POST['teclado']);
  $stmt->bindParam(':raton', $_POST['raton']);
  $stmt->bindParam(':altavoces', $_POST['altavoces']);
  $stmt->bindParam(':tv', $_POST['tv']);
  $stmt->bindParam(':red', $_POST['red']);
  $stmt->bindParam(':montaje', $montaje);
  $stmt->bindParam(':so', $_POST['so']);

  if ($stmt->execute()) {
    $message = '¡Gracias por tus comentarios!';
  } else {
    $message = 'Lo sentimos, se ha debido de producir algun error al procesar tus comentarios. Comprueba que has introducido todos los datos correctamente.';
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
  <form action="../customizer" method="POST">
    <input type="submit" value="Volver">
  </form>
</body>

</html>