const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=50.450001&lon=30.523333&appid=742198c70f710c4c4e1999121c8c386b&units=metric';

console.log(apiUrl);
function fetchWeatherData() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      showWeatherData(data);
      localStorage.setItem('weatherData', JSON.stringify(data));
      localStorage.setItem('lastFetchTime', new Date().getTime());
    })
    .catch(error => console.error(error));
}


const weatherData = localStorage.getItem('weatherData');
const lastFetchTime = localStorage.getItem('lastFetchTime');

if (weatherData && lastFetchTime) {
  const currentTime = new Date().getTime();
  const twoHoursInMillis = 2 * 60 * 60 * 1000;

  if (currentTime - lastFetchTime < twoHoursInMillis) {
    showWeatherData(JSON.parse(weatherData));
  } else {
    fetchWeatherData();
  }
} else {
  fetchWeatherData();
}

function showWeatherData(data) {
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
  document.getElementById('temperature').textContent = temperature;
  document.getElementById('description').textContent = description;
  document.getElementById('icon').setAttribute('src', icon);
}
