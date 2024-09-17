import { api } from "../../api/api.js";

export async function fetchHomeData() {
  try {
    // Call the API (assuming `api` is asynchronous)
    const data = await api(
      "https://dummyjson.com/products/category/mens-shoes"
    );

    const data2 = await api(
      "https://dummyjson.com/products/category/womens-shoes"
    );

    // Update the DOM with the fetched product title
    const productCard = document.querySelector(".product-cards");
    productCard.innerHTML = `
    ${data.products
      .map(
        (product) =>
          `
        <a href="#sneaker_${product.id}" class="product-card-link" data-id=${product.id}>
        <div class="product-card animation">
        <div class="image-container">
        <img src=${product.images[0]} width="100%" height="auto">
        </div>
         <div class="product-text-container">
        <p class="product-title">${product.title}</p>
        <caption class="product-price">£${product.price}</caption>
        </div>
        </div>
        </a>
        `
      )
      .join("")}
       ${data2.products
         .map(
           (product) =>
             `
        <a href="#sneaker_${product.id}" class="product-card-link" data-id=${product.id}>
        <div class="product-card animation">
        <div class="image-container">
        <img src=${product.thumbnail} width="100%" height="auto">
        </div>
        <div class="product-text-container">
        <p class="product-title">${product.title}</p>
        <caption class="product-price">£${product.price}</caption>
        </div>
        </div>
        </a>
        `
         )
         .join("")}
    `;
    // Select all product card links
  } catch (error) {
    console.error("Error fetching data:", error);
    const productTitleElement = document.getElementById("product-title");
    if (productTitleElement) {
      productTitleElement.textContent = "Error loading product.";
    }
  }
}
