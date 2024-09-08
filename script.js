const menuBurger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");

menuBurger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = navLinks.contains(event.target);
  const isClickInsideBurger = menuBurger.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideBurger) {
    navLinks.classList.remove("open");
  }
});
