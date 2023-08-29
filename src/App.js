import React from "react";
import Weather from "./Weather.js";

import "./App.css";

function App() {
 return (
  <div className="App">
   <div className="container">
    <Weather />
    <footer>
     <a
      href="https://github.com/BEX-0/weather-react"
      target="_blank"
      rel="noreferrer"
     >
      <strong>Open Source Code</strong>
     </a>{" "}
     by Rebecca Leibowitz
    </footer>
   </div>
  </div>
 );
}

export default App;
