// Countdown Setup
let count = 10;

function tick() {
    document.getElementById("countdown").textContent = "Countdown: " + count;
    count--;

    if (count >= 0) {
        setTimeout(tick, 1000); // Wait 1 second and call tick again
    } else {
        document.getElementById("countdown").textContent = "Slideshow Started!";
        startSlideshow();
    }
}

// Start countdown
tick();

// Slideshow Setup
let slideIndex = 0;
let slides;

function startSlideshow() {
    slides = document.getElementsByClassName("slide");
    showSlides();
}

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to first slide
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

