import React, { useState } from "react";
import axios from "axios";
import Icon from "./Icon.js";

import "./Forecast.css";

export default function Forecast(props) {
 let [done, setDone] = useState(false);
 let [forecast, setForecast] = useState(null);

 function getForecast(response) {
  setDone(true);
  setForecast(response.data.daily);
 }

 if (done) {
  return (
   <div className="Forecast">
    <div className="row">
     <div className="col">
      <div className="day">{forecast[0].time}</div>
      <div>
       <Icon code={forecast[0].condition.icon} />
       <div className="high">{forecast[0].temperature.maximum}°</div>
       <div className="low">{forecast[0].temperature.minimum}°</div>
      </div>
     </div>
    </div>
   </div>
  );
 } else {
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=82f43b0671f2tb328187o7be4ab620aa&units=metric`;
  axios.get(url).then(getForecast);
 }
}
