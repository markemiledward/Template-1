let icon = document.querySelector(".icon");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

icon.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

