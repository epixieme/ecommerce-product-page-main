const images = [
  {
    id: 1,
    src: "images/image-product-1-thumbnail.jpg",
    alt: "shoe 1",
    largeSrc: "images/image-product-1.jpg",
  },
  {
    id: 2,
    src: "images/image-product-2-thumbnail.jpg",
    alt: "shoe 2",
    largeSrc: "images/image-product-2.jpg",
  },
  {
    id: 3,
    src: "images/image-product-3-thumbnail.jpg",
    alt: "shoe 3",
    largeSrc: "images/image-product-3.jpg",
  },
  {
    id: 4,
    src: "images/image-product-4-thumbnail.jpg",
    alt: "shoe 4",
    largeSrc: "images/image-product-4.jpg",
  },
];

export function imageSelector() {
  return `
  <div class='shoe-container'>
        <img src="images/image-product-1.jpg" width="100%" height="auto" class='shoe-image'>
        <div class='shoe-thumbnails'>
        ${images
          .map(
            (image) =>
              `<img src="${image.src}" width="80px" height="auto" class='shoe__thumbnail shoe--active' alt="${image.alt}">`
          )
          .join("")}
        </div>
    </div>
    `;
}

export function handleThumbnailClick() {
  const thumbnails = document.querySelectorAll(".shoe__thumbnail");

  thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener("click", () => {
      const shoeImage = document.querySelector(".shoe-image");
      shoeImage.src = images[i].largeSrc;
      // Find the current active thumbnail and remove the active class
      const activeThumbnail = document.querySelector(".shoe-image--active");
      if (activeThumbnail) {
        activeThumbnail.classList.remove("shoe-image--active");
      }
      // Add the active class to the clicked thumbnail
      thumbnail.classList.add("shoe-image--active");
    });
  });
}
