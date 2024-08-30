const apiKey = '47df35477172a2b88503a5a116c5b07b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(){
    const searchCity = document.getElementById('search-city').value;
    
    const city = document.querySelector('.city');
    const weatherIcon = document.querySelector('.weather-icon');
    const temp = document.querySelector('.temp');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');

    const response = await fetch(apiUrl + searchCity + `&appid=${apiKey}`);
    const data = await response.json();
    
    function checkWeatherIcon(weather){
        if(weather === 'Clouds'){
            weatherIcon.src = 'images/clouds.png';
        } else if(weather === 'Clear'){
            weatherIcon.src = 'images/clear.png';
        } else if(weather === 'Drizzle'){
            weatherIcon.src = 'images/drizzle.png';
        } else if(weather === 'Mist'){
            weatherIcon.src = 'images/mist.png';
        } else if(weather === 'Rain'){
            weatherIcon.src = 'images/rain.png';
        } else if(weather === 'Snow'){
            weatherIcon.src = 'images/snow.png';
        }
    }

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + 'ºc';
    humidity.innerHTML = data.main.humidity + '%';
    wind.innerHTML = data.wind.speed + ' km/h';
    
    checkWeatherIcon(data.weather[0].main);
}

const buttonEl = document.querySelector('.card input[type="button"]');
buttonEl.addEventListener('click', checkWeather);