import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { GoogleApiWrapper, Map, Polyline } from "google-maps-react";

function App() {
  let [coordinates, setCoordinates] = useState([
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ]);
  useEffect(() => {
    let index = 0;
    let timer = setInterval(() => {
      index = index + 1;
      if (index === 50) {
        clearInterval(timer);
      }
      axios.get(`/getCoordinate?index=${index}`).then((res) => {
          setCoordinates(res.data);
      });
    }, 500);
    
  }, []);

  return (
    <div id="map">
      {
        <Map
          google={window.google}
          center={{ lat: 37.772, lng: -122.214 }}
          style={{ width: "100%", height: "100%", position: "relative" }}
          className={"map"}
          zoom={6}
        >
          <Polyline
            path={coordinates}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
          />
        </Map>
      }
    </div>
  );
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyBhyNo1b2BCRd9l4-VNTc47nKf-I5d8NzI",
})(App);
