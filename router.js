import { about } from "./components/about.js";
import { home } from "./components/home/home.js";
import { fetchMensData } from "./components/mens/fetchMensData.js";
import { fetchHomeData } from "./components/home/fetchHomeData.js";
import { collections } from "./components/collections.js";
import { contact } from "./components/contact.js";
import { men } from "./components/mens/men.js";
import { women } from "./components/womens/women.js";
import { unknown } from "./components/unknown.js";
import { handleThumbnailClick } from "./components/imageSelector.js";
import { api } from "./api/api.js";

const lookup = {
  "#home": home,
  "#about": about,
  "#collections": collections,
  "#women": women,
  "#contact": contact,
  "#men": men,
};

function activeLink() {
  // Select all elements that should be considered navigation links
  const navLinks = document.querySelectorAll(".nav_link");

  // Remove 'active' class from all navigation links
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Get the current path from the URL hash
  let hash = window.location.hash;
  let path = hash.slice(1); // Extract the path after '#'

  // Find the navigation link that matches the current path
  const navLink = document.querySelector(`#link_${path}`);

  // Add 'active' class to the matching navigation link if it exists
  if (navLink) {
    navLink.classList.add("active");
  }
}

// Call the function on page load or whenever the hash changes
// window.addEventListener("load", activeLink);
// window.addEventListener("hashchange", activeLink);

export function router() {
  let path = window.location.hash;

  const route = lookup[path || "#home"] || unknown;
  const main = document.querySelector("main");

  activeLink();

  if (main) {
    main.innerHTML = route(); // Call the route function and set it as main.innerHTML
  } else {
    console.error("Main element not found!");
  }

  if (path === "#women") {
    handleThumbnailClick();
  }

  fetchMensData();
  fetchHomeData();
  // Fetch data for the home page after rendering
}

// create a function to remove the hash from the URL using hashchange event listener and replace state?
