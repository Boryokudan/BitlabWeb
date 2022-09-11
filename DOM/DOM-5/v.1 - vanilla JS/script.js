const images = [
    "https://wallpaperaccess.com/full/1992011.jpg",
    "https://wallpaperaccess.com/full/36017.jpg",
    "https://wallpaperaccess.com/full/2725837.jpg",
    "https://wallpaperaccess.com/full/48318.jpg",
    "https://wallpaperaccess.com/full/3226018.jpg"
];

const body = document.body;
let mainImage = body.querySelector("#main-image");
mainImage.src = images[0];

let imageBarLinks = [...body.querySelectorAll("a")];
let imageBar = [...body.querySelectorAll("a > img")];

for (let i = 0; i < imageBar.length; i++) {
    imageBar[i].src = images[i];
    imageBarLinks[i].addEventListener("click", e => {
        mainImage.src = imageBar[i].src;
    });
}