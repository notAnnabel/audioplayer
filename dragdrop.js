const complements = document.getElementById("box");
const dropZone = document.getElementById("main-container")

function onDrop(event) { 
    // bring fancy hat to position
    draggedImage.style.left = event.clientX - offsetX + "px";
    draggedImage.style.top = event.clientY - offsetY + "px";
    console.log("Element has been dropped");

}

function onDragOver(event) {
    event.preventDefault(); // default is no dropping but we want a drop!!! please drop!!!
    console.log("Something is being dragged over me!");
}

// offsetx and offsety store the initial offset from clickimg on dragged image
let offsetX = 0;
let offsetY = 0;

// 
let draggedImage = undefined;

/**
 * stores dragimage as the event targer and compute initial offsetx and offsety
 * @param {Event} event 
 */
function onDragStart(event) {
    // event target points to the html element that start the drag event, ie the currently dragged image
    draggedImage = event.target;
    if (sliderIsChanging) {
        event.preventDefault();
        return;
    }

    // 
    const style = window.getComputedStyle(draggedImage, null);
    // offsetx calculated as clientx horizontal ,mouse pos - style.left (left position of the image)
    // offsety calculated as clientx vertical ,mouse pos - style.top (top position of the image)
    offsetX = event.clientX - parseInt(style.left);
    offsetY = event.clientY - parseInt(style.top);
    console.log ("I'm being dragged");
}


dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;


// look through html elemets stored inside the compliments array

complements.ondragstart = onDragStart;
complements.ondragover = onDragOver;
complements.ondrop = onDrop;

