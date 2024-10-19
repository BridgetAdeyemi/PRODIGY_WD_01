// navbar scroll animation
document.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  const search = document.querySelector(".fa-search");
  const bars = document.querySelector(".fa-bars");
  const userIcon = document.querySelector(".fa-user");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    search.classList.add("scrolled");
    bars.classList.add("scrolled");
    userIcon.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    search.classList.remove("scrolled");
    bars.classList.remove("scrolled");
    userIcon.classList.remove("scrolled");
  }
});

// navbar icons
let searchFrom = document.querySelector(".search-form");
let searchIcon = document.querySelector("#search-btn");
searchIcon.addEventListener("click", function () {
  searchFrom.classList.toggle("visible");
  loginForm.classList.remove("active");
  navbar.classList.remove("visible");
});

let loginForm = document.querySelector(".login-form");
let userIcon = document.querySelector("#user");
userIcon.addEventListener("click", function () {
  searchFrom.classList.remove("visible");
  loginForm.classList.toggle("active");
  navbar.classList.remove("visible");
});

let navbar = document.querySelector(".navbar-links");
let burgarIcon = document.querySelector("#burgar-icon");
burgarIcon.addEventListener("click", function () {
  searchFrom.classList.remove("visible");
  loginForm.classList.remove("active");
  navbar.classList.toggle("visible");
});
