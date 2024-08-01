// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });

    // Grid view toggle
    document.querySelectorAll('.btn-view').forEach(button => {
        button.addEventListener('click', function() {
            const columns = this.getAttribute('data-columns');
            document.getElementById('productGrid').style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        });
    });

    // Testimonials carousel scroll
    let currentIndex = 0;
    const items = document.querySelectorAll('.testimonial-item');

    function scrollTestimonials(direction) {
        items[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + direction + items.length) % items.length;
        items[currentIndex].classList.add('visible');
    }

    document.querySelector('.nav-btn.prev').addEventListener('click', () => scrollTestimonials(-1));
    document.querySelector('.nav-btn.next').addEventListener('click', () => scrollTestimonials(1));
});
