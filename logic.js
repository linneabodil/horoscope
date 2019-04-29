/// talk to database
function makeRequest(url, method, formdata, callback) {
  fetch(url, {
    method: method,
    body: formdata
  }).then((data) => {
    return data.json()
  }).then((result) => {
    callback(result)
  }).catch((err) => {
    console.log(err)
  })
}

/// get birthdate
function getDate() {
  var input = document.getElementById("birthDate").value;
  var date = input.slice(5)

  /// for the capricorns
  if (date.slice(0,2) == "01") {
    if (date.slice(3,6) <= 19) {
      var finalDate = "2020-" + date;
    }
    else if (date.slice(3,6) >= 20) {
      var finalDate = "2019-" + date;
    }
  }
  else {
    var finalDate = "2019-" + date;
  }
  return finalDate;
}

/// get horoscope from session, then print
function getHoroscope() {

  fetch("viewHoroscope.php", {
    method: "GET",
  }).then((data) => {
    return data.json()
  }).then((result) => {
    printHoroscope(result[0])
  }).catch((err) => {
    console.error(err)
  })
}

/// if session is empty, put horoscope in session
function saveHoroscope() {
  var date = getDate();

  var request = new FormData()
  request.append("action", "save")
  request.append("date", date)

  makeRequest("addHoroscope.php", "POST", request, (response) => {
    getHoroscope();
  })
  document.location.reload(true);
}

/// insert new horoscope into session
function updateHoroscope() {
  var date = getDate();

  var request = new FormData()
  request.append("action", "update")
  request.append("date", date)

  makeRequest("updateHoroscope.php", "POST", request, (response) => {
    getHoroscope();
  })
}

/// delete horoscope from session
function deleteHoroscope() {

  fetch("deleteHoroscope.php", {
    method: "DELETE",
  }).catch((err) => {
    console.error(err)
  })

  getHoroscope();
  document.location.reload(true);
}

/// print horoscope
function printHoroscope(sign) {
  if(sign != undefined) {
    var sign = sign.horoscopeSign
    var container = document.getElementById("sign")
    container.innerHTML = ""

    var img = document.createElement("img")
    img.setAttribute("src", "./img/" + sign + ".svg")
    container.append(img)

    var signName = document.createElement("h2")
    signName.innerHTML = "Your zodiac sign is: " + sign
    container.append(signName)
  }
  /// if there is no horoscope in session, clear div
  else {
    var container = document.getElementById("sign")
    container.innerHTML = ""
  }
}

getHoroscope();
