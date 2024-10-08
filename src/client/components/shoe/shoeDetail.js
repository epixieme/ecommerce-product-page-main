import { imageSelector } from "../imageSelector.js";

export function shoeDetail() {
  return `
  <div class='content-container'>

    ${imageSelector()}
    <div class='text-container'>
    <div class='text-position'>
    <h4>SNEAKER COMPANY</h4>
    <h1>Fall Limited Edition Sneakers</h1>
    <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
    </div>
    </div>
    </div>
  `;
}
