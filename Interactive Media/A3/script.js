const door = document.getElementById("door");
const doorWrapper = document.getElementById("door-wrapper");
const audio = new Audio();
let isOpen = false;

function handleDoor() {
    if(!isOpen) {
        door.classList.add('openDoor');
        door.classList.remove('closeDoor');
        isOpen = true;
    } 
    const randomIndex = Math.floor(Math.random() * 4);
    playRandomImage(randomIndex)
    playRandomMusic(randomIndex)
}
// About playRandom event. Since my audio and picture materials are limited here, the same scene may appear next time at random. 
// This is a problem and I haven't found a code yet on how to avoid a duplicate scenario next time.

function closeDoor() {
    if(isOpen) {
        door.classList.remove('openDoor');
        door.classList.add('closeDoor');
        isOpen = false
    }
    audio.pause();
    audio.currentTime = 0;
}

function playRandomImage(index) { 
    doorWrapper.style.backgroundImage = `url(./assets/img_${index}.jpg)`; 
}

function playRandomMusic(index) {
    audio.setAttribute('src',`./assets/audio_${index}.wav`);
    audio.load();
    audio.play()
}


door.addEventListener("click", handleDoor);
door.addEventListener('mouseover', closeDoor)

// I tried to use "click" when closing the door, but the problem I encountered was that when I clicked on the door again, the pictures inside the door would also switch at the same time.
// In this way, the function of the arbitrary door is lost, that is, a new scene cannot appear until the door is opened again.
// So I changed "click" to a mouseover event, that is, hovering the mouse over the door will automatically close the door.