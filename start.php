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

    if (!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['telefono']) && !empty($_POST['resumen'])) {
        $sql = "INSERT INTO feedback (name, email, telephone, opinion) VALUES (:nombre, :email, :telefono, :resumen)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre', $_POST['nombre']);
        $stmt->bindParam(':email', $_POST['email']);
        $stmt->bindParam(':telefono', $_POST['telefono']);
        $stmt->bindParam(':resumen', $_POST['resumen']);

        if ($stmt->execute()) {
            $message = 'Successfully created new user';
            header('Location: /login');
        } else {
            $message = 'Sorry there must have been an issue creating your account';
        }
}

?>