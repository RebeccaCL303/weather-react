import React from "react";

import DateTime from "./DateTime.js";
import Icon from "./Icon.js";
import CurrentTempConvert from "./CurrentTempConvert.js";

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
      <Icon code={props.data.icon} />
      <CurrentTempConvert celsius={props.data.temperature} />
     </div>
    </div>
   </h1>
  </div>
 );
}
