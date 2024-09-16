import { router } from "./router.js";

// Initialize the router when the page loads
window.addEventListener("DOMContentLoaded", () => {
  router();
});

// Listen for hash changes and call router
window.addEventListener("hashchange", () => {
  router();
});

// handle link clicks for better UX
document.querySelectorAll("a[data-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    window.location.hash = href;
  });
});
