const images = [
    "https://wallpaperaccess.com/full/1992011.jpg",
    "https://wallpaperaccess.com/full/36017.jpg",
    "https://wallpaperaccess.com/full/2725837.jpg",
    "https://wallpaperaccess.com/full/48318.jpg",
    "https://wallpaperaccess.com/full/3226018.jpg",
    "https://wallpaperaccess.com/full/821402.jpg",
    "https://wallpaperaccess.com/full/40380.jpg",
    "https://wallpaperaccess.com/full/4596563.jpg",
    "https://wallpaperaccess.com/full/4596564.jpg",
    "https://wallpaperaccess.com/full/4596565.jpg"
]

const body = document.body;

let imageIndex = 0;
let image = body.querySelector("#image");
image.src = images[imageIndex];

let prevButton = body.querySelector("#prev");

prevButton.addEventListener("click", e => {
    if (imageIndex == 0) {
        imageIndex = images.length - 1;
        image.src = images[imageIndex];
    }
    else {
        image.src = images[--imageIndex];
    }
});

let nextButton = body.querySelector("#next");

nextButton.addEventListener("click", e => {
    if (imageIndex == images.length - 1) {
        imageIndex = 0;
        image.src = images[imageIndex];
    }
    else {
        image.src = images[++imageIndex];
    }
});