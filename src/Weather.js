import React from "react";

import "./Weather.css";

export default function Weather() {
 return (
  <div className="Weather">
   <div className="main-body">
    <form className="text-center" id="city-search">
     <input type="text" id="city-input" placeholder="Enter City Here" />
     <input type="submit" className="btn btn-outline-light ms-1" />
    </form>
    <h1>
     <div className="row justify-content-evenly">
      <div className="col top-upper-left">
       <div className="city">Tokyo</div>
       <div className="date-time fs-3 fw-normal">Tuesday 3:02</div>
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
