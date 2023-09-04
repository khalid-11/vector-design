import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "@fortawesome/fontawesome-free/js/all.min";
// close links -------------
const navToggler = document.querySelector(".navbar-toggler");
const links = document.querySelector(".navbar-nav");
const linksContainer = document.querySelector(".navbar-collapse");
navToggler.addEventListener("click", () => {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight < 10) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// fixed navbar ------------
const navbar = document.querySelector(".navbar");
const scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  let scrollHeight = window.scrollY;
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight >= navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight >= 500) {
    scrollToTopBtn.classList.add("show-link");
  } else if (scrollHeight < 500) {
    scrollToTopBtn.classList.remove("show-link");
  }
});

//  smooth scroll -----------------
const scrollLinks = document.querySelectorAll(".scroll-link");
// const id = scrollLinks.forEach((l) => l.getAttribute("href").slice(1));
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navbarHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navbarHeight;

    if (!fixedNav) {
      position = position - navbarHeight;
    }
    if (navbarHeight > 82) {
      position = position + containerHeight;
    }
    console.log(position);

    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.classList.remove("show");
  });
});
