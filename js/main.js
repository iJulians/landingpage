carousel = document.querySelector('.cards')
cards = document.querySelectorAll('.card')
let degValue = 0

function rotate(idButton) {
    let wDevice = window.innerWidth
    if (wDevice >= 1024){
        
        if(idButton.id == 'prev'){
            degValue = degValue - 120;   
        } else {
            degValue = degValue + 120;
        }
        
        carousel.style.webkitTransform = "rotateY(" + degValue + "deg)";
        carousel.style.mozTransform = "rotateY(" + degValue + "deg)";
        carousel.style.oTransform = "rotateY(" + degValue + "deg)";
        carousel.style.transform = "rotateY(" + degValue + "deg)";
    } else {

        if(idButton.id == 'prev'){
            degValue -= 100;
        } else {
            degValue += 100;
        }

        if (degValue > 200) {
            degValue = 0;
        } else if(degValue < 0) {
            degValue = 200;
        }


        cards.forEach(card => {
            card.style.transform = 'translateX(-' + degValue + '%)';
        });
        
    }
}
