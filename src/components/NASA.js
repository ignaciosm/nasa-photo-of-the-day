import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NASA() {

const [image, setImage] = useState({ 
  date: '',
  explanation: '',
  hdurl: '',
  media_type: 'image',
  service_version: '',
  title: '',
  url: ''
});

useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=GuAFz5FsJdXMVKqEmLqlmcb3Pv9RW19JNcDovlG9`)
    .then(response => {
      console.log("NASA:", response.data);
      setImage(response.data);
      // console.log(image);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
}, []);

return (
<div>
  <h1>🚀NASA's photo of the day</h1>
  <h2 className="title">{image.title}</h2>
  <img src={image.url}/>
  <p>{image.explanation}</p>
</div>
);
}