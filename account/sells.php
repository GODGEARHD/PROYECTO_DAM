<?php

error_reporting(-1);

require 'database.php';

$message = '';

if (!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['paypal']) && !empty($_POST['product'])) {
  $sql = "INSERT INTO sells (name, email, paypal, product) VALUES (:nombre, :email, :paypal, :product)";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':nombre', $_POST['nombre']);
  $stmt->bindParam(':email', $_POST['email']);
  $stmt->bindParam(':paypal', $_POST['paypal']);
  $stmt->bindParam(':product', $_POST['product']);

  if ($stmt->execute()) {
    $message = "¡Gracias por tu compra! Te enviaremos un e-mail en breve para que puedas confirmar tu pedido.";
  } else {
    $message = '¡Vaya! Parece que hemos tenido un problema al tramitar tu solicitud.';
  }
}

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>PCMR World - ¡Gracias!</title>
  <link rel="icon" href="../img/favicon.png" type="image/gif" sizes="64x64">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
  <?php require 'partials/header.php' ?>
  <br> <?= $message ?>
  <br>
  <br>
  <form action="../store" method="POST">
    <input type="submit" value="Volver">
  </form>
</body>

</html>