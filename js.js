window.addEventListener("keydown", PlayMusic);

function PlayMusic(event){
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const music = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    music.currentTime = 0;
    music.play();
    key.classList.add("play")
}

window.addEventListener("keyup", deletecolor);

function deletecolor(event){
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.remove("play")
}
