import React from "react";

export default function DateTime() {
 let now = new Date();
 let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
 ];
 let day = days[now.getDay()];
 let hour = now.getHours();
 let minute = now.getMinutes();
 if (minute < 10) {
  minute = `0${minute}`;
 }
 return (
  <div className="DateTime fs-3 fw-normal opacity-75">
   {day} {hour}:{minute}
  </div>
 );
}
