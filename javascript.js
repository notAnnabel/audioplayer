const audioPlayer = new Audio();

const playPauseButton = document.getElementById("play-button");


const progressSlider = document.getElementById("progress-slider");

// audioPlayer.src is the first song of the audioplayer by default
audioPlayer.src = "assets/yoasobi-idol.mp3";

let playing = false;

/**
 * if audio player is ! playing --> dont play sound
 * if audio player is playing --> play sound 
 
 */

function onPlayPauseClick(){
    if(playing) {
        audioPlayer.pause();
        playPauseButton.HTML = "Play";
        playing = false;
    } else {
        audioPlayer.play();
        playPauseButton.HTML = "Pause";
        playing = true;
    }
}

/** */
function onLoadedMetadata(){
    progressSlider.max = audioPlayer.duration;
}

function onTimeUpdate(){
    progressSlider.value = audioPlayer.currentTime;
}


function onEnded(){
    progressSlider.value = 0;
    playPauseButton.innerHTML ="Play";
    playing = false;
}

// link onclick events to relative objects
playPauseButton.onclick = onPlayPauseClick;
audioPlayer.onloadedmetadata = onLoadedMetadata;
audioPlayer.ontimeupdate = onTimeUpdate;
audioPlayer.onended = onEnded;

/*     |(^w^)/     */



