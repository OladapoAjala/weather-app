AOS.init();

const app = document.querySelector(".weather-app");
const temp = document.querySelector(".degree");
const dateOutput = document.querySelector(".details");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".state");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("locationInput");
const btn = document.querySelector(".search-box");
const cityLondon = document.querySelector(".London");
const cityManchester = document.querySelector(".Manchester");
const cityNew_York = document.querySelector(".New_york");
const cityCalifornia = document.querySelector(".California");
const cities = document.querySelectorAll(".city");
const search = document.querySelector(".flex-item1");
const img = document.querySelector("img");

const fetch = async (cityName) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a6f29206c2cb7d9e262f5a26cbfe7e9e&units=metric`;
  try {
    const response = await axios.get(URL);

    nameOutput.innerText = response.data.name;
    temp.innerText = " " + Math.floor(response.data.main.temp) + "°";
    cloudOutput.innerText = " " + response.data.clouds.all;
    humidityOutput.innerText = " " + response.data.main.humidity;
    windOutput.innerText = " " + response.data.wind.speed;
    conditionOutput.innerText = response.data.weather[0].main;

    console.log(response);

    if (response.data.weather[0].main === "Rain") {
      img.src = "/assets/icons/day/263.png";
      document.body.style.backgroundImage = "url('/assets/img/rainy2.jpg')";
    } else if (response.data.weather[0].main === "Snowy") {
      img.src = "/assets/icons/day/338.png";
      document.body.style.backgroundImage = "url('/assets/img/snowy.jpg')";
    } else if (response.data.weather[0].main === "Clouds") {
      img.src = "/assets/icons/day/122.png";
      document.body.style.backgroundImage =
        "url('/assets/img/1048232144.jpg.0.jpg')";
    } else {
      img.src = "/assets/icons/day/113.png";
      document.body.style.backgroundImage =
        "url('/assets/img/clearweather.jpg')";
    }

    console.log(response.data.weather[0].main);
  } catch (err) {
    console.log(err);
  }
};
fetch("lagos");

const city = (event) => {
  const response = fetch(event.target.textContent);

  // temp.innerText = response.temperature;
};
cityLondon.addEventListener("click", city);
cityManchester.addEventListener("click", city);
cityManchester.addEventListener("click", city);
cityNew_York.addEventListener("click", city);

const handleFormSubmit = (event) => {
  const response = fetch(search.value);
  event.preventDefault();
};
console.log(nameOutput.innerText);
const checker = (event) => {
  if (search.value === nameOutput.textContent) {
    console.log("equal");
  } else {
    console.log(" not equal");
  }
  event.preventDefault();
};

form.addEventListener("submit", checker);
