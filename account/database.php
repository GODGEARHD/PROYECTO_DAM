<?php

/*error_reporting(-1);

ini_set('display_errors', '1');*/

$server = 'localhost:3306';
$username = 'mysql';
$password = 'MySqlTfgP@$$w0rd!';
$database = 'pcmr-world';

try {
  $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
  die('Connection Failed: ' . $e->getMessage());
}

?>
<!---->