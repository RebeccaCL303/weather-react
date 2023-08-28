import React, { useState } from "react";

import axios from "axios";

export default function Weather() {
 let [city, setCity] = useState("");
 let [fullReport, setFullReport] = useState("");
 let [valid, setValid] = useState(false);

 function getCurrentWeather(event) {
  event.preventDefault();
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
  axios.get(url).then(setCurrentWeather);
 }

 function changeCity(event) {
  setCity(event.target.value);
 }

 function setCurrentWeather(response) {
  setValid(true);
  setFullReport(
   <ul>
    <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
    <li>Description: {response.data.weather[0].description}</li>
    <li>Humidity: {response.data.main.humidity}%</li>
    <li>Wind: {response.data.wind.speed}km/h</li>
    <li>
     <img
      src={`http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`}
      alt={response.data.weather[0].description}
     />
    </li>
   </ul>
  );
 }
 if (valid) {
  return (
   <div className="Weather">
    <form onSubmit={getCurrentWeather}>
     <input type="search" onChange={changeCity} />
     <input type="submit" value="Search" />
    </form>
    <section>{fullReport}</section>
   </div>
  );
 } else {
  return (
   <div className="Weather">
    <form onSubmit={getCurrentWeather}>
     <input type="search" onChange={changeCity} />
     <input type="submit" value="Search" />
    </form>
   </div>
  );
 }
}
