<?php

error_reporting(0);

require 'database.php';

$message = '';

if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['paypal']) && !empty($_REQUEST['product'])) {
  $sql = "INSERT INTO sells (name, email, paypal, product) VALUES (:name, :email, :paypal, :product)";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':name', $_POST['name']);
  $stmt->bindParam(':email', $_POST['email']);
  $stmt->bindParam(':paypal', $_POST['paypal']);
  $stmt->bindParam(':product', $_REQUEST['product']);

  if ($stmt->execute()) {
    $message = "Thanks for your purchase! We'll send you an email with the image you've just purchased";
  } else {
    $message = 'Sorry, there must have been an issue while saving your comments';
  }
  echo "\nPDO::errorInfo():\n";
  print_r($stmt->errorInfo());
}

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>PCMR World - ¡Gracias!</title>
  <link rel="icon" href="../img/favicon.png" type="image/gif" sizes="512x512">
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