// placed this functions in DOMContentLoaded, since all you need to do to run it is to load the DOM
document.addEventListener('DOMContentLoaded', () => {
  // IIFE code wrapping
  (() => {

  })();
});


// placed this function in window.onload as there are style files needed in calculations
window.onload = () => {
  // IIFE code wrapping
  (() => {

    let $slickElements = $('.js-slider');

    $slickElements.each((index, elem) => {

      const $status = $(elem).closest('.js-slider-wrapper').find(".js-arrow-count");

      $(elem).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

        const $count = `<div class="slider__current">${parseInt(slick.currentSlide + 1)}</div>/${slick.slideCount}`;

        $status.html($count);
      });

      let prev = $(elem).closest('.js-slider-wrapper').find('.js-arrow-prev');
      let next = $(elem).closest('.js-slider-wrapper').find('.js-arrow-next');

      $(elem).slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ],
        nextArrow: next,
        prevArrow: prev,
      });

    });




  })();
}

$(document).ready(() => {
  $('.js-mask').inputmask({
    mask: "99 - 99 - 99",
  });
});