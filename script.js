const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const hearts = document.getElementById("hearts");
const kissSection = document.getElementById("kissSection");
const music = document.getElementById("bgMusic");
const flowers = document.getElementById("flowers");

// No button escape
function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

// YES click
yesBtn.addEventListener("click", () => {
  yesBtn.classList.add("yes-smash");
  noBtn.style.display = "none";

  music.play();
  flowerBurst();

  setTimeout(() => {
    message.style.display = "block";
    startRomanticRain();
  }, 800);
});

// Flower burst
function flowerBurst() {
  const emojis = ["🌸","🌹","💐","🌺"];
  for (let i = 0; i < 20; i++) {
    const f = document.createElement("div");
    f.className = "flower";
    f.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
    f.style.left = "50%";
    f.style.top = "50%";
    flowers.appendChild(f);

    setTimeout(() => {
      f.style.transform =
        `translate(${Math.random()*300-150}px, ${Math.random()*-300}px)`;
    }, 10);

    setTimeout(() => f.remove(), 1500);
  }
}

// Romantic emoji rain after yes
function startRomanticRain() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = ["💖","💞","💘","💕","❤️"][Math.floor(Math.random()*5)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = Math.random() * 20 + 18 + "px";
    h.style.animationDuration = Math.random() * 3 + 4 + "s";
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 7000);
  }, 250);
}

// Show kiss at bottom
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
    kissSection.style.display = "block";
  }
});