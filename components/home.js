import { imageSelector } from "./imageSelector.js";

export function home() {
  const shoeImageSelector = imageSelector;

  return `
  <div class='content-container'>

    ${shoeImageSelector()}
    <div class='text-container'>
    <h1>Fall Limited Edition Sneakers</h1>
    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac</p>
    </div>
    </div>
  `;
}
