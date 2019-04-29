<?php
  class Database {
    function __construct() {
      $dsn = 'mysql:host=localhost;dbname=horoscope;';
      $user = 'root';
      $password = '';

      try {
        $this->connection = new PDO($dsn, $user, $password);
      } catch (PDOException $e) {
        throw $e;
      }
    }
  }
?>
