const API_KEY ='c37f3551d980d0899f6e95a99a8a56c8';


const searchTemperature =async () =>{
    const inputField = document.getElementById('city-name');
    const cityName = inputField.value;
    inputField.innerText= '';

        
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName?cityName:'london'}&appid=${API_KEY}&units=metric`;
        try{

            const res = await fetch(url);
            const data = await res.json();
            displayWeatherCondition(data);
            
        }catch(e){
            alert("Something is wrong.")
        }
    

}

const displayWeatherCondition = (weatherData) =>{
    if(weatherData.cod < 400){
        setInnerText('city',weatherData.name);
    setInnerText('temperature',Math.round(weatherData.main.temp));
    setInnerText('condition',weatherData.weather[0].main);

    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    
    document.getElementById('weather-icon').setAttribute('src',iconUrl);
    }else{
        alert('No data found')
    }
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
searchTemperature();