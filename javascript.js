const audioPlayer = new Audio();

const playPauseButton = document.getElementById("play-button");

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
    // audioPlayer.play();
    // playPauseButton.innerHTML = "Pause";
}

/** */
function onLoadedMetadata(){
    console.log(audioPlayer.duration);
}

// link onclick events to relative objects
playPauseButton.onclick = onPlayPauseClick;
audioPlayer.onloadedmetadata = onLoadedMetadata;


/*     |(^w^)/     */



