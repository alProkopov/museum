// function debounce(func, wait, immediate) {
//   let timeout;

//   return function executedFunction() {
//     const context = this;
//     const args = arguments;

//     const later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };

//     const callNow = immediate && !timeout;

//     clearTimeout(timeout);

//     timeout = setTimeout(later, wait);

//     if (callNow) func.apply(context, args);
//   };
// };


// const sliderImages = document.querySelectorAll('.gallery-picture')
// console.log(sliderImages);

// function checkSlide(e) {
//   sliderImages.forEach(sliderImage=>{


//     const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2;
//     // console.log(slideInAt);
//     const imageBottom = sliderImage.offsetTop +sliderImage.height;
//     console.log(imageBottom);
//     const isHalfShown = slideInAt> sliderImage.offsetTop;
//     const isNotScrolledPast = window.scrollY<imageBottom;

//     if (isHalfShown ) {
//       sliderImage.classList.add('active-pic');
//     } else {
//     sliderImage.classList.remove('active-pic');
//     }
//   })
// }

// //listener
// window.addEventListener('scroll', debounce(checkSlide))


// const allimages = document.querySelectorAll('.gallery-picture');

// window.addEventListener('scroll',slidein);
// function slidein() {
//     allimages.forEach(images => {
//         const sliderimages = (window.scrollY + window.innerHeight) - images.height / 2;
//         console.log(sliderimages);
//         const sroldown = sliderimages > images.offsetTop;
//         if (sroldown) {images.classList.add('.active-pic')
//         } else {
//             images.classList.remove('.active-pic');
//         }
//     })
// }


function slide() {
  function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const elementInView =
    (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      const elementBottom = el.getBoundingClientRect().bottom;
      const isTop = (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend)
      const isBottom = (elementBottom >= (window.innerHeight / dividend))


      return isTop&&isBottom ;
    };

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;
      const elementBottom = el.getBoundingClientRect().bottom;
      const isTop = (elementTop < (window.innerHeight || document.documentElement.clientHeight));
      const isBottom = (elementBottom > (window.innerHeight/1.2 ));
      return isTop&&isBottom
    };

    const displayScrollElement = (element) => {
      element.classList.add("active-pic");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("active-pic");
    };

    const handleScrollAnimation = () => {
      const scrollElements = document.querySelectorAll(".gallery-picture");
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.6)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el);
        }
      })
    }

    window.addEventListener("scroll", () => { debounce(handleScrollAnimation())});
  }
  slide()
