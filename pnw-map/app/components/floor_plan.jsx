

function home(){
    document.getElementById("map_image").src = "pnw-map.png";
}

function search(image, building, floor){

    
    console.log(building);

    if(building == "Classroom Office Building" || building == "clo"){
             if(floor == 1) image.src = "CLO_1.png";
        else if(floor == 2) image.src = "CLO_2.png";
        else if(floor == 3) image.src = "CLO_3.png";
        else image.src = "CLO_1.png"; // default
    }
    else if(building == "Potter" || building == "potter"){ // I dont how to simplify this in js and i dont care to know
             if(floor == 1) image.src = "POTT_1.png";
        else if(floor == 2) image.src = "POTT_2.png";
        else if(floor == 3) image.src = "POTT_3.png";
        else image.src = "POTT_1.png"; // default
    }
    else if(building == "Anderson" || building == "anderson"){
             if(floor == 1) image.src = "ANDR_1.png";
        else if(floor == 2) image.src = "ANDR_2.png";
        else if(floor == 3) image.src = "ANDR_3.png";
        else image.src = "ANDR_1.png"; // default
    }
    else if(building == "Gyte" || building == "gyte"){
             if(floor == 0) image.src = "GYTE_0.png";
        else if(floor == 1) image.src = "GYTE_1.png";
        else if(floor == 2) image.src = "GYTE_2.png";
        else image.src = "GYTE_1.png"; // default
    }
    else if(building == "Nils" || building == "nils"){
                if(floor == 1) image.src = "NILS_1.jpg";
            else if(floor == 2) image.src = "NILS_2.jpg";
            else if(floor == 3) image.src = "NILS_3.jpg";
            else image.src = "NILS_1.jpg"; // default
        }
    else if(building == "SULB" || building == "Sulb" || building == "sulb" || building == "Student Union and Library Building" || building == "Library"){
                if(floor == 1) image.src = "SULB_1.png";
            else if(floor == 2) image.src = "SULB_2.png";
            else if(floor == 3) image.src = "SULB_3.png";
            else image.src = "SULB_1.png"; // default
        }
    else {
        home();
    }
} 

export {search, home}