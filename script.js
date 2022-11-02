console.log("hallo");

const apikey = "df7c20338910b9d51c62838c095ab7ec";
const latLiege = 50.6333;
const lonLiege = 5.56667;
const langage = "fr";
const counter = 7;

// https://api.openweathermap.org/data/2.5/forecast?lat=50.6333&lon=5.56667&appid=df7c20338910b9d51c62838c095ab7ec&lang=fr&cnt=7&units=metric

const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latLiege}&lon=${lonLiege}&appid=${apikey}&lang=${langage}&cnt=${counter}&units=metric`;
console.log(weatherUrl);
