const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const hearts = document.getElementById("hearts");
const kissSection = document.getElementById("kissSection");
const music = document.getElementById("bgMusic");

// No button escape
function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

// Yes button → show message + play music
yesBtn.addEventListener("click", () => {
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  message.style.display = "block";
  music.play();
});

// Falling hearts
function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = Math.random() * 20 + 12 + "px";
  h.style.animationDuration = Math.random() * 3 + 4 + "s";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 7000);
}
setInterval(createHeart, 300);

// Show kiss at bottom
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
    kissSection.style.display = "block";
  }
});