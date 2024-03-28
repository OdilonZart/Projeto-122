var drawCircle = "";

var drawRectangle = "";

var x = 0;

var y = 0;

var circle = "";

var rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "O Sistema está ouvindo. Por favor, fale."
    recognition.start()
}

recognition.onresult = function (event) {
    console.log(event)
    var text = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "A Fala foi reconhecida como: " + text
    if (text == "círculo") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 900)
        document.getElementById("status").innerHTML = "Desenhando Um Circulo."
        drawCircle = "set"
    }
    if (text == "retângulo") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 900)
        document.getElementById("status").innerHTML = "Desenhando Um Retângulo."
        drawRectangle = "set"
    }
}

function setup() {
    canvas = createCanvas(900, 600)
}

function draw() {
    if (drawCircle == "set") {
        radius = Math.floor(Math.random() * 100)
        circle(x, y, radius)
        document.getElementById("status").innerHTML = "Circulo Desenhado."
        drawCircle = ""
    }
    if (drawRectangle == "set") {
        rect(x, y, 70, 50)
        document.getElementById("status").innerHTML = "Retângulo Desenhado."
        drawRectangle = ""
    }
}

