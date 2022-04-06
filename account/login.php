<?php

error_reporting(0);

if (isset($_SESSION['user_id'])) {
  header('Location: ./index');
}
require 'database.php';

if (!empty($_POST['email']) && !empty($_POST['password'])) {
  $records = $conn->prepare('SELECT id, email, password FROM users WHERE email = :email');
  $records->bindParam(':email', $_POST['email']);
  $records->execute();
  $results = $records->fetch(PDO::FETCH_ASSOC);

  $message = '';

  if (count($results) > 0 && password_verify($_POST['password'], $results['password'])) {
    session_start();
    $_SESSION['user_id'] = $results['id'];
    header("Location: ./index");
  } else {
    $message = 'Lo sentimos, pero las credenciales que has proporcionade no existen o no son correctas.';
  }
}

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>PCMR World - Iniciar Sesión</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
  <?php require 'partials/header.php' ?>

  <?php if (!empty($message)) : ?>
    <p> <?= $message ?></p>
  <?php endif; ?>

  <h1>Iniciar Sesión</h1>
  <span>or <a href="signup">Registrarse</a></span>

  <form action="login" method="POST">
    <input name="email" type="email" placeholder="Introduce tu email">
    <input name="password" type="password" placeholder="Introduce tu contraseña">
    <input type="submit" value="Enviar">
  </form>
</body>

</html>