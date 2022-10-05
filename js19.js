new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    loopedSlides: 7,
    watchSlidesVisibility: true,
    breakpoints: {

        1028: {
            slidesPerView:3,
            spaceBetween: 30,
        },
        600: {
            slidesPerView:1,
            spaceBetween: 5,
        }
    }
});

const d = new Date();
document.getElementById("date").innerHTML = d;

