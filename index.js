let API_KEY="ec9af89e9837a41f8e6598cbd4dbec15";


getweatherData = (city)  => {
    const URL='https://api.openweathermap.org/data/2.5/weather';

    const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise= fetch(Full_Url);
    console.log(city)


    return weatherPromise.then((response)  =>{
        return response.json()
    })
    
}
function searchCity(){
    const city=document.getElementById("city-input").value;

    getweatherData(city)
    .then((response) =>{
        showWeatherData(response)
        console.log(response)
    
    })
    .catch((err)  =>{
        console.log(err)
    })

}

showWeatherData = (weatherData)  =>{
     document.getElementById('city-name').innerText=weatherData.name;
     document.getElementById('weather-type').innerText=weatherData.weather[0].main;
     document.getElementById('temp').innerText=weatherData.main.temp;
     document.getElementById('min-temp').innerText=weatherData.main.temp_min;
     document.getElementById('max-temp').innerText=weatherData.main.temp_max;
}
