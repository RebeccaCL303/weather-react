import React from "react";
import Weather from "./Weather.js";

function App() {
 return (
  <div className="App container">
   <h1>Weather App</h1>
   <Weather />
   <p>
    <a
     href="https://github.com/BEX-0/weather-react"
     target="_blank"
     rel="noreferrer"
    >
     Open Source Code
    </a>{" "}
    by Rebecca Leibowitz
   </p>
  </div>
 );
}

export default App;
