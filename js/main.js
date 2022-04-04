(function () {
    'use strict';

    function reviews () {
      $(".slider").slick({
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__btn slider__btn--prev"></button>',
        nextArrow: '<button type="button" class="slick-next slider__btn slider__btn--next"></button>'
      });
    }

    function main() {
      reviews();
    }

    if (document.documentElement.clientWidth < 480) {
      window.addEventListener('scroll', function () {
        return setTimeout(main, 1000);
      }, {
        once: true
      });
    } else {
      main();
    }

}());
//# sourceMappingURL=main.js.map
