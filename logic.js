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

/// get, visa stjärntecknet som ligger i session om inte tom annars log: false
function getHoroscope() {

  fetch("viewHoroscope.php", {
    method: "GET",
  }).then((data) => {
    return data.json()
  }).then((result) => {
    console.log(result)
    printHoroscope(result[0])
  }).catch((err) => {
    console.error(err)
  })

}

/// save, om det inte finns något i session annars log: false
function saveHoroscope() {
  console.log("Save, plz.")
  var input = document.getElementById("birthDate").value;
  var date = input.slice(5)

  // för att fixa årtalet för personer födda runt nyår
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

  var request = new FormData()
  request.append("action", "save")
  request.append("date", finalDate)

  makeRequest("addHoroscope.php", "POST", request, (response) => {
    getHoroscope()
  })
}

/// update, om session inte är tom annars log: false
function updateHoroscope() {
  console.log("Gimme new, update.")
}

/// delete, om det finns något i session annars log: false
function deleteHoroscope() {
  console.log("Take it away, delete.")

  fetch("deleteHoroscope.php", {
    method: "DELETE",
  }).catch((err) => {
    console.error(err)
  })

  getHoroscope()
}

/// print
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
  /// om det inte finns något horoskop sparat, töm diven
  else {
    var container = document.getElementById("sign")
    container.innerHTML = ""
  }
}

getHoroscope()
