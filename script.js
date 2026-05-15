function createFloatingEmber() {
  const ember = document.createElement("span");

  const symbols = ["✦", "•", "🔥"];
  ember.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  ember.className = "floating-ember";
  ember.style.left = Math.random() * 100 + "vw";
  ember.style.fontSize = 10 + Math.random() * 16 + "px";
  ember.style.opacity = 0.35 + Math.random() * 0.6;
  ember.style.animationDuration = 4 + Math.random() * 4 + "s";

  document.body.appendChild(ember);

  setTimeout(() => {
    ember.remove();
  }, 8000);
}

function createHeartBurst() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");

    heart.textContent = "❤";
    heart.className = "heart-burst";
    heart.style.left = 45 + Math.random() * 10 + "vw";
    heart.style.top = 55 + Math.random() * 10 + "vh";
    heart.style.fontSize = 14 + Math.random() * 18 + "px";
    heart.style.animationDuration = 1.8 + Math.random() * 1.4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3500);
  }
}

function activateButtonEffects() {
  const buttons = document.querySelectorAll(".portal-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");
    });
  });
}

function revealMessage() {
  const items = document.querySelectorAll(".reveal-item");

  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.22}s`;
    item.classList.add("show-reveal");
  });

  if (items.length > 0) {
    setTimeout(createHeartBurst, 1800);
  }
}

setInterval(createFloatingEmber, 450);

document.addEventListener("DOMContentLoaded", () => {
  activateButtonEffects();
  revealMessage();
});