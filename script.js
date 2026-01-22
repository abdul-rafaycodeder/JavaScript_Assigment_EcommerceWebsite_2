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


function alert() {
    // var alert = document.getElementById("alert")

    alert("aksjdlkdlkda")

    
}
