"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.getElementById('carousel-slide');
    const imagePaths = [
        'images/Adams-StoryImage_2.jpg',
        'images/Bond-StoryImage_3.jpg',
        'images/Cabot-StoryImg.jpg',
        'images/Cannon-StoryImg_2.jpg',
        'images/Carrigain-StoryImage_2.jpg',
        'images/Carters-StoryImage.jpg',
        'images/CDome-StoryImage.jpg',
        'images/Eisenhower-StoryImage_2.jpg',
        'images/EOsceola-StoryImg_2.jpg',
        'images/Field-StoryImage.jpg',
        'images/Flume-StoryImg_2.jpg',
        'images/Galehead-StoryImg.jpg',
        'images/Garfield-StoryImage.jpg',
        'images/Hale-StoryImg.jpg',
        'images/Hancock-StoryImage_2.jpg',
        'images/Isolation-StoryImg.jpg',
        'images/Jackson-StoryImg.jpg',
        'images/Jefferson-StoryImage_2.jpg',
        'images/Lafayette-StoryImage_2.jpg',
        'images/Liberty-StoryImage_2.jpg',
        'images/Lincoln-StoryImage_2.jpg',
        'images/M-Tripyramids-StoryImg.jpg',
        'images/Madison-StoryImage_2.jpg',
        'images/MidCarter-StoryImage.jpg',
        'images/Monroe-StoryImage_2.jpg',
        'images/Moosilauke-StoryImage_2.jpg',
        'images/Moriah-StoryImg.jpg',
        'images/NKinsman-StoryImg_2.jpg',
        'images/NTwin-StoryImage_2.jpg',
        'images/Osceola-StoryImage_2.jpg',
        'images/OwlsHead-StoryImg.jpg',
        'images/Passaconoway-StoryImg.jpg',
        'images/Pierce-StoryImg.jpg',
        'images/SHancock-StoryImg.jpg',
        'images/SKinsman-StoryImage.jpg',
        'images/STwin-StoryImage_2.jpg',
        'images/Tecumseh-StoryImg.jpg',
        'images/Tom-StoryImg.jpg',
        'images/Tripyramids-StoryImg_2.jpg',
        'images/Washington-StoryImage_2.jpg',
        'images/WBond-StoryImage.jpg',
        'images/Whiteface-StoryImg.jpg',
        'images/Wildcat-StoryImage.jpg',
        'images/WildcatD-StoryImg.jpg',
        'images/Willey-StoryImg_2.jpg',
        'images/Zeacliff-StoryImg_2.jpg',
        // Add more image paths as needed
    ];
    let counter = 0;

    function createImages() {
        imagePaths.forEach(imagePath => {
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            carouselSlide.appendChild(imgElement);
        });
    }

    function slideNext() {
        const size = carouselSlide.clientWidth;
        carouselSlide.style.transition = "transform 1s ease-in-out";
        carouselSlide.style.transform = `translateX(-${size}px)`;

        // Move the first image to the end of the list to simulate looping
        const firstImage = carouselSlide.firstElementChild;
        carouselSlide.appendChild(firstImage);
    }

    let carouselInterval;

    function startCarousel() {
        carouselInterval = setInterval(slideNext, 3000); // Change image every 3 seconds
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    carouselSlide.addEventListener('mouseover', stopCarousel);
    carouselSlide.addEventListener('mouseout', startCarousel);

    createImages();
    startCarousel();
});