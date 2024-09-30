function showWeatherDetailsLatLong(event) {
    event.preventDefault();

    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;

    if (!lat.trim() || isNaN(lat) || !lon.trim() || isNaN(lon)) {
        alert("Please enter valid latitude and longitude.");
        return;
    }

    const apiKey = '670096516819bec2be645e0fb2486685'; // Your actual API key
    const apiUrlBase = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrlBase)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather at City: ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Latitude: ${lat}</p>
                <p>Longitude: ${lon}</p>
                <h2>Weather: ${data.weather[0].description}</h2>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetailsLatLong);
