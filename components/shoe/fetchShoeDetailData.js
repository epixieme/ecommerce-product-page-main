import { api } from "../../api/api.js";

export async function fetchShoeDetailData(id) {
  try {
    console.log(id);

    const data = await api(`https://dummyjson.com/products/${id}`);
    console.log(data);
    // Access the first product (you may adjust this based on your API response)
    // Update the DOM with the fetched product title
    const productCard = document.querySelector(".men-product-card");
    productCard.innerHTML = `
        
        <div class="image-container">
        <img src="" width="100%" height="auto">
        </div>
        <p class="product-title">twat</p>
      
 `;
  } catch (error) {
    console.error("Error fetching data:", error);
    // const productTitleElement = document.getElementById("product-title");
    // if (productTitleElement) {
    //   productTitleElement.textContent = "Error loading product.";
    // }
  }
}
