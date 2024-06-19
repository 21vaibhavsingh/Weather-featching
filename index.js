
async function getWeather() {
    const apiKey = 'd12ba4635bd7b55521e0972445575b7e';  
    const city = document.getElementById('cityInput').value;  
    
    
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found. Please try again.');
            return;
        }

        document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = `${data.main.temp} °C`;
        document.getElementById('description').innerText = data.weather[0].description;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateDateTime() {
    const now = new Date();
    const datetimeStr = now.toLocaleString();
    document.getElementById('datetime').innerText = datetimeStr;
}

setInterval(updateDateTime, 1000);


window.onload = function() {
    document.getElementById('cityInput').value = 'Delhi';
    getWeather();
};

document.getElementById('getWeather').addEventListener('click', getWeather)