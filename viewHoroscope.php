<?php

  session_start();

   if ($_SERVER['REQUEST_METHOD'] == 'GET') {
     if (isset($_SESSION["horoscope"])) {
       echo json_encode($_SESSION["horoscope"]);
       //echo json_encode("finns");
     }
     else {
       echo json_encode(false);
     }
  }

?>