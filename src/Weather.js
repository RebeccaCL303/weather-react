import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
 const key = "82f43b0671f2tb328187o7be4ab620aa";
 let [currentDetails, setCurrentDetails] = useState(null);
 let [city, setCity] = useState("");
 let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;

 function changeCity(event) {
  setCity(event.target.value);
 }

 function getCurrent(event) {
  event.preventDefault();
  axios.get(url).then(displayCurrent);
 }

 function displayCurrent(response) {
  setCurrentDetails(
   <ul className="weather-details">
    <li>{response.data.condition.description}</li>
    <li>Humidity: {response.data.temperature.humidity}%</li>
    <li>Wind: {response.data.wind.speed}km/h</li>
   </ul>
  );
 }

 return (
  <div className="Weather">
   <div className="main-body">
    <form className="text-center" onSubmit={getCurrent}>
     <input type="text" placeholder="Enter City Here" onChange={changeCity} />
     <input type="submit" className="btn btn-outline-light ms-1" />
    </form>
    <h1>
     <div className="row justify-content-evenly">
      <div className="col top-upper-left">
       <div className="city">Tokyo</div>
       <div className="date-time fs-3 fw-normal">Tuesday 3:02</div>
       <section>{currentDetails}</section>
      </div>
      <div className="col top-upper-right">
       <p className="current-emoji">🌧️</p>
       <span className="current-temperature">19</span>
       <span className="unit-convert">
        {" "}
        <a href="/" id="celsiusLink" className="active">
         °C
        </a>{" "}
        |{" "}
        <a href="/" id="fahrenheitLink">
         °F
        </a>
       </span>
      </div>
      <div className="five-day"></div>
     </div>
    </h1>
   </div>
  </div>
 );
}
