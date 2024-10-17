const audioPlayer = newAudio(assets/YOASOBI - Idol.mp3);

const playPauseButton = document.getElementById("play-button");

// audioPlayer.src is the first song of the audioplayer by default
audioPlayer.src = "assets/sound/YOASOBI - Idol.mp3";


/**
 * if audio player is playing --> play sound
 * if audio player is ! playing --> dont play sound 
 
 */
function onPlayPauseClick(){
    audioPlayer.play();
    ;
    audioPlayer.pause();
    ;
}

// link onclick events to the onPlayPauseClick button
playPauseButton.onclick = onPlayPauseClick;


/*     \(^w^)|     */


