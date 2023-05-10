const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timer = document.querySelector('.timestamp');

let isPlaying = false;

function playPause(){
    if(!isPlaying){
        video.play();
        isPlaying = true;
        playBtn.innerHTML ='<i class="fa fa-pause fa-2x""></i>';
    }else{
        video.pause()
        isPlaying = false;
        playBtn.innerHTML ='<i class="fa fa-play fa-2x"></i>';
    }
}

playBtn.addEventListener('click', playPause);

function stopPlaying(){
    video.pause()
    video.currentTime = 0;
    isPlaying = false;
    playBtn.innerHTML ='<i class="fa fa-play fa-2x"></i>';
}

stopBtn.addEventListener('click', stopPlaying);


 video.addEventListener('timeupdate', ()=>{
     timer.innerText = `${ Math.floor(video.currentTime / 60)}:${video.currentTime.toFixed(0) % 60}`;
     progress.value = (video.currentTime/ video.duration) *100;
 })

  progress.addEventListener('change', ()=>{
    video.currentTime = (progress.value *video.duration) /100;
  })
