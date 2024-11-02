// Select the slides and buttons
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const customCursor = document.querySelector('.custom-cursor');

let currentIndex = 0;  // Start with the first slide

// Function to show the active slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Attach event listeners to buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize with the first slide
showSlide(currentIndex);

// Function to add animation to Contact Us section when in view
// Function to animate the Contact Us section when in view
document.addEventListener("DOMContentLoaded", () => {
    const contactContent = document.querySelector(".contact-content");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    contactContent.classList.add("visible");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(contactContent);
});

document.addEventListener('mousemove', (e) => {
    // Set the position of the custom cursor
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('active');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('active');
    });
});
