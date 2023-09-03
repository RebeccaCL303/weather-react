import React from "react";

export default function TempConvert(props) {
 return (
  <span className="TempConvert">
   <span className="current-temperature">{props.celsius}</span>
   <span className="unit-convert">
    {" "}
    <a href="/" className="active">
     °C
    </a>{" "}
    | <a href="/">°F</a>
   </span>
  </span>
 );
}
