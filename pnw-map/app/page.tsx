
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
import { search, home} from "./components/floor_plan.jsx";
import "./globals.css";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const image = document.getElementById("map_image") as HTMLImageElement;

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

    //display location on webpage as text TODO: 
    const location = document.createElement("p");
    location.innerHTML = "Current Location: " + building;

  }

  function events() {
    console.log("Events wip");
  }



  function pageSearch() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const image = document.getElementById("map_image") as HTMLImageElement;
    const buildingInput = document.getElementById("buildingBar") as HTMLInputElement;
    const floorInput = document.getElementById("floorBar") as HTMLInputElement;

    const building = buildingInput.value;
    const floor = floorInput.value;

    search(image, building, floor);
  }


  //currLocation();

  return (
    <>
    <h2>PNW Campus Map</h2>
    <section id="controls">
      <button onClick={home}>Home</button> <br /> <br />
      <button onClick={events}>Events</button> <br /> <br />
      Building: <input id="buildingBar"  onKeyDown={(e) => { if (e.key === 'Enter') pageSearch(); }} /> Floor: <input id="floorBar" onKeyDown={(e) => { if (e.key === 'Enter') pageSearch(); }} /> 
      <button onClick={pageSearch}>Search</button> <br /> <br />
      <button onClick={currLocation}>Get Current Location</button>
    </section>
    <section id="image_section">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img id="map_image" src="pnw-map.png" alt="PNW Map" />
      </div>  
    </section>
    <canvas id="canvas"></canvas>
  </>
  );
} 
    

     