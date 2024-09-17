import { api } from "../../api/api.js";
import { imageSelector, handleThumbnailClick } from "../imageSelector.js";
export async function fetchShoeDetailData(id) {
  try {
    const data = await api(`https://dummyjson.com/products/${id}`);
    const productCard = document.querySelector(".content-container");
    productCard.innerHTML = `

    ${imageSelector(data)}
    <div class='text-container'>
    <div class='text-position'>
    <h4>${data.brand && data.brand}</h4>
    <h1>${data.title}</h1>
    <p>${data.description}.</p>
    </div>
 `;
    handleThumbnailClick(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    // const productTitleElement = document.getElementById("product-title");
    // if (productTitleElement) {
    //   productTitleElement.textContent = "Error loading product.";
    // }
  }
}
