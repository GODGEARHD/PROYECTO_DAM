<?php

//error_reporting(0);

require 'database.php';

$message = '';

if (!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['telefono']) && !empty($_POST['resumen'])) {
    $records = $conn->prepare('SELECT name, email, telephone, opinion FROM feedback WHERE telephone = :telefono');
    $records->bindParam(':telefono', $_POST['telefono']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    if (count($results) > 0) {
        $message = '¡Vaya, parece que ya se ha dejado una reseña con ese número de teléfono! ¿Estás seguro de que está bien escrito?';
    } else {
        if (!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['telefono']) && !empty($_POST['resumen'])) {
            $sql = 'INSERT INTO feedback (name, email, telephone, opinion) VALUES (:nombre, :email, :telefono, :resumen)';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':nombre', $_POST['nombre']);
            $stmt->bindParam(':email', $_POST['email']);
            $stmt->bindParam(':telefono', $_POST['telefono']);
            $stmt->bindParam(':resumen', $_POST['resumen']);

            if ($stmt->execute()) {
                $message = '¡Gracias por tus comentarios!';
            } else {
                $message = 'Lo sentimos, se ha debido de producir algun error al procesar tus comentarios. Comprueba que has escrito bien todos los datos en el formulario.';
            }
        }
    }
}

?>

<!DOCTYPE html>
<html>

<head>
<meta charset='utf-8'>
<title>PCMR World - ¡Gracias!</title>
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
<link rel='stylesheet' href='assets/css/style.css'>
</head>

<body>
<?php require 'partials/header.php' ?>
<br>
<p><?= $message ?></p>
<br>
<br>
<form action='../about' method='POST'>
<input type='submit' value='Volver'>
</form>
</body>

</html>