// UNSPLASH API

import { UNSPLASH_API_KEY } from "../../keys.js";
const imageContainer = document.getElementById("image-container");
const loaderEl = document.getElementById("loader");
console.log(imageContainer.children);
let count = 5;
let unSplashAPI = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&count=${count}
`;

let photos = [];

const get10Photos = async () => {
  try {
    loaderEl.hidden = false;
    const res = await fetch(unSplashAPI);
    console.log(res);
    photos = await res.json();
    count = 10;
  } catch (err) {
    console.log(err.message);
  }
};

// GET THE PHOTO FROM SPLASH
await get10Photos();

// SET ELEMENT ATTRIBUTES
function setAttribute(item, attributes) {
  for (const key in attributes) {
    item.setAttribute(key, attributes[key]);
  }
}

// DISPLAY TO HTML
function displayPhotos() {
  console.log(photos);
  photos.forEach((photo) => {
    // anchor <a> tag element
    const item = document.createElement("a");
    setAttribute(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");

    // image <img> tag element
    const img = document.createElement("img");
    setAttribute(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);

    // element append to it parent
    item.appendChild(img);
    imageContainer.appendChild(item);
    loaderEl.hidden = true;
  });
}

displayPhotos();
window.addEventListener("scroll", (e) => {
  if (
    window.scrollY + window.innerHeight >=
    document.body.offsetHeight - 1000
  ) {
    get10Photos();
    displayPhotos();
  }
});
