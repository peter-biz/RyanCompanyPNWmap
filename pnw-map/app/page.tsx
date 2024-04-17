
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

//Trying to decide if im gonna draw that map or use a png of the map and overlay the features on top of it.

'use client';
import { getLocation, building } from "./components/location.js";
import { NextPage } from "next";
import { render } from "react-dom";
import React, { useRef, useEffect } from 'react';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      ctx.fillStyle = "blue";
      ctx.fillRect(0, 0, 150, 75);
    }
  }, []);


  function currLocation() {
    //get current location -- update every 5 seconds (imported from location.js)
    getLocation();
    console.log(building);

    displayLocation();
    //update every 5 seconds
    setInterval(function() {
      currLocation();
    }, 5000); 
  }

  function displayLocation() {
    //display current location on map(as a pin) and on header telling you the building you're in
    
    //document.getElementById("map").innerHTML = "You are currently in " + building;
  }

  //currLocation();

  return (
    <>
      <div id="map"></div>
      <button onClick={currLocation}>Get Current Location</button>
      <canvas ref={canvasRef} />


    </>
  );
} 
    

     