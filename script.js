const inputbox = document.querySelector('.input-box');
const searchbox = document.getElementById('searchBtn');
const image = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity span');
const windspeed = document.getElementById('wind-speed');
const body = document.querySelector('.weather-body');

async function checkweather(city) {
    const api = 'cb1db1e17c1aadd6989e3e4697bde002';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

    const data = await fetch(url).then(response => response.json());
    
    if(data.cod === `404`){
        image.src = "pic/404.png"
        temperature.style.display = "none"
        description.innerHTML = "City not found"
        humidity.innerHTML = "--"
        windspeed.innerHTML = "--"
        return;
    }

    console.log(data);
    temperature.style.display = "flex"
    temperature.innerHTML = `${Math.round(data.main.temp-273.15)}°C`;
    humidity.innerHTML = `${data.main.humidity} %`;
    windspeed.innerHTML = `${data.wind.speed} Km/H`;
    description.innerHTML = `${data.weather[0].main}`

    switch (data.weather[0].main) {
        case 'Clouds':
            image.src = "pic/cloud.png"
            break;
        case 'Clear':
            image.src = "pic/clear.png"
            break;
        case 'Mist':
            image.src = "pic/mist.png"
            break;
        case 'Rain':
            image.src = "pic/rain.png"
            break;
        case 'Snow':
            image.src = "pic/snow.png"
            break;
    }
}

searchbox.addEventListener('click', function () {
    checkweather(inputbox.value);
    body.style.display = "flex"
});
inputbox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        checkweather(inputbox.value);
        body.style.display = "flex";
    }
});
