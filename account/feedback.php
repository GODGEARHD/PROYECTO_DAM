<?php

  error_reporting(0);

    require 'database.php';

    $message = '';

    if (!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['telefono']) && !empty($_POST['resumen'])) {
        $sql = "INSERT INTO feedback (name, email, telephone, opinion) VALUES (:nombre, :email, :telefono, :resumen)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre', $_POST['nombre']);
        $stmt->bindParam(':email', $_POST['email']);
        $stmt->bindParam(':telefono', $_POST['telefono']);
        $stmt->bindParam(':resumen', $_POST['resumen']);

        if ($stmt->execute()) {
            $message = 'Thanks for your feedback!';
        } else {
            $message = 'Sorry, there must have been an issue while saving your comments';
        }
}

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Thank You!</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <?php require 'partials/header.php' ?>
      <br> <?= $message ?>
      <br>
      <br>
      <form action="../index" method="POST">
        <input type="submit" value="Go Home">
      </form>
  </body>
</html>