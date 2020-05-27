let images = [
    "https://cdn.pixabay.com/photo/2016/09/01/14/15/doll-1636212_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/08/11/10/32/doll-1585343_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/09/30/13/37/doll-1705329_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/09/01/14/12/doll-1636205_1280.jpg"
];
let number = 0
function next() {
    let slider = document.getElementById("slider");
    number++;
    if(number >= images.length) {
        number = 0;
    }
    slider.src = images[number];
}

function prev() {
    let slider = document.getElementById("slider");
    number--;
    if(number < 0) {
        number = images.length-1;
    }
    slider.src = images[number];
}