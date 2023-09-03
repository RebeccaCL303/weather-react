import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
 const codeMapping = {
  "clear-sky-day": "CLEAR_DAY",
  "clear-sky-night": "CLEAR_NIGHT",
  "few-clouds-day": "PARTLY_CLOUDY_DAY",
  "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
  "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
  "scattered-clouds-nibroken-clouds-": "PARTLY_CLOUDY_NIGHT",
  "broken-clouds-day": "CLOUDY",
  "broken-clouds-night": "CLOUDY",
  "shower-rain-day": "RAIN",
  "shower-rain-night": "RAIN",
  "rain-day": "RAIN",
  "rain-night": "RAIN",
  "thunderstorm-day": "RAIN",
  "thunderstorm-night": "RAIN",
  "snow-day": "SNOW",
  "snow-night": "SNOW",
  "mist-day": "FOG",
  "mist-night": "FOG",
 };

 return (
  <span className="Icon me-2">
   <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="white"
    size={62}
    animate={true}
   />
  </span>
 );
}
