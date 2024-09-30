function showWeatherDetails(event){
    event.preventDefault(); // Prevent default form submission behavior

  const city = document.getElementById('city').value;

  // Validate city input (optional)
  if (!city.trim()) {
    alert('Please enter a city name.');
    return; // Exit if no city is entered
  }

  const apiKey = '670096516819bec2be645e0fb2486685'; // Replace with your API key
  const apiUrlBase = 'https://api.openweathermap.org/data/2.5/weather?q='; // Use city name parameter

  // Construct the API URL with city and API key
  const apiUrl = `${apiUrlBase}${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) { // Check for non-200 status codes
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');   

      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                 <p>Temperature: ${data.main.temp}   
 &#8541;</p>
                                 <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => { // Handle both network and parsing errors
      console.error('Error fetching weather:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>Failed to fetch weather.   
 Please try again.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);