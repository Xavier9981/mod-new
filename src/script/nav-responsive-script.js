//// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .search-btn");
let searchBoxCancel = document.querySelector(".search-box .close-btn");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("search-btn", "close-btn");
  } else {
    searchBox.classList.replace("close-btn", "search-btn");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .hamburger");
let menuCloseBtn = document.querySelector(".nav-links .close-btn");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".toggle-sub-menu-btn");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
