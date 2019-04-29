<?php

  session_start();

  class Horoscope {
    function __construct() {
      include_once('database.php');
      $this->database = new Database();
    }

    // check what sign the date belongs to
    public function calcHoroscope($date) {
      $query = $this->database->connection->prepare(
        "SELECT horoscopeSign
        FROM HoroscopeList
        WHERE (dateFrom <= '$date') AND (dateUntil >= '$date');
        ");
      $query->execute();
      $result = $query->fetchAll();

      if (empty($result)){
        return array("error" => "oh no.");
      }
      return $result;
    }

    // save in session
    public function saveHoroscope($sign) {
      if(!isset($_SESSION["horoscope"])) {
        $_SESSION["horoscope"] = $sign;
      }
      else {
        unset($_SESSION["horoscope"]);
        $_SESSION["horoscope"] = $sign;
      }
    }
  }

?>
