import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import DateTime from "./DateTime.js";

export default function Weather() {
 let [city, setCity] = useState("");
 let [weatherData, setWeatherData] = useState({ done: false });

 function changeCity(event) {
  setCity(event.target.value);
 }

 function getCurrent(event) {
  event.preventDefault();
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=82f43b0671f2tb328187o7be4ab620aa&units=metric`;
  axios.get(url).then(displayCurrent);
 }

 function displayCurrent(response) {
  console.log(response.data.time);
  setWeatherData({
   done: true,
   city: `${response.data.city}`,
   description: `${response.data.condition.description}`,
   humidity: `${response.data.temperature.humidity}%`,
   wind: `${response.data.wind.speed}km/h`,
   temperature: Math.round(response.data.temperature.current),
   icon: `${response.data.condition.icon_url}`,
  });
 }

 if (weatherData.done) {
  return (
   <div className="Weather">
    <div className="main-body">
     <form onSubmit={getCurrent}>
      <input
       type="search"
       placeholder="Enter City Here"
       onChange={changeCity}
      />
      <input
       type="submit"
       className="btn btn-outline-light ms-1"
       value="Submit"
      />
     </form>
     <h1>
      <div className="row justify-content-evenly">
       <div className="col upper-left">
        <div>{weatherData.city}</div>
        <DateTime />
        <ul>
         <li className="text-capitalize">{weatherData.description}</li>
         <li>Humidity: {weatherData.humidity}</li>
         <li>Wind: {weatherData.wind}</li>
        </ul>
       </div>
       <div className="col upper-right">
        <img src={weatherData.icon} alt="weather-icon" />
        <span className="current-temperature">{weatherData.temperature}</span>
        <span className="unit-convert">
         {" "}
         <a href="/" className="active">
          °C
         </a>{" "}
         | <a href="/">°F</a>
        </span>
       </div>
      </div>
     </h1>
    </div>
   </div>
  );
 } else {
  return (
   <div className="Weather">
    <div className="main-body">
     <form onSubmit={getCurrent}>
      <input
       type="search"
       placeholder="Enter City Here"
       onChange={changeCity}
      />
      <input
       type="submit"
       className="btn btn-outline-light ms-1"
       value="Submit"
      />
     </form>
    </div>
   </div>
  );
 }
}
