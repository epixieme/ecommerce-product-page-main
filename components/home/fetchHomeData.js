import { api } from "../../api/api.js";

export async function fetchHomeData() {
  try {
    // Call the API (assuming `api` is asynchronous)
    const data = await api(
      "https://dummyjson.com/products/category/mens-shoes"
    );
    console.log(data, "women data");
    // Access the first product (you may adjust this based on your API response)

    // Update the DOM with the fetched product title
    const productCard = document.querySelector(".product-cards");
    productCard.innerHTML = `
    ${data?.products
      ?.map(
        (product) =>
          `<div class="product-card animation">
        <div class="image-container">
        <img src=${product.thumbnail} width="100%" height="auto">
        </div>
        <p class="product-title">${product.title}</p>
        </div>`
      )
      .join("")}
    `;
  } catch (error) {
    console.error("Error fetching data:", error);
    // const productTitleElement = document.getElementById("product-title");
    // if (productTitleElement) {
    //   productTitleElement.textContent = "Error loading product.";
    // }
  }
}
