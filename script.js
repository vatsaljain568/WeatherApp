console.log("Vatsal Jain")

let apiKey = "86e620162b3606ea3a5da4ae66ff28a8";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let button = document.querySelector(".btn")
let search = document.querySelector(".search_box")
let image = document.querySelector(".photo")


async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".hide").style.display = "none";
    }
    else {
        let data = await response.json(); // now this data kae paas sari information aajyegi

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity_text").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind_speed_text").innerHTML = Math.round(data.wind.speed) + " Km/h";
        document.querySelector(".hide").style.display = "block";
        document.querySelector(".error").style.display = "none";


        if (data.weather[0].main == "Clouds") {
            image.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            image.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            image.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            image.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            image.src = "images/mist.png";
        }
        search.value = "";
    }
}

button.addEventListener("click", () => {
    checkWeather(search.value);
})
