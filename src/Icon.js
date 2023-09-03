import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon() {
 return (
  <span className="Icon">
   <ReactAnimatedWeather icon="RAIN" color="white" size={62} animate={true} />
  </span>
 );
}
