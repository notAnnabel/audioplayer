console.log('this variable is', songNumber);


// get css elements
let defaultText = document.getElementById("main-container");
let backgroundBox = document.getElementById("box");
const titleColor = document.getElementById("title");
const songColor = document.getElementById("song-title");
const artistColor = document.getElementById("artist-title");
const imageBorder = document.getElementById("animated-ai");

/* CSS HEX 
--french-gray: #C8D0E1ff; pastel bluegrey
--sky-blue: #77BACEff; turquoiseish
--rose-pompadour: #E2849Dff; pinkrose
--rosy-brown: #B5908Dff; rosegold
--space-cadet: #1B2346ff Blueishblack
*/ 
function styleChange() {
    console.log('hey!!! can you hear me?!?!?!?')
    if (songNumber === 1) {
        artistColor.innerHTML = "yoasobi";
        songColor.innerHTML = "IDOL";
    }
    if (songNumber === 2) {
        defaultText.style = 0x1B2346ff;
        backgroundBox.style.color = 0x77BACEff;
        artistColor.style.color = 0xB5908Dff;
        artistColor.innerHTML.color = 0xB5908Dff;
        artistColor.innerHTML = "tnbee";// rosegold

        songColor.style.color = 0xB5908Dff;
        songColor.innerHTML = "A bittersweet cure"; // pink
        console.log('this colour should be changing on song', songNumber);
    }

}