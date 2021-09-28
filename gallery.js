let pictures = document.querySelector('.gallery-picture-inner-container');
pictures.innerHTML= '';




function randomizer(){
  pictures.innerHTML= '';
  let array = [
    '<img src="/assets/img/galery/galery1.jpg" alt="gallery1" class="gallery-picture down">',
    '<img src="/assets/img/galery/galery2.jpg" alt="gallery2" class="gallery-picture">',
    '<img src="/assets/img/galery/galery3.jpg" alt="gallery3" class="gallery-picture">',
    '<img src="/assets/img/galery/galery4.jpg" alt="gallery4" class="gallery-picture">',
    '<img src="/assets/img/galery/galery5.jpg" alt="gallery5" class="gallery-picture">',
    '<img src="/assets/img/galery/galery6.jpg" alt="gallery6" class="gallery-picture">',
    '<img src="/assets/img/galery/galery7.jpg" alt="gallery7" class="gallery-picture">',
    '<img src="/assets/img/galery/galery8.jpg" alt="gallery8" class="gallery-picture">',
    '<img src="/assets/img/galery/galery9.jpg" alt="gallery9" class="gallery-picture">',
    '<img src="/assets/img/galery/galery10.jpg" alt="gallery10" class="gallery-picture">',
    '<img src="/assets/img/galery/galery11.jpg" alt="gallery11" class="gallery-picture down">',
    '<img src="/assets/img/galery/galery12.jpg" alt="gallery12" class="gallery-picture">',
    '<img src="/assets/img/galery/galery13.jpg" alt="gallery13" class="gallery-picture">',
    '<img src="/assets/img/galery/galery14.jpg" alt="gallery14" class="gallery-picture">',
    '<img src="/assets/img/galery/galery15.jpg" alt="gallery15" class="gallery-picture">',
  ]

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  };
  return array;
}
array=shuffle(array)
array.map((item) => pictures.insertAdjacentHTML("beforeend", item));
}
randomizer()
setInterval(randomizer, 6000);
