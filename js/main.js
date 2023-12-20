carousel = document.querySelector('.cards')
let degValue = 0
function rotate(idButton) {
    if(idButton.id == 'prev'){
     degValue = degValue - 120;   
    } else {
        degValue = degValue + 120;
    }

    carousel.style.webkitTransform = "rotateY(" + degValue + "deg)";
    carousel.style.mozTransform = "rotateY(" + degValue + "deg)";
    carousel.style.oTransform = "rotateY(" + degValue + "deg)";
    carousel.style.transform = "rotateY(" + degValue + "deg)";
}