let pupil1 = document.getElementById("pupil1");
let pupil2 = document.getElementById("pupil2");
let pupilContainer1 = document.getElementById("pupil-container1");
let pupilContainer2 = document.getElementById("pupil-container2");

// let containerOffset = pupilContainer1.style.width / 2;
let containerOffset = 100;
console.log(containerOffset);

document.addEventListener("mousemove", (e) => {
    let x1 = pupilContainer1.offsetLeft + containerOffset;
    let y1 = pupilContainer1.offsetTop + containerOffset;
    let x2 = pupilContainer2.offsetLeft + containerOffset;
    let y2 = pupilContainer2.offsetTop + containerOffset;
    
    let X = e.clientX;
    let Y = e.clientY;

    let theta1 = Math.atan((Y - y1) / (X - x1));
    let theta2 = Math.atan((Y - y2) / (X - x2));

    let r = 60;
    let a = r * Math.cos(theta1) + containerOffset * 0.5;
    let b = r * Math.sin(theta1) + containerOffset * 0.5;
    let c = r * Math.cos(theta2) + containerOffset * 0.5;
    let d = r * Math.sin(theta2) + containerOffset * 0.5;

    console.log(a, b, c, d);

    pupil1.style.left = `${a}px`;
    pupil1.style.top = `${b}px`;
    pupil2.style.left = `${c}px`;
    pupil2.style.top = `${d}px`;
});