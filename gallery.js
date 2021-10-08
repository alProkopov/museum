let pictures = document.querySelector('.gallery-picture-inner-container');
pictures.innerHTML= '';




function randomizer(){
  pictures.innerHTML= '';
  let array = [
    '<img src="/assets/img/galery/galery1.jpg" width="456" height="570" alt="gallery1" class="gallery-picture">',
    '<img src="/assets/img/galery/galery2.jpg" width="456" height="570" alt="gallery2" class="gallery-picture">',
    '<img src="/assets/img/galery/galery3.jpg" width="456" height="570" alt="gallery3" class="gallery-picture">',
    '<img src="/assets/img/galery/galery4.jpg" width="456" height="570" alt="gallery4" class="gallery-picture">',
    '<img src="/assets/img/galery/galery5.jpg" width="456" height="570" alt="gallery5" class="gallery-picture">',
    '<img src="/assets/img/galery/galery6.jpg" width="456" height="570" alt="gallery6" class="gallery-picture">',
    '<img src="/assets/img/galery/galery7.jpg" width="456" height="570" alt="gallery7" class="gallery-picture">',
    '<img src="/assets/img/galery/galery8.jpg" width="456" height="570" alt="gallery8" class="gallery-picture">',
    '<img src="/assets/img/galery/galery9.jpg" width="456" height="570" alt="gallery9" class="gallery-picture">',
    '<img src="/assets/img/galery/galery10.jpg" width="456" height="570" alt="gallery10" class="gallery-picture">',
    '<img src="/assets/img/galery/galery11.jpg" width="456" height="570" alt="gallery11" class="gallery-picture">',
    '<img src="/assets/img/galery/galery12.jpg" width="456" height="570" alt="gallery12" class="gallery-picture">',
    '<img src="/assets/img/galery/galery13.jpg" width="456" height="570" alt="gallery13" class="gallery-picture">',
    '<img src="/assets/img/galery/galery14.jpg" width="456" height="570" alt="gallery14" class="gallery-picture">',
    '<img src="/assets/img/galery/galery15.jpg" width="456" height="570" alt="gallery15" class="gallery-picture">',
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
