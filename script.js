let skorCorgi = 0;
let skorPlayer = 0;
let timeOut = '';

let corgi = document.getElementById('corgi');

let splashScreen = document.getElementsByClassName('splash')[0];
let startGame = document.getElementsByClassName('start')[0];
let displaySkorCorgi = document.getElementsByClassName('skor-corgi')[0];
let displaySkorPlayer = document.getElementsByClassName('skor-player')[0];

let reset = document.getElementById('reset');
let batu = document.getElementById('batu');
let gunting = document.getElementById('gunting');
let kertas = document.getElementById('kertas');

if (localStorage.getItem('skorCorgi')) {
  skorCorgi = localStorage.getItem('skorCorgi');
  displaySkorCorgi.innerHTML = skorCorgi;
}

if (localStorage.getItem('skorPlayer')) {
  skorPlayer = localStorage.getItem('skorPlayer');
  displaySkorPlayer.innerHTML = skorPlayer;
}

startGame.addEventListener('click', () => {
  splashScreen.style.top = '-120vh';
  splashScreen.style.transition = '1.75s';
});

batu.addEventListener('click', () => {
  batuguntingkertas(0);
});

gunting.addEventListener('click', () => {
  batuguntingkertas(1);
});

kertas.addEventListener('click', () => {
  batuguntingkertas(2);
});

reset.addEventListener('click', () => {
  if (confirm('Are you sure you want to restart the game?')) {
    skorCorgi = 0;
    skorPlayer = 0;
    displaySkorCorgi.innerHTML = skorCorgi;
    displaySkorPlayer.innerHTML = skorPlayer;
    localStorage.clear();
  }
});

function batuguntingkertas(tangan) {
  let tanganCorgi = Math.floor(Math.random() * 3);

  switch (tanganCorgi) {
    case 0:
      corgi.style.backgroundImage = 'url(ANJING_BATU.png)';
      break;
    case 1:
      corgi.style.backgroundImage = 'url(ANJING_GUNTING.png)';
      break;
    case 2:
      corgi.style.backgroundImage = 'url(ANJING_KERTAS.png)';
      break;
  }

  corgi.classList.remove('goyang');

  switch (tangan) {
    case 0:
      if (tanganCorgi == 0) {
        result('draw');
      } else if (tanganCorgi == 1) {
        result('player');
      } else {
        result('corgi');
      }
      break;
    case 1:
      if (tanganCorgi == 0) {
        result('corgi');
      } else if (tanganCorgi == 1) {
        result('draw');
      } else {
        result('player');
      }
      break;
    default:
      if (tanganCorgi == 0) {
        result('player');
      } else if (tanganCorgi == 1) {
        result('corgi');
      } else {
        result('draw');
      }
      break;
  }
}

function result(who) {
  clearTimeout(timeOut);

  switch (who) {
    case 'corgi':
      skorCorgi++;
      localStorage.setItem('skorCorgi', skorCorgi);
      displaySkorCorgi.innerHTML = skorCorgi;
      console.log('Corgi menang');
      break;

    case 'player':
      skorPlayer++;
      localStorage.setItem('skorPlayer', skorPlayer);
      displaySkorPlayer.innerHTML = skorPlayer;
      console.log('Kamu menang');
      break;

    default:
      console.log('Seri');
      break;
  }

  timeOut = setTimeout(() => {
    corgi.style.removeProperty('background-image');
    corgi.classList.add('goyang');
  }, 3000);
}
const info = document.getElementById('open');
const kotak_container = document.getElementById('kotak_container');
const close_info = document.getElementById('close_info');

info.addEventListener('click', () => {
  kotak_container.classList.add('show');
});

close_info.addEventListener('click', () => {
  kotak_container.classList.remove('show');
});
