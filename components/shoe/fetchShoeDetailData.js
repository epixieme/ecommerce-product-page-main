import { api } from "../../api/api.js";
import { imageSelector, handleThumbnailClick } from "../imageSelector.js";
export async function fetchShoeDetailData(id) {
  try {
    const data = await api(`https://dummyjson.com/products/${id}`);
    const productCard = document.querySelector(".content-container");
    if (data) {
      sessionStorage.setItem("shoeData", JSON.stringify(data));
    }

    const shoes = JSON.parse(sessionStorage.getItem("shoeData"));
    console.log(shoes);
    productCard.innerHTML = `
    ${imageSelector(shoes)}
    <div class='text-container'>
    <div class='text-position'>
    <h4>${shoes.brand && shoes.brand}</h4>
    <h1>${shoes.title}</h1>
    <p>${shoes.description}.</p>
    </div>
 `;
    handleThumbnailClick(shoes);
  } catch (error) {
    console.error("Error fetching data:", error);
    // const productTitleElement = document.getElementById("product-title");
    // if (productTitleElement) {
    //   productTitleElement.textContent = "Error loading product.";
    // }
  }
}
