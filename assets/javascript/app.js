// begin slider
let arrImages = [
    "./assets/img/nhahang0.jpg",
    "./assets/img/nhahang1.jpg",
    "./assets/img/nhahang2.jpg",
    "./assets/img/nhahang3.jpg",
];
let index = 0;
function next () {
    const img = document.getElementsByClassName("image")[0];
    index++;
    if(index >= arrImages.length){index = 0;}

    img.src = arrImages[index];
}
function prev () {
    index--;
    if(index < 0) index = arrImages.length - 1;

    document.getElementsByClassName("image")[0].src = arrImages[index];
}
setInterval("next()", 5000);
// end slider

// iphone
let header = document.getElementById('header');

let iphone = document.getElementById('mobie');

let headerHight = header.clientHeight;

iphone.onclick = function() {
    
    let isClose = header.clientHeight === headerHight;
    if(isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}