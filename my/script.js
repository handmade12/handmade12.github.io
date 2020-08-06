// Switch theme
const switchThemeButtonElement = document.querySelector("#switchThemeButton");
const darkThemeClass = "dark";

function switchTheme() {
  const bodyElement = document.querySelector("body");
  const isDark = bodyElement.classList.contains(darkThemeClass);
  if (isDark) {
    bodyElement.classList.remove(darkThemeClass);
  } else {
    bodyElement.classList.add(darkThemeClass);
  }
}

switchThemeButtonElement.addEventListener("click", switchTheme);

// Mobile menu
const switchMobileMenuButtons = Array.from(
  document.querySelectorAll(".switchMobileMenuButton")
);
const navVisibleClass = "visible";

function toggleMobileMenu() {
  const navElement = document.querySelector(".nav");
  const isVisible = navElement.classList.contains(navVisibleClass);
  if (isVisible) {
    navElement.classList.remove(navVisibleClass);
  } else {
    navElement.classList.add(navVisibleClass);
  }
}

switchMobileMenuButtons.forEach((button) => {
  button.addEventListener("click", toggleMobileMenu);
});
