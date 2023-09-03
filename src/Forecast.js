import React from "react";
import Icon from "./Icon.js";

import "./Forecast.css";

export default function Forecast() {
 return (
  <div className="Forecast">
   <div className="row">
    <div className="col">
     <div className="day">Mon</div>
     <div>
      <Icon code="clear-sky-night" />
      <div className="high">12°</div>
      <div className="low">10°</div>
     </div>
    </div>
   </div>
  </div>
 );
}
