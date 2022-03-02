const API_KEY ='c37f3551d980d0899f6e95a99a8a56c8';


const searchTemperature =async () =>{
    const cityName = document.getElementById('city-name').value;
    if(cityName){
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
        try{

            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            
        }catch(e){
            alert("Something is wrong.")
        }
    }

}