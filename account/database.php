<?php

$server = 'localhost:3306';
$username = 'root';
$password = password_verify('/root/php', $results['password']);
$database = 'login';

try {
  $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
  die('Connection Failed: ' . $e->getMessage());
}

?>
<!---->