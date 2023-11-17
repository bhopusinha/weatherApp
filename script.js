// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=bcd3d7114b4f8785f27d85b2a6c3063f&units=metric
const inp = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const weathericon = document.querySelector('.weather-icon')

const urlAPI = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const apiKEY = 'bcd3d7114b4f8785f27d85b2a6c3063f';

const main = async (city = "pune") => {
    const response = await fetch(urlAPI + city + `&appid=${apiKEY}`);
    const data = await response.json();
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = "none"
    } else {

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h'

        if (data.weather[0].main == 'Clouds') {
            weathericon.src = 'images/clouds.png';
        } else if (data.weather[0].main == 'Clear') {
            weathericon.src = 'images/clear.png';
        } else if (data.weather[0].main == 'Drizzle') {
            weathericon.src = 'images/drizzle.png';
        } else if (data.weather[0].main == 'Mist') {
            weathericon.src = 'images/mist.png';
        } else if (data.weather[0].main == 'Rain') {
            weathericon.src = 'images/rain.png';
        }else if(data.weather[0].main == 'Snow'){
            weathericon.src = 'images/snow.png';
        }
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = "block"
    }

};

btn.addEventListener('click', function (e) {
    main(inp.value);
})
