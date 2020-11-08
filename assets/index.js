import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const pauseButton = document.getElementById("pauseButton");
const muteButton = document.getElementById("muteButton");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()], });

pauseButton.onclick = () => player.togglePlay(); 
muteButton.onclick = () => player.toggleMute();
