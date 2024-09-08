document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const testimonials = carousel.querySelectorAll('.testimonial');

    // Clone testimonials to create an infinite loop
    testimonials.forEach(testimonial => {
        const clone = testimonial.cloneNode(true);
        carousel.appendChild(clone);
    });

    // Adjust the animation duration based on the number of testimonials
    const totalWidth = Array.from(testimonials).reduce((sum, testimonial) => sum + testimonial.offsetWidth + 40, 0);
    carousel.style.animationDuration = `${totalWidth / 25}s`; // Adjusted speed (changed from 50 to 25)
});