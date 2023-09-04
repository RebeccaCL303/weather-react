import React from "react";
import Icon from "./Icon.js";

export default function ForecastDay(props) {
 function getDay() {
  let days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
  ];

  let timeData = new Date(props.data.time * 1000);
  let dayNumber = timeData.getDay();
  let day = days[dayNumber];

  return day;
 }

 return (
  <div className="ForecastDay">
   <div className="day">{getDay()}</div>
   <Icon code={props.data.condition.icon} />
   <div className="high">{Math.round(props.data.temperature.maximum)}°</div>
   <div className="low">{Math.round(props.data.temperature.minimum)}°</div>
  </div>
 );
}
