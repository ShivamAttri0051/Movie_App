const apiKey = 'https://developers.google.com/maps/documentation/embed/get-api-key';

document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const searchButton = document.getElementById('searchButton');
    const weatherIcon = document.getElementById('weatherIcon');
    const temperature = document.getElementById('temperature');
    const wind = document.getElementById('wind');
    const clouds = document.getElementById('clouds');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    const map = document.getElementById('googleMap');
    
    async function fetchWeatherData(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        
        weatherIcon.innerHTML = `<img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/dinosaur-sky-ally-white.jpg">`;
        map.innerHTML = `<img src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-08-04/Screenshot%202022-08-04%20at%204.38.03%20PM_401112.png">`;
        temperature.textContent = "Temprature: 7 degree";
        wind.textContent = 'Wind: 10 m/s';
        sunrise.textContent = "Sunrise: 12 PM";
        sunset.textContent = "Sunset: 5 PM";
        clouds.textContent = "Cloud: cloudy";
    }
    
    searchButton.addEventListener('click', () => {
        const city = cityInput.value;
        fetchWeatherData(city);
    });
});
