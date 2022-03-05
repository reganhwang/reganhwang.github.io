const dateCircle = document.getElementsByClassName("circle");
const infoBoxes = document.getElementsByClassName("descBox");
const learnmore = document.getElementsByClassName("learnmore");
const eventDesc = document.getElementsByClassName("eventDesc");
const hoppersEvent = document.getElementsByClassName("hoppersEvent");
const learnless = document.getElementsByClassName("learnless");



for (let i = 0; i < 7; i++) {

    dateCircle[i].onclick = function thisfunc() {
        dateColor(dateCircle[i]);
        infoBoxes[i].style.display = 'flex';
    }
}


function dateColor(current){
    
    for (let i = 0; i < 7; i++) {
        dateCircle[i].style.backgroundColor = "rgba(99,3,150,0.6)";
        dateCircle[i].children[0].style.color = "white";
        infoBoxes[i].style.display = 'none';
    }
    current.style.backgroundColor = "whitesmoke";
    current.children[0].style.color = "purple";
}

for (let i = 0; i< 8; i++) {
    learnmore[i].onclick = function learnmorefunc(){

            hoppersEvent[i].style.height = "auto";
            eventDesc[i].style.display  = "initial";
            learnmore[i].style.display = "none";
            learnless[i].style.display = "initial";
         

    }
}

for (let i = 0; i<8; i++){
    learnless[i].onclick = function learnlessfunc(){
        hoppersEvent[i].style.height = "10vh";
        eventDesc[i].style.display  = "none";
        learnmore[i].style.display = "initial";
        learnless[i].style.display = "none";
    }
}