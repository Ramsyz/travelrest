const menuBtn = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

const hamburgerMenu = () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
};

const closeMenu = () => {
  navMenu.classList.toggle("active");
};
