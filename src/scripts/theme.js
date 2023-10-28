function enableDarkMode() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
}

function enableLightMode() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
}

function setThemePreference() {
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    enableLightMode();
    return;
  }
  enableDarkMode();
}

document.onload = setThemePreference();