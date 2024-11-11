
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const customCursor = document.querySelector('.custom-cursor');

let currentIndex = 0;  


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}


function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;

    
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            trail.remove();
        }, 300); 
    }, 50); 
}


nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);


setInterval(nextSlide, 3000);


showSlide(currentIndex);


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

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;

    createTrail(e.pageX, e.pageY);  
});


document.addEventListener('mousedown', () => {
    customCursor.classList.add('click');
});
document.addEventListener('mouseup', () => {
    customCursor.classList.remove('click');
});


document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('active');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactContent = document.querySelector(".contact-content");

    if (contactContent) {  
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
    } else {
        console.warn(".contact-content element not found.");
    }
});
