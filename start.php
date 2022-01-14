<!--<?php
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $resumen = $_POST['resumen'];
    if ($nombre == ''){
        echo 'Hay algún campo vacío';
    }else {
        echo $nombre;
        echo ' ';
        echo $email;
        echo ' ';
        echo $telefono;
        echo ' ';
        echo $resumen;
    }
?>-->

<?php

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
            header('Location: ./start');
        } else {
            $message = 'Sorry, there must have been an issue while saving your comments';
        }
}

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Welcome to you WebApp</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <?php require 'partials/header.php' ?>
      <br> <?= $message ?>
      <br>You are Successfully Logged In
      <br>
      <br>
      <form action="../index" method="POST">
        <input type="submit" value="Go Home">
      </form>
  </body>
</html>