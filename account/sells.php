<?php

  error_reporting(0);

    require 'database.php';

    $message = '';

    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['paypal']) && !empty($_REQUEST['image'])) {
        $sql = "INSERT INTO sells (name, email, paypal, image) VALUES (:name, :email, :paypal, :image)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $_POST['name']);
        $stmt->bindParam(':email', $_POST['email']);
        $stmt->bindParam(':paypal', $_POST['paypal']);
        $stmt->bindParam(':image', $_REQUEST['image']);

        if ($stmt->execute()) {
            $message = "Thanks for your purchase! We'll send you an email with the image you've just purchased";
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
      <form action="../store" method="POST">
        <input type="submit" value="Go to Store">
      </form>
  </body>
</html>