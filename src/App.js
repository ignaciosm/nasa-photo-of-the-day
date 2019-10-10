import React, { useEffect, useState } from "react";
import NASA from './components/NASA';
import axios from "axios";
import "./App.css";

function App() {

  // useEffect(() => {
  //   axios
  //     .get(`https://api.nasa.gov/planetary/apod?api_key=GuAFz5FsJdXMVKqEmLqlmcb3Pv9RW19JNcDovlG9`)
  //     .then(response => {
  //       console.log("NASA:", response);
  //     })
  //     .catch(error => {
  //       console.log("The data was not returned", error);
  //     });
  // }, []);

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <div>
        <NASA />
      </div>
    </div>
  );
}

export default App;
