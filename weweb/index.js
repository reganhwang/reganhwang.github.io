const dateCircle = document.getElementsByClassName("circle");
const infoBoxes = document.getElementsByClassName("descBox");

for (let i = 0; i < 6; i++) {
    dateCircle[i].onclick = function thisfunc() {
        dateColor(dateCircle[i]);
        infoBoxes[i].style.display = 'flex';
    }
}

function dateColor(current){
    
    for (let i = 0; i < 6; i++) {
        dateCircle[i].style.backgroundColor = "rgba(99,3,150,0.6)";
        dateCircle[i].children[0].style.color = "white";
        infoBoxes[i].style.display = 'none';
    }
    current.style.backgroundColor = "whitesmoke";
    current.children[0].style.color = "purple";
}
