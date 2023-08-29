import React from "react";

import "./Weather.css";

export default function Weather() {
 return (
  <div classNameNameName="Weather">
   <form id="city-search">
    <input type="text" id="city-input" placeholder="Enter City Here" />
    <input type="submit" className="btn btn-outline-light" />
   </form>
   <h1>
    <div className="container">
     <div className="row">
      <div className="col-6 top-upper-left">
       <div className="city">Tokyo</div>
       <small>
        <div className="date-time"></div>
       </small>
       <ul className="weather-details">
        <li>
         <span className="current-condition">Cloudy</span>
        </li>
        <li>
         Humidity: <span className="humidity">34%</span>
        </li>
        <li>
         Wind: <span className="wind">2.4km/h</span>
        </li>
       </ul>
      </div>
      <div className="col-6 top-upper-right">
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
    </div>
   </h1>
  </div>
 );
}
