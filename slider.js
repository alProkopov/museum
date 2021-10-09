//WELCOME-SLIDER
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

//VIDEO-SLIDER
$('.video-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.video-container-list'



});
$('.video-container-list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.video-content',
  variableWidth: true,

  // centerMode: true,
  focusOnSelect: true,

  appendArrows: $('.video-slider'),
    prevArrow: '<button class="slider-arrow-light slider-arrow-prev "><img src="/assets/svg/arrow-prev-light.svg" alt="prevArrow"></button>',
    nextArrow: '<button class="slider-arrow-light slider-arrow-next"><img src="/assets/svg/arrow-next-light.svg" alt="nextArrow"></button>',


    dots: true,
    // appendDots:$(this).siblings('.slider-buttons-list')
            appendDots:'.video-slider'


});



$('.video-content').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(video);
  $("video").each(function(){
    $(this).get(0).pause();
  });


});
