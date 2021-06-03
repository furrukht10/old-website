// Navigation Bar

const mobileButton = document.getElementById("openMenu");
nav = document.querySelector("nav");
mobileButtonExit = document.getElementById("exitMenu");

mobileButton.addEventListener("click", () => {
  nav.classList.add("menuButton");
});

mobileButtonExit.addEventListener("click", () => {
  nav.classList.remove("menuButton");
});

// Overlay + Portfolio
