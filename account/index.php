<?php

error_reporting(0);

$resultado = 'No Existe';

if (isset($_COOKIE['user_id'])) {
    $resultado = 'Existe';
}

require 'database.php';

if (isset($_SESSION['user_id'])) {
    $records = $conn->prepare('SELECT id, email, password FROM users WHERE id = :id');
    $records->bindParam(':id', $_SESSION['user_id']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $user = null;

    if (count($results) > 0) {
        $user = $results;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<title>PCMR World - Cuentas</title>
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
<link rel='stylesheet' href='assets/css/style.css'>
<link rel="icon" href="../img/favicon.png" type="image/gif" sizes="16x16">
</head>
<body>
<?php require 'partials/header.php' ?>

<p> <?= $resultado ?></p>

<?php if (!empty($user)) : ?>
<br> Bienvenido, <?= $user['email'] ?>
<br>Has iniciado sesión correctamente.
<br>
<br>
<form action='../' method='POST'>
<input type='submit' value='Volver'>
</form>
<?php else: ?>
<h1>Por favor, inicia sesión o regístrate</h1>

<a href='./login'>Iniciar Sesión</a> o
<a href='./signup'>Registrarse</a>
<?php endif; ?>
</body>
</html>