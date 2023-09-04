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

  let timeData = new Date(props.data[0].time * 1000);
  let dayNumber = timeData.getDay();
  let day = days[dayNumber];

  return day;
 }

 return (
  <div className="ForecastDay">
   <div className="row">
    <div className="col">
     <div className="day">{getDay()}</div>
     <Icon code={props.data[0].condition.icon} />
     <div className="high">
      {Math.round(props.data[0].temperature.maximum)}°
     </div>
     <div className="low">{Math.round(props.data[0].temperature.minimum)}°</div>
    </div>
   </div>
  </div>
 );
}
