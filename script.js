window.onscroll = function () {
  myFunction();
};

// STICKY NAVBAR
const header = document.getElementById("myHeader");

const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.opacity = 0.7;
  } else {
    header.classList.remove("sticky");
    header.style.opacity = 1;
  }
}

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
