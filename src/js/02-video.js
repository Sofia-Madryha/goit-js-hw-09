const throttle = require('lodash.throttle')
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');



const player = new Player(iframe);
const setTime = function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
    };
    const timePlay = localStorage.getItem("videoplayer-current-time");


 player.on('timeupdate', throttle(setTime, 1000));
 player.setCurrentTime(timePlay);
