export function imageSelector() {
  const images = [
    {
      id: 1,
      src: "images/image-product-1-thumbnail.jpg",
      alt: "shoe 1",
    },
    {
      id: 2,
      src: "images/image-product-2-thumbnail.jpg",
      alt: "shoe 2",
    },
    {
      id: 3,
      src: "images/image-product-3-thumbnail.jpg",
      alt: "shoe 3",
    },
    {
      id: 4,
      src: "images/image-product-4-thumbnail.jpg",
      alt: "shoe 4",
    },
  ];

  return `
        <img src="images/image-product-1.jpg" width="400px" height="auto" class='shoe-image'>
        ${images.map(
          (image) => `
            <img src="${image.src}" width="100px" height="auto" class='shoe-thumbnail' alt="${image.alt}">
        `
        )}
    `;
}