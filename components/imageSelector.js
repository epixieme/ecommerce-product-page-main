export function imageSelector() {
  const images = [
    {
      id: 1,
      src: "images/image-product-1-thumbnail.jpg",
      alt: "shoe 1",
      src: "images/image-product-1.jpg",
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

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      console.log("thumbnail clicked");
      const shoeImage = document.querySelector(".shoe-image");
      shoeImage.src = thumbnail.src;
      thumbnails.forEach((thumbnail) =>
        thumbnail.classList.remove("shoe--active")
      );
      thumbnail.classList.add("shoe--active");
    });
  });
}
