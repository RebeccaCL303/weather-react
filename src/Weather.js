import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
 let [city, setCity] = useState("");
 let [currentDetails, setCurrentDetails] = useState(null);
 let [done, setDone] = useState(false);

 let key = "82f43b0671f2tb328187o7be4ab620aa";

 function changeCity(event) {
  setCity(event.target.value);
 }

 function getCurrent(event) {
  event.preventDefault();
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(url).then(displayCurrent);
  setDone(true);
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

 if (done) {
  return (
   <div className="Weather">
    <div className="main-body">
     <form onSubmit={getCurrent}>
      <input type="text" placeholder="Enter City Here" onChange={changeCity} />
      <input type="submit" className="btn btn-outline-light ms-1" />
     </form>
     <h1>
      <div className="row justify-content-evenly">
       <div className="col top-upper-left">
        <div className="city">Tokyo</div>
        <div className="fs-3 fw-normal">Tuesday 3:02</div>
        <section>{currentDetails}</section>
       </div>
       <div className="col top-upper-right">
        <p>🌧️</p>
        <span className="current-temperature">19</span>
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
      <input type="text" placeholder="Enter City Here" onChange={changeCity} />
      <input type="submit" className="btn btn-outline-light ms-1" />
     </form>
    </div>
   </div>
  );
 }
}
