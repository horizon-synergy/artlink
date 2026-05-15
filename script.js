// Theme toggle
const toggle = document.getElementById("themeToggle");
const nav = document.getElementById("siteNav");

const syncNavState = () => {
  nav.classList.toggle("scrolled", window.scrollY > 8);
};

toggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  toggle.setAttribute("aria-pressed", String(isLight));
});

window.addEventListener("scroll", syncNavState, { passive: true });
syncNavState();

// Init Lucide icons
lucide.createIcons();
