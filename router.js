import { about } from "./components/about.js";
import { home } from "./components/home.js";
import { collections } from "./components/collections.js";
import { contact } from "./components/contact.js";
import { men } from "./components/men.js";
import { women } from "./components/women.js";
import { unknown } from "./components/unknown.js";
import { handleThumbnailClick } from "./components/imageSelector.js";

const lookup = {
  "#home": home,
  "#about": about,
  "#collections": collections,
  "#women": women,
  "#contact": contact,
  "#men": men,
};

export function router() {
  let path = window.location.hash;

  const route = lookup[path || "#home"] || unknown;
  const main = document.querySelector("main");

  if (main) {
    main.innerHTML = route(); // Call the route function and set it as main.innerHTML
  } else {
    console.error("Main element not found!");
  }

  if (path === "#home") {
    handleThumbnailClick();
  }
}

// create a function to remove the hash from the URL using hashchange event listener and replace state?
