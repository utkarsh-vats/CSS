let loops = document.querySelectorAll(".loop");
let arrows = document.querySelectorAll(".arrow");

let i = 0;
let x = 8;
let y = 360 * x;

window.setInterval(rotateLoop, 4);
function rotateLoop() {
    if(i >= 2880 * x)
        i = 0;
    i++;
    // loops.forEach(loop => loop.style.transform = `rotate(${i++}deg)`);
    if(Math.floor(i / y) == 0) {
        arrows[0].src = "./images/up-arrow.png";
        arrows[0].style.transform = "rotate(90deg) translate(-50%, 50%)";
        arrows[1].src = "./images/up-arrow.png";
        arrows[1].style.transform = "rotate(270deg) translate(50%, -50%)";
    } 
    else if(Math.floor(i / y) == 1) {
        arrows[0].src = "./images/up-arrow.png";
        arrows[0].style.transform = "rotate(180deg) translate(50%, 50%)";
        arrows[1].src = "./images/up-arrow.png";
        arrows[1].style.transform = "rotate(0deg) translate(-50%, -50%)";
    } 
    else if(Math.floor(i / y) == 2) {
        arrows[0].src = "./images/up-arrow.png";
        arrows[0].style.transform = "rotate(270deg) translate(50%, -50%)";
        arrows[1].src = "./images/up-arrow.png";
        arrows[1].style.transform = "rotate(90deg) translate(-50%, 50%)";
    } 
    else if(Math.floor(i / y) == 3) {
        arrows[0].src = "./images/up-arrow.png";
        arrows[0].style.transform = "rotate(0deg) translate(-50%, -50%)";
        arrows[1].src = "./images/up-arrow.png";
        arrows[1].style.transform = "rotate(180deg) translate(50%, 50%)";
    } 
    else if(Math.floor(i / y) == 4) {
        arrows[0].src = "./images/in-out-arrow.png";
        arrows[0].style.transform = "rotate(90deg) translate(-50%, 50%)";
        arrows[1].src = "./images/in-out-arrow.png";
        arrows[1].style.transform = "rotate(0deg) translate(-50%, -50%)"
    } 
    else if(Math.floor(i / y) == 5) {
        arrows[0].src = "./images/in-out-arrow.png";
        arrows[0].style.transform = "rotate(0deg) translate(-50%, -50%)";
        arrows[1].src = "./images/in-out-arrow.png";
        arrows[1].style.transform = "rotate(90deg) translate(-50%, 50%)";
    } 
    else if(Math.floor(i / y) == 6) {
        arrows[0].src = "./images/all-in-arrow.png";
        arrows[0].style.transform = "rotate(90deg) translate(-50%, 50%)";
        arrows[1].src = "./images/all-out-arrow.png";
        arrows[1].style.transform = "rotate(90deg) translate(-50%, 50%)";
    } 
    else if(Math.floor(i / y) == 7) {
        arrows[0].src = "./images/all-out-arrow.png";
        arrows[0].style.transform = "rotate(90deg) translate(-50%, 50%)";
        arrows[1].src = "./images/all-in-arrow.png";
        arrows[1].style.transform = "rotate(90deg) translate(-50%, 50%)";
    }
}

