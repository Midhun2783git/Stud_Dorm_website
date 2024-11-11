
const customCursor = document.querySelector('.custom-cursor');


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


document.addEventListener('DOMContentLoaded', () => {
    customCursor.style.left = `50%`;
    customCursor.style.top = `50%`;
});
