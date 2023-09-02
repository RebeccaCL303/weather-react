import React from "react";

import DateTime from "./DateTime.js";

export default function CurrentWeather(props) {
 return (
  <div className="CurrentWeather">
   <h1>
    <div className="row justify-content-evenly">
     <div className="col upper-left">
      <div>{props.data.city}</div>
      <DateTime />
      <ul>
       <li className="text-capitalize">{props.data.description}</li>
       <li>Humidity: {props.data.humidity}</li>
       <li>Wind: {props.data.wind}</li>
      </ul>
     </div>
     <div className="col upper-right">
      <img src={props.data.icon} alt="weather-icon" />
      <span className="current-temperature">{props.data.temperature}</span>
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
 );
}
