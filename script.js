/* === 1. HAMBURGER MENU === */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


/* === 2. SCROLL ANIMATIONS (Intersection Observer) === */
// Select all sections that we want to animate (everything except the hero)
const sectionsToAnimate = document.querySelectorAll('section:not(.hero)');

// Set up the observer options
const observerOptions = {
    root: null, // observes intersections relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // Triggers when 10% of the section is visible
};

// Create the observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the section is in view
        if (entry.isIntersecting) {
            // Add the 'show' class to trigger the CSS transition
            entry.target.classList.add('show');
            
            // Stop observing this section so the animation doesn't re-run
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Attach the observer to each section
sectionsToAnimate.forEach(section => {
    observer.observe(section);
});