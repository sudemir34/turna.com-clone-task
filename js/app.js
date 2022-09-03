
// Navigation JS
function nav() {
    const dropdwn = document.getElementsByClassName('navbar__dropdown')[0].classList.toggle('down');
    const arrowGone = document.getElementsByClassName('arrow')[0].classList.toggle('gone');
    if (dropdwn.contains('down')) {
        setTimeout(function () {
            dropdwn.style.overflow = 'visible'
        }, 500)
    } else {
        dropdwn.style.overflow = 'hidden'
    }
}


// Modal Js
let modal = document.querySelector(".modal");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".modal__close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//sliderJs

let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let currentSlide = 1;
let manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});