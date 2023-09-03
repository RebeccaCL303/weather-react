import React, { useState } from "react";

export default function TempConvert(props) {
 let [unit, setUnit] = useState("metric");
 let fahrenheitTemp = Math.round((props.celsius * 9) / 5 + 32);

 function convertToFahrenheit(event) {
  event.preventDefault();
  setUnit("imperial");
 }

 function convertToCelsius(event) {
  event.preventDefault();
  setUnit("metric");
 }

 function handleClick(event) {
  event.preventDefault();
 }

 if (unit === "metric") {
  return (
   <span className="TempConvert">
    <span className="current-temperature">{props.celsius}</span>
    <span className="unit-convert">
     {" "}
     <a href="/" className="active" onClick={handleClick}>
      °C
     </a>{" "}
     |{" "}
     <a onClick={convertToFahrenheit} href="/">
      °F
     </a>
    </span>
   </span>
  );
 } else {
  return (
   <span className="TempConvert">
    <span className="current-temperature">{fahrenheitTemp}</span>
    <span className="unit-convert">
     {" "}
     <a href="/" onClick={convertToCelsius}>
      °C
     </a>{" "}
     |{" "}
     <a className="active" href="/" onClick={handleClick}>
      °F
     </a>
    </span>
   </span>
  );
 }
}
