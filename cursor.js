// Select the custom cursor element
const customCursor = document.querySelector('.custom-cursor');

// Function to create a trailing effect
function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;

    // Fade out and remove the trail
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            trail.remove();
        }, 300); // Match the duration of the opacity transition
    }, 50); // Short delay before fading out
}

// Update the cursor position and create a trail on mouse move
document.addEventListener('mousemove', (e) => {
    // Set the position of the custom cursor
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;

    createTrail(e.pageX, e.pageY);  // create trail effect
});

// Click animation
document.addEventListener('mousedown', () => {
    customCursor.classList.add('click');
});
document.addEventListener('mouseup', () => {
    customCursor.classList.remove('click');
});

// Hover effects for interactive elements
document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('active');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('active');
    });
});

// Initialize cursor position on page load
document.addEventListener('DOMContentLoaded', () => {
    // Position the custom cursor in the center at first
    customCursor.style.left = `50%`;
    customCursor.style.top = `50%`;
});
