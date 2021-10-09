
//elements
let player = document.querySelector('.video-player');
let video = document.querySelector('.video-content .slick-track');
let videoPlay = document.querySelector('.video-content .slick-current.slick-active')
let videoPlays = document.querySelectorAll('video.slick-slide')
console.log(videoPlays);


let bigPlayButton = document.querySelector('.video-play');
let togglePlayButton = document.querySelector('.video-play-button.toggle');
let toggleVolume = document.querySelector('.video-speaker-button');

let progressTime = document.querySelector('.video-progress-time');
let progressVolume = document.querySelector('.video-progress-volume');

let progressBar = document.querySelectorAll('.slider-progress');

let fullscreenButton = document.querySelector('.video-fullscreen-button')







//func

function sliderHandler(){
  video = document.querySelector('.video-content .slick-current.slick-active')

}


//видео-пауза

function togglePlay(params) {
  video = document.querySelector('.video-content .slick-current.slick-active')
  let play = video.paused?'play':'pause'
  video[play]();

  if (video.paused) {
    document.querySelector('.video-play-button-play').style.display = 'block'
    document.querySelector('.video-play-button-pause').style.display = 'none'
    bigPlayButton.style.display = 'block'
  } else {
    document.querySelector('.video-play-button-play').style.display = 'none'
    document.querySelector('.video-play-button-pause').style.display = 'block'
    bigPlayButton.style.display = 'none'
  }
  return video
}


//звук
function volumeHandler(params) {
  video[this.name] = this.value
  progressVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${this.value*100}%, #b3b3b3 ${this.value*100}%, #b3b3b3 100%)`

  if (video.volume===0) {
    document.querySelector('.video-speaker').style.display = 'none'
    document.querySelector('.video-mute').style.display = 'block'
  } else {
    document.querySelector('.video-speaker').style.display = 'block'
    document.querySelector('.video-mute').style.display = 'none'
  }
}

function volumeToggle(params) {

  if (video.volume === 0) {
    video.volume = 0.5;
    progressVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 50%, #b3b3b3 50%, #b3b3b3 100%)`
    progressVolume.value = 0.5

    document.querySelector('.video-speaker').style.display = 'block'
    document.querySelector('.video-mute').style.display = 'none'

  } else {
    video.volume = 0;
    document.querySelector('.video-speaker').style.display = 'none'
    document.querySelector('.video-mute').style.display = 'block'
    progressVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${video.volume}%, #b3b3b3 ${video.volume}%, #b3b3b3 100%)`
    progressVolume.value = 0
  }
}



//прогресс-бар
function scrub(e) {
  video = document.querySelector('.video-content .slick-current.slick-active')

  const scrubTime = (e.offsetX / progressTime.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function progressHandler(e) {

  let progressVideo = e.target;
  let percent = (progressVideo.currentTime/progressVideo.duration)*100
  console.log(percent);
  progressTime['value']= percent
  progressTime.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #b3b3b3 ${percent}%, #b3b3b3 100%)`

}


//fullscreen
function fullscreenHandler(e) {
  videoPlay = document.querySelector('.video-content .slick-current.slick-active')

  if (!document.fullscreenElement) { fullscreenON()
  } else {
    fullscreenOff()
  }

  function fullscreenON(params) {
    player.requestFullscreen()
    document.querySelector('.video-controls').style.position = 'absolute'
    document.querySelector('.video-controls').style.bottom = '0'
    document.querySelector('.video-controls').style.width = '100%'
    document.querySelector('.video-controls').style.justifyContent = 'space-evenly'
    document.querySelector('.video-controls').style.zIndex = '999'
    document.querySelector('.video-progress').style.width = '80%'


    document.querySelector('.video-content').style.maxHeight = '100%'

    document.querySelector('.video-fullscreen-off').style.display = 'block'
    document.querySelector('.video-fullscreen-on').style.display = 'none'
  }
  function fullscreenOff(params) {
    document.exitFullscreen()
    document.querySelector('.video-fullscreen-off').style.display = 'none'
    document.querySelector('.video-fullscreen-on').style.display = 'block'
  }
}

// управление видео по кнопкам

function keyPress(e) {
  switch (e.key) {
    case 'л':
    case 'Л':
    case 'k':
    case 'K':
      togglePlay()
      break;


    case 'm':
    case 'M':
    case 'ь':
    case 'Ь':
      volumeToggle()
      break;

    case 'f':
    case 'F':
    case 'а':
    case 'А':
      fullscreenHandler()
      break

    case 'ArrowRight':
    case 'l':
    case 'L':
    case 'д':
    case 'Д':
      video.currentTime += 5;
      break

    case 'ArrowLeft':
    case 'j':
    case 'J':
    case 'о':
    case 'О':
      video.currentTime -= 5;
      break

    case '.':
    case 'ю':
      video.playbackRate += 0.25
      break

    case ',':
    case 'б':
      video.playbackRate -= 0.25
      break

    case 'т':
    case 'Т':
    case 'n':
    case 'N':
      video.playbackRate = 1
      break


    case 'ArrowUp':
      video.volume += 0.1
    progressVolume.value = video.volume

      progressVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progressVolume.value*100}%, #b3b3b3 ${progressVolume.value*100}%, #b3b3b3 100%)`

      break

    case 'ArrowDown':
      video.volume -= 0.1
      progressVolume.value = video.volume

      progressVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progressVolume.value*100}%, #b3b3b3 ${progressVolume.value*100}%, #b3b3b3 100%)`
      break


    default:
      break;
  }

}






//LISTENERS
//play
videoPlays.forEach((item)=> item.addEventListener('click', togglePlay))
bigPlayButton.addEventListener('click', togglePlay)
togglePlayButton.addEventListener('click', togglePlay)




//volume
progressVolume.addEventListener('mousemove',volumeHandler)
progressVolume.addEventListener('change',volumeHandler)

toggleVolume.addEventListener('click', volumeToggle)



//progress
let mousedown = false;
progressTime.addEventListener('click',scrub)
progressTime.addEventListener('mousemove', (e) => mousedown && scrub(e));
progressTime.addEventListener('mousedown', () => mousedown = true);
progressTime.addEventListener('mouseup', () => mousedown = false);
videoPlays.forEach((item)=> item.addEventListener('timeupdate', progressHandler))


//button
document.addEventListener('keypress', (e) => keyPress(e))
document.addEventListener('keydown', (e) => keyPress(e))


fullscreenButton.addEventListener('click', fullscreenHandler )
// progressTime.addEventListener('change',(e) => timeHandler(e))
