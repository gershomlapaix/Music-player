const songs = [
    "bensound-anewbeginning.mp3", "bensound-creativeminds.mp3", "bensound-ukulele.mp3"
]

const player = document.getElementById("player")
    // display a list of songs
function createSongList() {
    const list = document.createElement("ol");
    for (let song of songs) {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(song))
        list.appendChild(item)
    }
    return list
}
const songList = document.getElementById('songList')
songList.appendChild(createSongList())


// play song dynamically
songList.onclick = function(e) {
    const source = document.getElementById('source')
    source.src = "test/" + e.target.innerText;

    document.querySelector("#currentSong").innerText = `Now playing: ${e.target.innerText}`
    player.load()
    player.play()
}

// // play
function playAudio() {
    if (player.readyState)
        player.play();
}

// pause
function pauseAudio() {
    player.pause();
}


//volume slider
const slider = document.getElementById("volumeSlider")
slider.oninput = function(e) {
    const volume = e.target.value
    player.volume = volume
}