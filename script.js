document.addEventListener('DOMContentLoaded', () => {
    // کد برای بنر اصلی (main-banner)
    const banners = document.querySelectorAll('.main-banner img');
    let bannerIndex = 0;

    setInterval(() => {
        banners.forEach(banner => banner.classList.remove('active'));
        bannerIndex = (bannerIndex + 1) % banners.length;
        banners[bannerIndex].classList.add('active');
    }, 3000);

    // کد برای کاروسل محصولات
    const carousels = document.querySelectorAll('.product-carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        let currentImageIndex = 0;
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        prevButton.addEventListener('click', () => {
            images[currentImageIndex].style.display = 'none';
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            images[currentImageIndex].style.display = 'block';
        });

        nextButton.addEventListener('click', () => {
            images[currentImageIndex].style.display = 'none';
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].style.display = 'block';
        });
    });

    // کد برای همبرگر منو
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelector('.menu-items');

    hamburgerMenu.addEventListener('click', function() {
        menuItems.classList.toggle('show');
    });
});
