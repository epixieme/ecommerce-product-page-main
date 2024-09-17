import { about } from "./components/about.js";
import { home } from "./components/home/home.js";
import { fetchMensData } from "./components/mens/fetchMensData.js";
import { fetchHomeData } from "./components/home/fetchHomeData.js";
import { fetchShoeDetailData } from "./components/shoe/fetchShoeDetailData.js";
import { collections } from "./components/collections.js";
import { contact } from "./components/contact.js";
import { men } from "./components/mens/men.js";
import { women } from "./components/womens/women.js";
import { unknown } from "./components/unknown.js";
import { handleThumbnailClick } from "./components/imageSelector.js";
import { shoeDetail } from "./components/shoe/shoeDetail.js";
import { fetchWomensData } from "./components/womens/fetchWomensData.js";
// import { api } from "./api/api.js";

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
window.addEventListener("load", activeLink);
window.addEventListener("hashchange", activeLink);

export function router() {
  const path = window.location.hash;
  let dynamicPath = path.split("_");
  const productIds = document.querySelectorAll(".product-card-link");

  let ids = [...productIds].map((element) => element.getAttribute("data-id"));

  const lookup = {
    "#home": home,
    "#about": about,
    "#collections": collections,
    "#women": women,
    "#contact": contact,
    "#men": men,
    [`#sneaker_${dynamicPath[1]}`]: shoeDetail, // Add route for single sneaker
  };

  const route = lookup[path || "#home"] || unknown;
  const main = document.querySelector("main");

  activeLink();

  if (main) {
    main.innerHTML = route(); // Call the route function and set it as main.innerHTML
  } else {
    console.error("Main element not found!");
  }

  // Fetch data for the current route
  if (path.startsWith("#sneaker_")) {
    const prodId = ids.filter((element) => element == dynamicPath[1])[0];
    fetchShoeDetailData(prodId).then(() => {
      handleThumbnailClick(); // Ensure this is called after the data is fetched and rendered
    });
  } else if (path === "#men") {
    fetchMensData();
  } else if (path === "#women") {
    fetchWomensData();
  } else {
    fetchHomeData();
  }

  // if (path === `#sneaker_${dynamicPath[1]}`) {
  //   handleThumbnailClick();
  // }

  // const prodId = ids.filter((element) => element == dynamicPath[1])[0];

  // fetchMensData(); // Call it after the DOM is updated

  // fetchHomeData();
  // fetchShoeDetailData(prodId);

  // Fetch data for the home page after rendering
}

// create a function to remove the hash from the URL using hashchange event listener and replace state?
