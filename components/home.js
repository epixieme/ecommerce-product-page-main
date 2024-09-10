import { imageSelector } from "./imageSelector.js";

export function home() {
  const shoeImageSelector = imageSelector;

  return `
    <h1>Home</h1>
    <p>Welcome to our shoe store!</p>
    ${shoeImageSelector()}
  `;
}
