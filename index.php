<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <title></title>
    <link rel="stylesheet" href="./scss/main.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lora|Open+Sans" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <h1>Whats your zodiac sign?</h1>
      <a href="two.php">till sida två</a>
      <div class="inputs">
        <label for="birthDate">Your birthdate</label>
        <input type="date" name="birthDate" id="birthDate" value="2019-07-22">
      </div>

      <div class="buttons">
        <a href="#" onClick="saveHoroscope()">Save horoscope</a>
        <a href="#" onClick="updateHoroscope()">Update horoscope</a>
        <a href="#" onClick="deleteHoroscope()">Delete horoscope</a>
      </div>

      <div id="sign">
      </div>
    </div>
  </body>
</html>
<script src="logic.js"></script>
