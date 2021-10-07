$(document).ready(function (){
  $('.slider1').slick({
    appendArrows: $('.arrows'),
    prevArrow: '<button class="slider-arrow slider-arrow-prev slick-prev slick-arrow"><img src="/assets/svg/arrow-prev-dark.svg" alt="prevArrow"></button>',
    nextArrow: '<button class="slider-arrow slider-arrow-next slick-next slick-arrow"><img src="/assets/svg/arrow-next-dark.png" alt="nextArrow"></button>',

    dots: true,
    // appendDots:$(this).siblings('.slider-buttons-list')
            appendDots:'.slider-buttons-list'



  });

  $(".slider1").on('afterChange', function(event, slick, currentSlide){
    $(".slider-number-current").text(`0`+(currentSlide+1) );
 });
})
