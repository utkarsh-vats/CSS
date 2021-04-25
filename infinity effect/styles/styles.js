let frames = document.querySelectorAll(".frame");
let bgStyle1 = document.getElementById("bgStyle1");
let bgStyle2 = document.getElementById("bgStyle2");
let bgStyle3 = document.getElementById("bgStyle3");
let bgStyle4 = document.getElementById("bgStyle4");
let container = document.getElementById("bgContainer");
// console.log(frames);

let tx = 0;
let ty = 40;
let tz = -5;
let factor = 1 / frames.length;
for(let i = 1; i <= frames.length; i++) {
    // frames[i - 1].style.transform = `rotate(${i * 40}deg) translate3d(${i * tx}px, ${i * ty}px, ${i * tz}px)`;
    frames[i - 1].style.transform = `rotate(${i * 40}deg) translateY(${i * ty}px) translateZ(${i * tz}px) scale(${1 - i * factor})`;
    frames[i - 1].style.opacity = `${1 - i * factor}`
}

function spiralBg() {
    container.style.perspective = "50px";
    for(let i = 1; i <= frames.length; i++) {
        frames[i - 1].style.transform = `rotate(${i * 40}deg) translateY(${i * ty}px) translateZ(${i * tz}px) scale(${1 - i * factor})`;
        frames[i - 1].style.opacity = `${1 - i * factor}`;
    }
}

function spiralBg2() {
    container.style.perspective = "none";
    for(let i = 1; i <= frames.length; i++) {
        frames[i - 1].style.transform = `rotate(${i * 25}deg) translateY(${i * ty}px) translateZ(${i * tz}px) scale(${1 - i * factor})`;
        frames[i - 1].style.opacity = `${1 - i * factor}`;
    }
}

function infiniteMirrorBg() {
    container.style.perspective = "50px";
    for(let i = 1; i <= frames.length; i++) {
        frames[i - 1].style.transform = `rotate(${40}deg) translateY(${i * ty}px) translateZ(${i * tz}px) scale(${1 - i * factor})`;
        frames[i - 1].style.opacity = `${1 - i * factor}`;
    }
}

function infiniteMirrorBg2() {
    container.style.perspective = "none";
    for(let i = 1; i <= frames.length; i++) {
        frames[i - 1].style.transform = `rotate(${40}deg) translateY(${i * ty}px) translateZ(${i * tz}px) scale(${1 - i * factor})`;
        frames[i - 1].style.opacity = `${1 - i * factor}`;
    }
}