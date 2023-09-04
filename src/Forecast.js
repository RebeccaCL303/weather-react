import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";

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
     {forecast.map(function (day, index) {
      if (index < 5) {
       return (
        <div className="col" key={index}>
         <ForecastDay data={day} />
        </div>
       );
      }
     })}
    </div>
   </div>
  );
 } else {
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=82f43b0671f2tb328187o7be4ab620aa&units=metric`;
  axios.get(url).then(getForecast);
 }
}
