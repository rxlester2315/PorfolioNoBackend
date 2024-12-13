const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(".home__data, .skills , .contact__container");
sr.reveal(".home__img", { delay: 600 });
sr.reveal(".home__scroll", { delay: 800 });
sr.reveal(".work__card, .services__card", { interval: 100 });
sr.reveal(".abount__content", { origin: "right" });
sr.reveal(".about__img", { origin: "left" });

// document.addEventListener("DOMContentLoaded", () => {
//   const CaroS = document.querySelector("Carousel-slider");
//   const CaroSlider = new MicroSlider(CaroS, {
//     indicators: true,
//     indicatorsText: "",
//   });
//   const hammer = new Hammer(CaroS);
//   const CarosTimer = 2000;
//   let CaroAutoplay = setInterval(() => CaroSlider.next(), CarosTimer);

//   CaroS.onmouseenter = function (e) {
//     clearInterval(CaroAutoplay);
//     console.log(e.type + "mouse detected");
//   };

//   CaroS.onmouseleave = function (e) {
//     clearInterval(CaroAutoplay);
//     CaroAutoplay = setInterval(() => CaroSlider.next(), CarosTimer);
//     console.log(e.type + "mouse detected");
//   };

//   CaroS.onclick = function (e) {
//     clearInterval(CaroAutoplay);
//     console.log(e.type + "mouse detected");
//   };

//   hammer.on("tap", function (e) {
//     clearInterval(CaroAutoplay);
//     console.log(e.type + "mouse detected");
//   });

//   let sliderLink = document.querySelectorAll(".slider-item");
//   if (sliderLink && sliderLink !== null && sliderLink.length > 0) {
//     sliderLink.forEach((el) =>
//       el.addEventListener("click", (e) => {
//         e.preventDefault();
//         let href = el.dataset.href;
//         let target = el.dataset.target;
//         if (href !== "#") window.open(href, target);
//       })
//     );
//   }
// });

const container = document.querySelector(".work__container");
const cards = [...container.children];

// Clone the cards to make the carousel seamless
cards.forEach((card) => {
  const clone = card.cloneNode(true);
  container.appendChild(clone);
});

// Ensure no blank space by dynamically adjusting the animation duration
const cardWidth = cards[0].offsetWidth + 20; // Include margin
const totalWidth = cardWidth * container.children.length;

container.style.width = `${totalWidth}px`; // Set total width dynamically
