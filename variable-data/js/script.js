
//See documentation at https://openweathermap.org/current
//40.7353297,-73.9966676 Parsons
fetch('http://api.openweathermap.org/data/2.5/weather?q=New York City&appid=a0be2ca7d3101a5b3e8a3bbf580143f6&units=imperial')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processWeatherData(data);
  })
  .catch(error => console.log(error));


function processWeatherData(data){
     console.log(data);
     let currentTemp = data["main"]["temp"];
     let feelsTemp = data["main"]["feels_like"];

     let wind = data["wind"]["speed"];
     document.getElementById('temp').innerText = currentTemp;
     document.getElementById('feels').innerText = feelsTemp;

    let fontWeight = feelsTemp*10;// wght, goes from 100 to 1000 — font weight
    console.log(fontWeight);

    let max = 20;
    let min = 0;
    let slant = 0;
    if (wind !== 0){
         slant = (wind/max)*-16;  // slnt, goes from 0 to -16  — Upright (0°) to Slanted (about 16°)
    }
    console.log(slant);

    let element = document.querySelector('.highlight');
    element.style.setProperty('--wght', fontWeight);
    element.style.setProperty('--slnt', slant);

}