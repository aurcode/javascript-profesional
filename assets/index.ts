import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads], });

const playButton: HTMLElement = document.getElementById("playButton");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.getElementById("muteButton");
muteButton.onclick = () => player.toggleMute();


if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js').catch(error => {
      console.log(error.menssage)
   });
}
