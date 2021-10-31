const allKeys = document.querySelectorAll('.key');
const allAudio = document.querySelectorAll('audio');
function playMusic (e) {
    const audio = document.querySelector(`audio[id="${e.keyCode}"]`);
    const key = document.querySelector(`.key[id="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("play");
}

function removeTransition(e) {
    allKeys.forEach(key => {
        if (key.classList.contains('play')) {
            key.classList.remove('play');
        }
    });
}

allKeys.forEach((key) => key.addEventListener('transitionend', removeTransition));

allKeys.forEach(key => key.addEventListener('click', function() {
    removeTransition();
    const id = this.id;
    this.classList.add('play');
    allAudio.forEach(audio => {
        if (audio.id === id) {
            audio.currentTime = 0;
            audio.play();
        }
    });
}));

window.addEventListener('keydown', playMusic, false);