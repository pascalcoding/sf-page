const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".navbar ul");
const nav = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  navUl.classList.toggle('active');
  hamburger.classList.toggle('active');
})