const api_key ="b2aeec12f6361b7c5db41d96c514a385";
const API ="https://api.openweathermap.org/data/2.5/weather?q=";

const input = document.querySelector('#input-text');
const inputBtn =document.querySelector('#input-button');
const place = document.querySelector('.location');
const temp = document.querySelector('#temp');
const windSpeed = document.querySelector('#wind-speed');
const humidity =document.querySelector('#humidity');
const img = document.querySelector('#image');
const description =document.querySelector('#description');
async function fetchWeather(query){
            const response= await fetch(`${API}${query}&appid=${api_key}`);
            const data = await response.json();
            console.log(data);
            place.innerHTML =`${data.name}`;
            temp.innerHTML =`${Math.round((data.main.temp)-273.15)} ` ;
            windSpeed.innerHTML =`${data.wind.speed} km/h`;
            humidity.innerHTML =`${data.main.humidity} %`;
            description.innerHTML=`${data.weather[0].description}`
            switch(data.weather[0].main){
                case "Smoke":
                    img.src="./image/Smoke.png";
                    break;
                case "Haze":
                    img.src="./image/clear.png";
                    break;
                case "Clouds":
                    img.src="./image/smoke.png";
                    break;
                case "Rain":
                    img.src="./image/cloudy.png";
                    break;
                case "Mist":
                    img.src="./image/Smoke.png";
                    break;

            }
}
fetchWeather('lucknow');
inputBtn.addEventListener('click',()=>{

    let query =input.value;
    if(query ==="") return alert("Enter your location...")

    fetchWeather(query);
   
})
