import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(function (sec) {
      console.log(`Current time:`, sec);
      localStorage.setItem('videoplayer-current-time', JSON.stringify(sec));
    });
  }, 1000),
);

const timeToStart = localStorage.getItem('videoplayer-current-time') || 0;
const parseData = JSON.parse(timeToStart);
console.log(parseData);
player.setCurrentTime(parseData);
