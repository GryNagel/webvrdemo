var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Bergen,NO&units=metric&APPID=c220112adc76bdcd2ba2e3c3a4039235", false);
xhr.send();

var obj = JSON.parse(xhr.response);

console.log(obj.clouds.all);
console.log(obj.weather[0].main);
console.log(obj.main.temp);
console.log(xhr.status);
console.log(xhr.statusText);


var scene = document.getElementById('scene');
var sky = document.getElementById('sky');
var plane = document.getElementById('plane');
var sign = document.getElementById('sign');

var weather = obj.weather[0].main;
var cloudiness = obj.clouds.all;

var text;
var temperature;

var grassPosition = ["-12 0 -12", "-6 0 -12", "0 0 -12", "6 0 -12", "12 0 -12",
    "-13 0 -6", "-7 0 -6", "-1 0 -6", "5 0 -6", "11 0 -6",
    "-12 0 0", "-6 0 0", "0 0 0", "6 0 0", "12 0 0",
    "-13 0 6", "-7 0 6", "-1 0 6", "5 0 6", "11 0 6",
    "-12 0 12", "-6 0 12", "0 0 12", "6 0 12", "12 0 12"];


for (var i = 0; i < grassPosition.length;) {
    plane.insertAdjacentHTML('afterend', '<a-entity scale="3 1 3" position=" ' + grassPosition[i] + ' " gblock="https://poly.google.com/view/dz_TvM39dC7" rotation="0 -90 0">\n' +
        '</a-entity>');
    i++;
}

function setText(text){
    var textObject = '<a-entity position="0 0.15 0.1" text="align:center;value:' + text + ' ;width:5;baseline: center;"></a-entity>';
    sign.insertAdjacentHTML('afterend', textObject);
}

function setTemperature(temperature){
    var textObject = '<a-entity position="0 -0.2 0.1" text="align:center;value:' + temperature + '°C;width:5;baseline: center;"></a-entity>';
    sign.insertAdjacentHTML('afterend', textObject);
}

function setWeather() {
    if (weather === 'Clouds') {
        setText("It's cloudy!");
        if (cloudiness > 50) {
            sky.setAttribute("color", "#778899");
        }
        else {
            sky.setAttribute("src", "#cloudy");
            sky.setAttribute("color", "");
        }
    }

    if (weather === 'Drizzle') {
        sky.setAttribute("color", "#345678");
        setText("Light drizzle");
    }

    if (weather === 'Rain') {
        scene.setAttribute("rain", "true");
        sky.setAttribute("color", "#345678");
        setText("It's raining!");
    }

    if (weather === 'Clear') {
        sky.setAttribute("color", "#cdf9ff");
        setText("It's sunny!");
    }
}

if (xhr.status = 200){
    setWeather();
    setTemperature(obj.main.temp);
}