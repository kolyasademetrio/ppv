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

    $(".js-slider-feedback").on("init", function (event, slick) {
      const $count = `<div class="slider__current">${parseInt(slick.currentSlide + 1)}</div>/${slick.slideCount}`;
      $(".js-arrow-count").html($count);
    });

    $(".js-slider-feedback").on("afterChange", function (event, slick) {
      const $count = `<div class="slider__current">${parseInt(slick.currentSlide + 1)}</div>/${slick.slideCount}`;
      $(".js-arrow-count").html($count);
    });

    $('.js-slider-feedback').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 600,
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
      prevArrow: $('.js-arrow-prev'),
      nextArrow: $('.js-arrow-next')
    });



    // let $slickElements = $('.js-projects-slider');

    // $slickElements.each((index, elem) => {
    //   let $status = $(elem).next().find('.js-projects-slider-qty');
    //   $(elem).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    //     let i = (currentSlide ? currentSlide : 0) + 1;
    //     $status.html(i + '/<span class="projects__slider-qty_sm">' + slick.slideCount + '</span>');
    //   });

    //   let prev = $(elem).next().find('.js-projects-slider-arrow-prev');
    //   let next = $(elem).next().find('.js-projects-slider-arrow-next');

    //   $(elem).slick({
    //     autoplay: false,
    //     dots: false,
    //     nextArrow: next,
    //     prevArrow: prev,
    //   });

    // });




  })();
}

$(document).ready(() => {
  $('.js-mask').inputmask({
    mask: "99 - 99 - 99",
  });
});