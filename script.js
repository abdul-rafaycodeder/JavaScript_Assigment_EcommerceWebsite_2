var imageShow = false

function shopInage() {
    var showImage = "<img src='./images/hero-section-2-image.png' alt=''>"
    var buttonText = "Click to hide image"
    var hide = "Click to hide image"


    if (imageShow === false) {
        document.getElementById("div").innerHTML = showImage
        document.getElementById("showImage").innerText = buttonText
        imageShow = true
    } else {
        document.getElementById("div").innerHTML = ""
        document.getElementById("showImage").innerText = hide
        imageShow = false
    }
}



const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// <!-- ----------------------carousel-------------------- -->


const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dots = Array.from(document.querySelectorAll('.dot'));

let currentIndex = 0;

// Position slides side by side
const setSlidePosition = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });
};
setSlidePosition();
window.addEventListener('resize', setSlidePosition);

// Move to slide
const moveToSlide = (index) => {
    track.style.transform = `translateX(-${slides[index].style.left})`;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    currentIndex = index;
};

// Button clicks
nextBtn.addEventListener('click', () => moveToSlide((currentIndex + 1) % slides.length));
prevBtn.addEventListener('click', () => moveToSlide((currentIndex - 1 + slides.length) % slides.length));

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => moveToSlide(index));
});

// Auto Slide
let autoSlide = setInterval(() => {
    moveToSlide((currentIndex + 1) % slides.length);
}, 5000);

// Pause auto-slide on hover
const carousel = document.querySelector('.carousel-container');
carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
carousel.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => moveToSlide((currentIndex + 1) % slides.length), 5000);
});

// Mobile Swipe
let startX = 0;
let endX = 0;

carousel.addEventListener('touchstart', e => startX = e.touches[0].clientX);
carousel.addEventListener('touchmove', e => endX = e.touches[0].clientX);
carousel.addEventListener('touchend', () => {
    if (startX - endX > 50) moveToSlide((currentIndex + 1) % slides.length);
    if (endX - startX > 50) moveToSlide((currentIndex - 1 + slides.length) % slides.length);
});

// <!---------------------- cards-section------------------ -->


var alertchalao = document.getElementById("alert")

function alertFunction() {

    alert("Item added to the cart");

}


// image change cards

// card 1

function changeImage1() {
    var image = document.getElementById("iamgeChange1")

    image.src = "./images/card 3.png"
}

function resendImage1() {
    var image = document.getElementById("iamgeChange1")

    image.src = "./images/card 2.png"
}
// card 2

function changeImage2() {
    var image = document.getElementById("changeImage2")

    image.src = "./images/card 1.png"
}

function resendImage2() {
    var image = document.getElementById("changeImage2")

    image.src = "./images/card 4.png"
}
// card 3

function changeImage3() {
    var image = document.getElementById("changeImage3")

    image.src = "./images/card 1.png"
}

function resendImage3() {
    var image = document.getElementById("changeImage3")

    image.src = "./images/card 2.png"
}
// card 4

function changeImage4() {
    var image = document.getElementById("changeImage")

    image.src = "./images/card 1.png"
}

function resendImage4() {
    var image = document.getElementById("changeImage")

    image.src = "./images/card 4.png"
}

// video cards


document.querySelectorAll('.media-card').forEach(card => {
    const video = card.querySelector('video');

    card.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play();
    });

    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});


//    /* <!-- card T sheits section --> */


function changeImage2() {
    var image = document.getElementById("iamgeChange2")


    image.src = "./images/t2.png"
}


function resendImage2() {
    var image = document.getElementById("iamgeChange2")


    image.src = "./images/T1.png"
}

// card 2


function changeImage3() {
    var image = document.getElementById("iamgeChange3")


    image.src = "./images/t3.png"
}


function resendImage3() {
    var image = document.getElementById("iamgeChange3")


    image.src = "./images/t2.png"
}
// card 3


function changeImage4() {
    var image = document.getElementById("iamgeChange4")


    image.src = "./images/t4.png"
}


function resendImage4() {
    var image = document.getElementById("iamgeChange4")


    image.src = "./images/t3.png"
}
// card 4


function changeImage5() {
    var image = document.getElementById("iamgeChange5")


    image.src = "./images/t2.png"
}


function resendImage5() {
    var image = document.getElementById("iamgeChange5")


    image.src = "./images/t4.png"
}



// const audio = document.getElementById("brandAudio");

// const playOnce = () => {
//     audio.play().catch(() => { });
//     document.removeEventListener("click", playOnce);
//     document.removeEventListener("keydown", playOnce);
//     document.removeEventListener("touchstart", playOnce);
// };

// document.addEventListener("click", playOnce);
// document.addEventListener("keydown", playOnce);
// document.addEventListener("touchstart", playOnce);


const audio = document.getElementById("brandAudio");

function playBrandAudio() {
    audio.currentTime = 0;
    audio.play().catch(() => { });

    document.removeEventListener("click", playBrandAudio);
    document.removeEventListener("keydown", playBrandAudio);
    document.removeEventListener("touchstart", playBrandAudio);
}

// Har refresh par dobara attach hoga
document.addEventListener("click", playBrandAudio);
document.addEventListener("keydown", playBrandAudio);
document.addEventListener("touchstart", playBrandAudio);