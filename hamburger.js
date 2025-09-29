const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  // initialize ARIA state
  hamburger.setAttribute("role", "button");
  hamburger.setAttribute("aria-controls", "nav-menu");
  hamburger.setAttribute("aria-expanded", "false");

  const toggleMenu = () => {
    const isActive = hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(isActive));
  };

  hamburger.addEventListener("click", toggleMenu);

  // Close menu when clicking a nav link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
} else {
  // If elements are missing, fail gracefully
  console.warn("Hamburger or nav-menu element not found in DOM.");
}
