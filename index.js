const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");
const htmlBlock = document.querySelector("html");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  htmlBlock.classList.toggle("disable-scroll");
});

document.querySelectorAll(".nav__link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    htmlBlock.classList.remove("disable-scroll");
  })
);
