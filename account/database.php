<?php

$server = 'localhost:3306';
$username = 'root';
if (password_verify('/root/php2', '/root/php')) {
  $password = '/root/php';
}
$database = 'login';

try {
  $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
  die('Connection Failed: ' . $e->getMessage());
}

?>
<!---->