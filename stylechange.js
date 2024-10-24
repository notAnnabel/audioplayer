console.log('this variable is', songNumber);


// get css elements
let defaultText = document.getElementById("main-container"); 
let backgroundBox = document.getElementById("box");
let titleColor = document.getElementById("title");
let songColor = document.getElementById("song-title");
let artistColor = document.getElementById("artist-title");
let backgroundBackground = document.getElementById("main-container");

let buttonColorPlay = document.getElementById("play-button");
let buttonColorPrevious = document.getElementById("previous-button");
let buttonColorNext = document.getElementById("next-button");

let volumeSliderColor = document.getElementById("volume-slider");
let progressSliderColor = document.getElementById("progress-slider");

let imageBorder = document.getElementById("animated-ai");


/* CSS HEX 
--french-gray: #C8D0E1ff; pastel bluegrey
--sky-blue: #77BACEff; turquoiseish
--rose-pompadour: #E2849Dff; pinkrose
--rosy-brown: #B5908Dff; rosegold
--space-cadet: #1B2346ff Blueishblack

#FFD0DC: light pink
*/ 
function styleChange() {
    console.log('hey!!! can you hear me?!?!?!?')
    if (songNumber === 1) {
        artistColor.innerHTML = "yoasobi";
        songColor.innerHTML = "IDOL";
    }
    if (songNumber === 2) {
        defaultText.style = "#1B2346ff";
        backgroundBox.style.color = "#77BACEff";
        artistColor.style.color = "#B5908Dff";
        artistColor.innerHTML= "tnbee";// rosegold

        songColor.style.color = "#B5908Dff";
        songColor.innerHTML = "A bittersweet cure"; // pink
        console.log('this colour should be changing on song', songNumber);

        backgroundBox.style.backgroundColor = "#C8D0E1ff";
        titleColor.style.color = "#E2849Dff";

        // image border colours 
        imageBorder.style.borderColor = "#FFD0DC";
        imageBorder.style.boxShadow = "#E2849Dff";
        
        // button colours <3
        buttonColorNext.style.backgroundColor = "#FFD0DC";
        buttonColorPlay.style.backgroundColor = "#FFD0DC";
        buttonColorPrevious.style.backgroundColor = "#FFD0DC";
        
        // button border colours
        buttonColorNext.style.borderColor = "#E2849Dff";
        buttonColorPlay.style.borderColor = "#E2849Dff";
        buttonColorPrevious.style.borderColor = "#E2849Dff";

        // slider background colours
        volumeSliderColor.style.backgroundColor = "#B5908Dff";
        progressSliderColor.style.backgroundColor = "#B5908Dff";

        backgroundBackground.style.backgroundColor = "#E2849Dff";
    }

}