$(document).ready(function(){
    $('.landing-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        swipe: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<button class="prev-slide"></button>',
        nextArrow: '<button class="next-slide"></button>',
        responsive: [
            {
              breakpoint: 575.98,
              settings: {
                arrows: false,
                dots: true
              }
            },
          ]
    });
});