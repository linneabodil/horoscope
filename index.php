<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <title>Whats your zodiac sign?</title>
    <link rel="stylesheet" href="./scss/main.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lora|Open+Sans" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <h1>Whats your zodiac sign?</h1>
      <div class="inputs">
        <label for="birthDate">Your birthdate:</label>
        <input type="date" name="birthDate" id="birthDate" value="2019-02-22">
      </div>

      <div class="buttons">
        <?php if (!(isset($_SESSION["horoscope"]))): ?>
          <a href="#" onClick="saveHoroscope()">Save horoscope</a>
        <?php else: ?>
          <a href="#" onClick="updateHoroscope()">Update horoscope</a>
          <a href="#" onClick="deleteHoroscope()">Delete horoscope</a>
        <?php endif; ?>
      </div>

      <div id="sign">
      </div>
    </div>
  </body>
</html>
<script src="logic.js"></script>
