import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import CurrentWeather from "./CurrentWeather.js";
import Forecast from "./Forecast.js";

export default function Weather(props) {
 let [city, setCity] = useState(props.defaultCity);
 let [weatherData, setWeatherData] = useState({ done: false });
 let key = "82f43b0671f2tb328187o7be4ab620aa";

 function changeCity(event) {
  setCity(event.target.value);
 }

 function getCurrent(event) {
  event.preventDefault();
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(url).then(displayCurrent);
 }

 function displayCurrent(response) {
  setWeatherData({
   done: true,
   coordinates: response.data.coordinates,
   city: `${response.data.city}`,
   description: `${response.data.condition.description}`,
   humidity: `${response.data.temperature.humidity}%`,
   wind: `${response.data.wind.speed}km/h`,
   temperature: Math.round(response.data.temperature.current),
   icon: `${response.data.condition.icon}`,
  });
 }

 if (weatherData.done) {
  return (
   <div className="Weather">
    <main>
     <form name="city-search" onSubmit={getCurrent}>
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
     <CurrentWeather data={weatherData} />
     <Forecast coords={weatherData.coordinates} />
    </main>
   </div>
  );
 } else {
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(url).then(displayCurrent);
 }
}
