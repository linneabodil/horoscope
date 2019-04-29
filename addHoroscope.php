<?php

  include "./horoscope.php";

    if($_SERVER['REQUEST_METHOD'] == "POST") {
      try {
        if($_POST['action'] == "save") {
          $date = $_POST["date"];

          $horoscope = new Horoscope();
          $result = $horoscope->calcHoroscope($date);
        //  $result = json_encode($databaseData);

          if(!isset($_SESSION["horoscope"])) {
            $save = $horoscope->saveHoroscope($result);
          }

          echo json_encode(true);
          exit;
        }
      }
      catch (Exception $error) {
        http_response_code(500);
        echo json_encode($error->getMessage());
      }
    }


?>
