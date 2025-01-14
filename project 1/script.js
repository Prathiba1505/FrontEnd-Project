const images = ["pic1.webp", "pic2.jpg", "pic3.jpg", "pic4.jpg"];
let currentIndex = 0;

const mainImage = document.getElementById("main-image");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");
const thumbnails = document.querySelectorAll(".thumbnail");

function updateMainImage(index) {
    mainImage.src = images[index];
    mainImage.alt = `Gallery Image ${index + 1}`;
    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle("active", i === index);
    });
}

prevArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back
    updateMainImage(currentIndex);
});

nextArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop forward
    updateMainImage(currentIndex);
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        currentIndex = index;
        updateMainImage(currentIndex);
    });
});

updateMainImage(currentIndex);
