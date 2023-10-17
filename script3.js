/* Navbar */
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const allLinks = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  header.classList.toggle("change");
  menu.classList.toggle("change");
});

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.toggle("change");
    menu.classList.toggle("change");
  });
});

/* End of Navrba */
