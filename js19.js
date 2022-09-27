$(document).ready(function() {
    var getSlide = $(".swiper-wrapper .nuts-active").data("nuts");

    if (getSlide === undefined || getSlide === null){
        var idSlide = 0;
    } else {
        var idSlide = getSlide;
    }

    console.log(getSlide);

    var swiper = new Swiper('.swiper-container', {
        hashNavigation: {
            watchState: true,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },



        initialSlide: idSlide,
    });


});