
/*This is an app that will display a map of the PNW Hammond Campus and will be interactable.
The map will be able to display the following:
- Buildings
- Parking Lots
- Roads surrounding the campus
- Points of interest, (bell tower, etc.) 
- Campus boundaries

Features:
- Zoom in and out
- Search for buildings and rooms
- Click on buildings to display information
- Dragability
- Display of current location(roughly)

*/

//TODO: Trying to decide if im gonna draw that map or use a png of the map and overlay the features on top of it.

'use client';
import { getLocation, building } from "./components/location.jsx";
import { NextPage } from "next";
import React, { useRef, useEffect } from 'react';
import "./globals.css";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const image = document.getElementById("source") as HTMLImageElement;

    image.addEventListener("load", () => {
      ctx?.drawImage(image, 0, 0);
    });

  //  document.body.style.overflow = "visible"; //if set to hidden, disables scrolling all together :/, im jsut trying to hide it

  }, []);


  function currLocation() {
    //get current location -- update every 5 seconds (imported from location.js)
    console.log("Getting current location")
    getLocation();

    displayLocation();
    //update every 5 seconds
    setInterval(function() {
      currLocation();
    }, 5000); 
  }

  function displayLocation() {
    console.log(building);

  }

  //currLocation();

  return (
    <>
      <button onClick={currLocation}>Get Current Location</button>
      <canvas id="canvas"></canvas>
      <div >
        <img id="source" src="pnw-map.png" alt="PNW Map" width="85%" height="200%" />
      </div>  
    </>
  );
} 
    

     