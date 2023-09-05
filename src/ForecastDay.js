import React from "react";
import Icon from "./Icon.js";

import "./Forecast.css";

export default function ForecastDay(props) {
 function getDay() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let timeData = new Date(props.data.time * 1000);
  let dayNumber = timeData.getDay();
  let day = days[dayNumber];

  return day;
 }

 return (
  <div className="ForecastDay">
   <div className="day">{getDay()}</div>
   <Icon code={props.data.condition.icon} size="80" />
   <div className="high">{Math.round(props.data.temperature.maximum)}°</div>
   <div className="low">{Math.round(props.data.temperature.minimum)}°</div>
  </div>
 );
}
