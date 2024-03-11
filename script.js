/*Change to normal after clicked */
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

/*Function to play sound with keyboard*/
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
/*EventListener playSound*/
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

/*Function to play sound with mouse click*/
keys.forEach((key) => key.addEventListener("click", playClick));
function playClick(e) {
  const keyCode = this.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  key.classList.add("playing");
}
