<?php

  error_reporting(0);

  $server = 'localhost:3306';
  $username = 'mysql';
  $password = 'MySqlTfgP@$$w0rd!';
  $database = 'login';

  try {
    $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
  } catch (PDOException $e) {
    die('Connection Failed: ' . $e->getMessage());
  }

?>
<!---->