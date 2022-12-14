const container = document.querySelector(".myContainer");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const audio = document.querySelector("#audio-play");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");

const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");

const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
  let music = player.getMusic();
  displayMusic(music);
});

function displayMusic(music) {
  title.innerText = music.getName();
  singer.innerText = music.singer;
  image.src = "img/" + music.img;
  audio.src = "mp3/" + music.file;
}

play.addEventListener("click", () => {
  const isMusicPlayer = container.classList.contains("playing");
  isMusicPlayer ? pauseMusic() : playMusic();
});

prev.addEventListener("click", () => {
  prevMusic();
});
next.addEventListener("click", () => {
  nextMusic();
});
function pauseMusic() {
  audio.pause();
  container.classList.remove("playing");
  play.querySelector("i").classList = "fa-solid fa-play";
}
function playMusic() {
  audio.play();
  container.classList.add("playing");
  play.querySelector("i").classList = "fa-solid fa-pause";
}
function prevMusic() {
  player.previous();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
}
function nextMusic() {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
}

audio.addEventListener("loadedmetadata", () => {
  duration.textContent = calculateTime(audio.duration);

  progressBar.max = Math.floor(audio.duration);
});

const calculateTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const second = Math.floor(seconds % 60);
  const guncellenen_saniye = second < 10 ? `0${second}` : `${second}`;
  const result = `${minutes}:${guncellenen_saniye}`;
  return result;
};

audio.addEventListener("timeupdate", () => {
  progressBar.value = Math.floor(audio.currentTime);
  currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener("input", () => {
  currentTime.textContent = calculateTime(progressBar.value);
  audio.currentTime = progressBar.value;
});

let sesDurumu = "sesli";

volumeBar.addEventListener("click", (e) => {
  const value = e.target.value;
  audio.volume = value / 100;
  if (value == 0) {
    audio.muted = true;
    sesDurumu = "sessiz";
    volume.classList = "fa-solid fa-volume-xmark";
    volumeBar.value = 0;
  } else {
    audio.muted = false;
    sesDurumu = "sesli";
    volume.classList = "fa-solid fa-volume-high";
    volumeBar.value = value;
  }
});

volume.addEventListener("click", () => {
  if (sesDurumu === "sesli") {
    audio.muted = true;
    sesDurumu = "sessiz";
    volume.classList = "fa-solid fa-volume-xmark";
    volumeBar.value = 0;
  } else {
    audio.muted = false;
    sesDurumu = "sesli";
    volume.classList = "fa-solid fa-volume-high";
    volumeBar.value = 100;
  }
});
