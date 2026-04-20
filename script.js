let audio = document.getElementById("audioPlayer");
let progressBar = document.getElementById("progressBar");

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function changeVolume(value) {
    audio.volume = value;
}

function muteAudio() {
    audio.muted = !audio.muted;
}

function skipForward() {
    audio.currentTime += 5;
}

function skipBackward() {
    audio.currentTime -= 5;
}

// Update progress bar as audio plays
audio.addEventListener("timeupdate", function () {
    let progress =
        (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// Allow user to move progress bar manually
progressBar.addEventListener("input", function () {
    let seekTime =
        (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Keyboard controls 
document.addEventListener("keydown", function(event) {
    if(event.key === " ") {
        if(audio.paused)
            audio.play();
        else
            audio.pause();
    }
});