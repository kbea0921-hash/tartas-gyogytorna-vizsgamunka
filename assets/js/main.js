const menuButton = document.querySelector(".menu-toggle");
const menu = document.getElementById("fomenu");
const desktop = matchMedia("(min-width: 1024px)");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menu.hidden = !desktop.matches && !open;
}

function syncMenu() {
  menuButton.hidden = desktop.matches;
  setMenu(false);
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

document.querySelector(".site-header").addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuButton.focus();
  }
});

menu.addEventListener("click", (event) => {
  if (!desktop.matches && event.target.closest("a")) {
    setMenu(false);
    menuButton.focus();
  }
});

desktop.addEventListener("change", syncMenu);
syncMenu();
