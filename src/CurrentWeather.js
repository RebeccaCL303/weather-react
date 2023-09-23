import React from "react";

import DateTime from "./DateTime.js";
import Icon from "./Icon.js";
import CurrentTempConvert from "./CurrentTempConvert.js";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
 return (
  <div className="CurrentWeather">
   <div className="row justify-content-evenly">
    <div className="col">
     <div className="city">{props.data.city}</div>
     <DateTime />
     <ul>
      <li className="text-capitalize">{props.data.description}</li>
      <li>Humidity: {props.data.humidity}</li>
      <li>Wind: {props.data.wind}</li>
     </ul>
    </div>
    <div className="col ">
     <Icon code={props.data.icon} size={100} />
     <CurrentTempConvert celsius={props.data.temperature} />
    </div>
   </div>
  </div>
 );
}
