let API_KEY = 'a8e71c9932b20c4ceb0aed183e6a83bb';

getWeatherData = (city) => {
	const URL = 'https://api.openweathermap.org/data/2.5/weather';
	const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
	const weatherPromise = fetch(FULL_URL);
	return weatherPromise
		.then((response) => {
			return response.json();
		})
		.catch((error) => {
			console.log(error);
		});
};

searchCity = () => {
	const city = document.getElementById('city-input').value;
	getWeatherData(city)
		.then((response) => {
			showWeatherData([response.name, response.weather[0].main, response.main]);
		})
		.catch((error) => {
			console.log(error);
		});
};

showWeatherData = (weatherData) => {
	document.getElementById('city-name').innerHTML = weatherData[0];
	document.getElementById('weather-type').innerHTML = weatherData[1];
	document.getElementById('temp').innerHTML = weatherData[2].temp;
	document.getElementById('min-temp').innerHTML = weatherData[2].temp_min;
	document.getElementById('max-temp').innerHTML = weatherData[2].temp_max;
};
