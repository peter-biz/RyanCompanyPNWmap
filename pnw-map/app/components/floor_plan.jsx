

function home(){
    document.getElementById("map_image").src = "pnw-map.png";
}

function search(image, building, floor){

    
    console.log(building);

    if(building == "Classroom Office Building" || building == "clo"){
             if(floor == 1) image.src = "CLO_1.png";
        else if(floor == 2) image.src = "CLO_2.png";
        else if(floor == 3) image.src = "CLO_3.png";
        else home();
    }
    else if(building == "Potter" || building == "potter"){ // I dont how to simplify this in js and i dont care to know
             if(floor == 1) image.src = "POTT_1.png";
        else if(floor == 2) image.src = "POTT_2.png";
        else if(floor == 3) image.src = "POTT_3.png";
        else home();
    }
    else if(building == "Anderson" || building == "anderson"){
             if(floor == 1) image.src = "ANDR_1.png";
        else if(floor == 2) image.src = "ANDR_2.png";
        else if(floor == 3) image.src = "ANDR_3.png";
        else home();
    }
    else if(building == "Gyte" || building == "gyte"){
             if(floor == 0) image.src = "GYTE_0.png";
        else if(floor == 1) image.src = "GYTE_1.png";
        else if(floor == 2) image.src = "GYTE_2.png";
        else home();
    }
    else if(building == "Nils" || building == "nils"){
                if(floor == 1) image.src = "NILS_1.jpg";
            else if(floor == 2) image.src = "NILS_2.jpg";
            else if(floor == 3) image.src = "NILS_3.jpg";
            else home();
        }
    else {
        home();
    }
}


const CLO_N = 41.587205;
const CLO_S = 41.586626;
const CLO_E = -87.474978;
const CLO_W = -87.475711;

const POTT_N = 41.586516;
const POTT_S = 41.586085;
const POTT_E = -87.474717;
const POTT_W = -87.475054;

const ANDR_N = 41.588019;
const ANDR_S = 41.587366;
const ANDR_E = -87.474892;
const ANDR_W = -87.475627;

const GYTE_N = 41.585525;
const GYTE_S = 41.585004;
const GYTE_E = -87.474130;
const GYTE_W = -87.475671;

// NILS Building Coordinates
const NILSP1 = {lat: 41.58361944832225, lng: -87.47458185241473}; // Top Left
const NILSP2 = {lat: 41.58361042015047, lng: -87.47343252589033}; // Top Right
const NILSP3 = {lat: 41.58337819513019, lng: -87.47355926026957}; // Bot Right


function showMapByCoordinates(lat, lon){
    const image = document.getElementById("map_image");

    if( (CLO_S <= lat) && (lat <= CLO_N) && 
        (CLO_W <= lon) && (lon <= CLO_E) ){
        image.src = "CLO_1.png";
    }
    else if( (POTT_S <= lat) && (lat <= POTT_N) && 
             (POTT_W <= lon) && (lon <= POTT_E) ){
        image.src = "POTT_1.png";
    }
    else if( (ANDR_S <= lat) && (lat <= ANDR_N) && 
             (ANDR_W <= lon) && (lon <= ANDR_E) ){
        image.src = "ANDR_1.png";
    }
    else if( (GYTE_S <= lat) && (lat <= GYTE_N) && 
             (GYTE_W <= lon) && (lon <= GYTE_E) ){
        image.src = "GYTE_0.png";
    }
    else if( (NILSP1.lat <= lat) && (lat <= NILSP2.lat) && 
             (NILSP1.lng <= lon) && (lon <= NILSP3.lng) ){
        image.src = "NILS_1.jpg";
    }
    else{
        home();
    }
} 

export {search, home}