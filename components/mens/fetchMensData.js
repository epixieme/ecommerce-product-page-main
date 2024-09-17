import { api } from "../../api/api.js";

export async function fetchMensData() {
  try {
    // Call the API (assuming `api` is asynchronous)
    const data = await api(
      "https://dummyjson.com/products/category/mens-shoes"
    );

    // Access the first product (you may adjust this based on your API response)

    // Update the DOM with the fetched product title
    const productCard = document.querySelector(".men-product-cards");
    productCard.innerHTML = `
    ${data.products
      .map(
        (product) =>
          `
        <a href="#sneaker_${product.id}" class="product-card-link" data-id=${product.id}>
        <div class="men-product-card animation">
        <div class="image-container">
        <img src=${product.thumbnail} width="100%" height="auto">
        </div>
        <p class="product-title">${product.title}</p>
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
