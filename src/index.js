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

    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.classList.remove("show");
  });
});

// nav links toggle active class -----------
const navlinks = document.querySelectorAll(".nav-link");

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navlinks.forEach((l) => l.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
  scrollToTopBtn.addEventListener("click", (e) => {
    navlinks.forEach((l) => l.classList.remove("active"));
    navlinks[0].classList.add("active");
  });
});

// language btn script
let modeBtns = document.querySelectorAll(".mode-btn");

let pagmode;
modeBtns.forEach((Btn) => {
  Btn.addEventListener("click", () => {
    if (!Btn.classList.contains("active")) {
      Btn.classList.add("active");
      pagmode = "dark";
    } else if (Btn.classList.contains("active")) {
      Btn.classList.remove("active");
      pagmode = "light";
    }
    if (pagmode === "dark") {
      document.documentElement.style.setProperty(
        "--brown-level1-clr",
        "#fc9675"
      );
      document.documentElement.style.setProperty(
        "--brown-level2-clr",
        "#a85539"
      );
      document.documentElement.style.setProperty("--dark-clr", "#ececee");
      document.documentElement.style.setProperty("--light-clr", "#2b3a3e");
      document.documentElement.style.setProperty("--bronze-clr", "#9e8656");
      document.documentElement.style.setProperty(
        "--grey-level1-clr",
        "#d7d7d7"
      );
      document.documentElement.style.setProperty(
        "--grey-level2-clr",
        "#939799"
      );
      document.documentElement.style.setProperty(
        "--light-shadow-clr",
        "#00000040"
      );
      document.documentElement.style.setProperty(
        "-heighlight-ligh",
        "#d0d0d0b0"
      );

      document.body.style.backgroundImage = `url(../images/Vector-dark.png)`;
    } else if (pagmode === "light") {
      document.documentElement.style.setProperty(
        "--brown-level1-clr",
        "#c36243"
      );
      document.documentElement.style.setProperty(
        "--brown-level2-clr",
        "#a85539"
      );
      document.documentElement.style.setProperty("--dark-clr", "#2b3a3e");
      document.documentElement.style.setProperty("--light-clr", "#ececee");
      document.documentElement.style.setProperty("--bronze-clr", "#9e8656");
      document.documentElement.style.setProperty(
        "--grey-level1-clr",
        "#bbbcbd"
      );
      document.documentElement.style.setProperty(
        "--grey-level2-clr",
        "#939799"
      );
      document.documentElement.style.setProperty(
        "--light-shadow-clr",
        "#bababa40"
      );
      document.documentElement.style.setProperty(
        "-heighlight-ligh",
        "#d0d0d0b0"
      );

      document.body.style.backgroundImage = `url(../images/Vector-light.png)`;
    }
  });
});
