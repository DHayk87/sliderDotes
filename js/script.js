const capsWrap = document.querySelectorAll(".capsWrap");
const slides = document.querySelector(".slides");
let index = 0;
let slideIndex = index;

const sliderSpin = () => {
    slides.style.transform = `translate(-${100 * slideIndex}%)`;
    if (slideIndex + 1 < capsWrap.length) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
};
const loadingStyle = () => {
    capsWrap.forEach((dot) => {
        dot.classList.remove("active");
    });

    capsWrap[index].classList.add("active");
    if (index + 1 < capsWrap.length) {
        index++;
    } else {
        index = 0;
    }
    sliderSpin();
};
loadingStyle();
setInterval(loadingStyle, 3000);
