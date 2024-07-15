const apiKey = "fd497808dd94e60ebcbad02dbc63c000";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#top input");
const searchbtn = document.querySelector("#round");
const weatherIcon = document.querySelector("#images img")


async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json()
    console.log(data);
    document.querySelector("#location").innerHTML = data.name;
    // document.querySelector("#sky").innerHTML = data.clouds.all;
    document.querySelector("#humidity").innerHTML = data.main.humidity + " % humidity";
    document.querySelector("#temp").innerHTML = data.main.temp +  " °C";
    document.querySelector("#wind").innerHTML = data.wind.speed + " Km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./animated/cloudy-day-2.svg"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./animated/day.svg"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./animated/rainy-1.svg"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./animated/day.svg"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./animated/rainy-6.svg"
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "./animated/cloudy-day-1.svg"
    }


    console.log(data.weather[0].main)


}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchBox.value)
})


