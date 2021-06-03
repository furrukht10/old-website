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

// const btnShowPortfolio = document.querySelector(".show-portfolio");

// for (let i = 0; i < btnShowPortfolio.length; i++) {
//   btnShowPortfolio[i].addEventListener("click", function () {
//     document.querySelector(".portfolio-card").classList.toggle("hidden");
//     console.log(
//       document.querySelector(".portfolio-card").classList.contains("hidden")
//     );
//   });
// }
