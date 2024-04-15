
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
import React from "react";
import { NextPage } from "next";

export default function Home() {

  function initMap() {

    
  }

  function currLocation() {
    //get current location -- update every 5 seconds
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });

    //update every 5 seconds
    setInterval(function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }, 5000);
  }

  function displayLocation() {
    //display current location on map(as a pin) and on header telling you the building you're in
    
  }
  


  

  return (
    <>
    
     <h1>Vercel hosted pnw map</h1>
      <div id="map"></div>
      <button onClick={currLocation}>Get current location</button>
    </>
  );
} 
    

     