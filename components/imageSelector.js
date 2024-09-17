export function imageSelector(data) {
  if (!data) {
    return "No data found";
  }

  return `
  <div class='shoe-container'>
  <div class="shoe-image-container">
        <img src=${
          data.images[0]
        } width="100%" height="auto" class='shoe-image'>
        </div>
        <div class='shoe-thumbnails'>
        ${data.images
          .map(
            (image) =>
              `<div class="thumbnail-container"><img src="${image}" width="100%" height="auto" class='shoe__thumbnail shoe--active' alt="${image.alt}"></div>`
          )
          .join("")}
        </div>
    </div>
    `;
}

export function handleThumbnailClick(data) {
  const thumbnails = document.querySelectorAll(".shoe__thumbnail");
  data &&
    thumbnails.forEach((thumbnail, i) => {
      thumbnail.addEventListener("click", () => {
        console.log("thumbnail clicked");
        const shoeImage = document.querySelector(".shoe-image");
        shoeImage.src = data.images[i];

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
