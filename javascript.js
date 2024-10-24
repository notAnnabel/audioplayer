const audioPlayer = new Audio();

const playPauseButton = document.getElementById("play-button");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

//const artistTitle = document.getElementById("artist-title");
// const artistTitle = document.getElementById("song-title");

const progressSlider = document.getElementById("progress-slider");

const volumeSlider = document.getElementById("volume-slider");

// progress text
const progressText = document.getElementById("progress-text");
const durationText = document.getElementById("duration-text");

const aiAnimated = document.getElementById("animated-ai");

// audioPlayer.src is the first song of the audioplayer by default
audioPlayer.src = "assets/yoasobi-idol.mp3";
audioPlayer.volume = 0.5;

let playing = false;
let updatingProgress = false;

// stores if any of the sliders are changing
let sliderIsChanging = false; 

let progressSliderMoving = false;


/**
 *  starts song as 1
 *  next song = +1 increment
 *  previous song = -1 increment
 *  if song >3 loop back to 1
 *  if song is < 1 loop back to 3
 * 1 - 2 - 3 - 1 - 2 - 3
 *  */
let songNumber = 1;

/**
 * if audio player is ! playing --> dont play sound
 * if audio player is playing --> play sound 
 
 */

function onPlayPauseClick(){
    if(playing) {
        audioPlayer.pause();
        playPauseButton.innerHTML = "play";
        playing = false;
        if (songNumber === 1){
           aiAnimated.src="assets/hoshino-ai-cover.jpeg";
        }
        else if (songNumber === 2){
            aiAnimated.src="assets/sigewinne-genshin-cover.png";
        }
    if (!playing) {
        audioPlayer.play();
        playPauseButton.innerHTML = "pause";
        playing = true;
        if (songNumber === 1){
            aiAnimated.src="assets/hoshino-ai-cover-gif.gif";
         }
         else if (songNumber === 2){
             aiAnimated.src="assets/sigewinne-genshin-cover-gif.gif";
        
                                   }
           }  
}
}

/** */
function onLoadedMetadata(){
    progressSlider.max = audioPlayer.duration;

    durationText.innerHTML = secondsToMMSS(audioPlayer.duration); /*?*/
}

function onTimeUpdate(){
    if (!updatingProgress){
    progressSlider.value = audioPlayer.currentTime;
    }

    progressText.innerHTML = secondsToMMSS(audioPlayer.currentTime);
}


function onEnded(){
    progressSlider.value = 0;
    playPauseButton.innerHTML ="Play";
    playing = false;
}

/* take volumeslider value and update audiplayer.volume */
function onVolumeSliderChange(){
    audioPlayer.volume = volumeSlider.value * 0.01;
}

function onVolumeMouseDown(){
    sliderIsChanging = true;
}

function onProgressMouseDown(){
    updatingProgress = true;
    progressSliderMoving = true;
    sliderIsChanging = true;
}

function onProgressSliderChange(){
    audioPlayer.currentTime = progressSlider.value;
    updatingProgress = false;
    progressSliderMoving = false;
    sliderIsChanging = false;
}

function secondsToMMSS(seconds){
    const integerSeconds = parseInt(seconds);

    let MM = parseInt(integerSeconds/60);
    if(MM < 10) MM = "0" + MM;

    let SS = integerSeconds % 60;
    if (SS < 10) SS = "0" + SS;

    return MM + ":" + SS;
}


function onPreviousClick(){
    songNumber = songNumber-1;

    if (songNumber < 1) {
        songNumber = 2; // remember to add another song (3)
    }
    // console.log('song number check < 1', songNumber)
    if (songNumber === 1) {
        aiAnimated.src="assets/hoshino-ai-cover.jpeg";
        audioPlayer.src = "assets/yoasobi-idol.mp3";
    }
    if (songNumber === 2 ) {
        aiAnimated.src="assets/sigewinne-genshin-cover.png";
        audioPlayer.src = "assets/sigewinne-demo.mp3";
    }

    styleChange();


}


function onNextClick(){
    songNumber = songNumber+1;

    if (songNumber < 1) {
        songNumber = 2; // remember to add another song (3)
    }
    // console.log('song number check < 1', songNumber)
    if (songNumber === 1) {
        aiAnimated.src="assets/hoshino-ai-cover.jpeg";
        audioPlayer.src = "assets/yoasobi-idol.mp3";
    }
    if (songNumber === 2 ) {
        aiAnimated.src="assets/sigewinne-genshin-cover.png";
        audioPlayer.src = "assets/sigewinne-demo.mp3";
    }
    
    styleChange();

}





// link onclick events to relative objects
playPauseButton.onclick = onPlayPauseClick;
audioPlayer.onloadedmetadata = onLoadedMetadata;
audioPlayer.ontimeupdate = onTimeUpdate;
audioPlayer.onended = onEnded;

// volume slider events
volumeSlider.onchange = onVolumeSliderChange;

// progress slider events
progressSlider.onchange = onProgressSliderChange;
progressSlider.onmousedown = onProgressMouseDown;


previousButton.onclick = onPreviousClick;
nextButton.onclick = onNextClick;



/*     |(^w^)/     */




