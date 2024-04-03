import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.js";

const API_KEY = "DEMO_KEY";
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;


function App() {
  // function is for fetching the photo from the NASA API
  const [photo, setPhoto] = useState();
  useEffect(() => {
    // useEffect is a hook that runs after the first render of the component

    function fetchPhoto() {
      // fetchPhoto function is for fetching the photo from the NASA API
      axios // axios is used to make HTTP requests
        .get(URL) // get request to the NASA API
        .then((response) => {
          // then method is used to handle the response from the API
          setPhoto(response.data);
          console.log(response.data); // log the response data to the console so I can see the data
        })
        .catch((error) => {
          // catch method is used to handle any errors that occur during the request
          console.log(error.message); // log the error message to the console so I can see what went wrong
        });
    }
    //fetchPhoto();
    setPhoto({
      title: "Astronomy Picture of the Day",
      url: "https://apod.nasa.gov/apod/image/2404/Pa30V_NASA_960.jpg",
      explanation:
        "This is a picture of NGC 2174 taken by the Hubble Space Telescope.",
    });
  }, []);

  if (!photo) {
    return "Fetching photo...";
  } // if there is no photo, return a loading message
  
  
  return ( 
    <section>
      <Card
      title={(photo.title)}
      text={(photo.explanation)}
      image={(photo.url)}
      />
    </section>
  )
}

export default App;


