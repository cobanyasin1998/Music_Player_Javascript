const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");

const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");

const audio = document.querySelector("#audio-play");

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
  play.classList = "fa-solid fa-play";
}
function playMusic() {
  audio.play();
  container.classList.add("playing");
  play.classList = "fa-solid fa-pause";
}
function prevMusic() {
  debugger;
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