import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NASA.css";

export default function NASA() {

let randomDays = Math.random()*365;
let today = new Date();
let showDate = new Date();
showDate.setDate( today.getDate() - randomDays);

const [image, setImage] = useState({ 
  date: '',
  explanation: '',
  hdurl: '',
  media_type: 'image',
  service_version: '',
  title: '',
  url: ''
});
const [day, setDay] = useState(today.toISOString().substr(0, 10));
console.log('day:', day);
// console.log('random # of days', randomDays);
console.log('today ', showDate.toISOString().substr(0, 10));

useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=GuAFz5FsJdXMVKqEmLqlmcb3Pv9RW19JNcDovlG9&date=${day}`)
    .then(response => {
      console.log("NASA:", response.data);
      setImage(response.data);
      // console.log(image);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
}, [day]);

return (
<>
<nav>
  <h1>🚀NASA's photo of the day</h1>
  <button class='random' onClick={() => setDay(showDate.toISOString().substr(0, 10))}>Random Image</button>
</nav>
<div class='container'>
  
  
  <h2 className="title">{image.title}</h2>
  <div className="img-container">
    <img class='image' src={image.url}/>
    <p class='description'>{image.explanation}</p>
  </div>
  
</div>
</>
);
}