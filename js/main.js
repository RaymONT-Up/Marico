(function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__nav");
  const body = document.querySelector(".body");
  const dropdown = document.querySelector(".header__dropdown");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  burger.addEventListener("click", () => {
    body.classList.toggle("active");
  });
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
})();
