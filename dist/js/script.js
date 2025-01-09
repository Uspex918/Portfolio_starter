const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeEl = document.querySelector(".menu__close"),
  closeList = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});
closeEl.addEventListener("click", () => {
  menu.classList.remove("active");
});
closeList.addEventListener("click", () => {
  menu.classList.remove("active");
});
