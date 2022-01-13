<?php
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    if ($nombre == ''){
        echo 'Hay algún campo vacío';
    }else {
        echo $nombre;
        echo ' ';
        echo $email;
        echo ' ';
        echo $telefono;
    }
?>