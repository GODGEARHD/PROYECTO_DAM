<?php

error_reporting( 0 );

require 'database.php';

$message = '';

if ( !empty( $_POST[ 'email' ] ) && !empty( $_POST[ 'password' ] ) ) {
    $records = $conn->prepare( 'SELECT id, email, password FROM users WHERE email = :email' );
    $records->bindParam( ':email', $_POST[ 'email' ] );
    $records->execute();
    $results = $records->fetch( PDO::FETCH_ASSOC );

    $message = '';
    $message2 = '';

    if ( count( $results ) > 0 && password_verify( $_POST[ 'password' ], $results[ 'password' ] ) ) {
        $message = '¡Vaya, parece que ya existe un usuario con ese email! ¿Por qué no intentas ';
        $message2 = 'iniciar sesión?';
    } else {
        $sql = 'INSERT INTO users (email, password) VALUES (:email, :password)';
        $stmt = $conn->prepare( $sql );
        $stmt->bindParam( ':email', $_POST[ 'email' ] );
        $password = password_hash( $_POST[ 'password' ], PASSWORD_BCRYPT );
        $stmt->bindParam( ':password', $password );

        if ( $stmt->execute() ) {
            $message = 'Nuevo usuario creado correctamente';
            header( 'Location: ./login' );
        } else {
            $message = 'Lo sentimos, ha debido producirse algún error mientras creabamos tu cuenta.';
        }
    }
}
?>
<!DOCTYPE html>
<html>

<head>
<meta charset = 'utf-8'>
<title>PCMR World - Registro</title>
<link rel="icon" href="../img/favicon.png" type="image/gif" sizes="64x64">
<link href = 'https://fonts.googleapis.com/css?family=Roboto' rel = 'stylesheet'>
<link rel = 'stylesheet' href = 'assets/css/style.css'>
</head>

<body>

<?php require 'partials/header.php' ?>

<?php if ( !empty( $message ) ) : ?>
<p> <?= $message ?><a href = 'login'> <?= $message2 ?></a></p>
<?php endif;
?>

<h1>Registrarse</h1>
<span>o <a href = 'login'>Iniciar Sesión</a></span>

<form action = 'signup' method = 'POST'>
<input name = 'email' type = 'email' placeholder = 'Introduce tu email'>
<input name = 'password' type = 'password' placeholder = 'Introduce tu contraseña'>
<input name = 'confirm_password' type = 'password' placeholder = 'Confirmar contraseña'>
<input type = 'submit' value = 'Enviar'>
</form>

</body>

</html>