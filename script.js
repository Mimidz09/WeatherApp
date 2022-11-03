const apikey = "df7c20338910b9d51c62838c095ab7ec";
const latLiege = 50.6333;
const lonLiege = 5.56667;
const langage = "fr";
const counter = 40;

// https://api.openweathermap.org/data/2.5/forecast?lat=50.6333&lon=5.56667&appid=df7c20338910b9d51c62838c095ab7ec&lang=fr&cnt=7&units=metric

const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latLiege}&lon=${lonLiege}&appid=${apikey}&lang=${langage}&cnt=${counter}&units=metric`;
console.log(weatherUrl);

function fetchingDatas() {
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((response) =>
      response.list.forEach((call) => {
        const templateElement = document.importNode(
          document.querySelector("template").content,
          true
        );
        templateElement.getElementById("date").textContent = call.dt_txt;
        templateElement.getElementById("maxTemp").textContent = `${Math.round(
          call.main.temp_max
        )} °C`;
        templateElement.getElementById("minTemp").textContent = `${Math.round(
          call.main.temp_min
        )} °C`;
        templateElement.getElementById("windSpeed").textContent = Math.round(
          call.wind.speed
        );
        templateElement.getElementById("description").textContent =
          call.weather[0].description;
        templateElement.getElementById(
          "image"
        ).src = `https://openweathermap.org/img/wn/${call.weather[0].icon}@2x.png`;
        document.querySelector("main").appendChild(templateElement);
      })
    );
}
fetchingDatas();
