import React from "react";
import Weather from "./Weather.js";

function App() {
 return (
  <div className="App container">
   <Weather />
   <p>
    <a
     href="https://github.com/BEX-0/weather-react"
     target="_blank"
     rel="noreferrer"
    >
     <strong>Open Source Code</strong>
    </a>{" "}
    by Rebecca Leibowitz
   </p>
  </div>
 );
}

export default App;
