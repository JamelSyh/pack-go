// Global variables

const menuToggleIcon = document.querySelector("#menu-toggle-icon");
const navMobile = document.querySelector("#nav");
const headerElement = document.querySelector("#header");
const navItems = document.querySelectorAll(".nav-mobile .list-link");

// Toggle navigation

const toggleMenu = () => {
  navMobile.classList.toggle("active");
  headerElement.classList.toggle("active");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// add the green dot hover animation
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // close navigation when clicking the links
    navMobile.classList.toggle("active");
    headerElement.classList.toggle("active");

    let current = document.querySelector(".current");
    current.className = current.className.replace(" current", "");
    item.className += " current";
  });
});

//Add/remove header border bottom on scroll
const headerScrollEvent = () => {
  if (this.scrollY >= 30) {
    headerElement.classList.add("active-scroll");
  } else {
    headerElement.classList.remove("active-scroll");
  }
};

window.addEventListener("scroll", headerScrollEvent);

// Scroll Reveal animations
const sr = ScrollReveal({
  distance: "25px",
  duration: 2500,
});

sr.reveal(`.image-left, .popular-destinations-data, .plan-trip-data`, {
  origin: "left",
});

sr.reveal(`.image-center`, {
  origin: "bottom",
});

sr.reveal(`.image-right, .showcase-data`, {
  origin: "right",
});

sr.reveal(`.beach-data-wrapper`, {
  origin: "bottom",
  interval: 250,
});

sr.reveal(`.newsletter-container`, {
  origin: "top",
});

sr.reveal(`.footer-container-inner > div, footer-separator, .copyright`, {
  origin: "bottom",
  interval: 250,
});
