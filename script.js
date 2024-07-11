document.addEventListener('DOMContentLoaded', () => {
    // کد برای بنر اصلی (main-banner)
    const banners = document.querySelectorAll('.main-banner img');
    let bannerIndex = 0;

    setInterval(() => {
        banners.forEach(banner => banner.classList.remove('active'));
        bannerIndex = (bannerIndex + 1) % banners.length;
        banners[bannerIndex].classList.add('active');
    }, 3000);

    // کد برای بنرهای فرعی (sub-banners)
    const subBanners1 = document.querySelectorAll('.sub-banner1 img');
    let subBannerIndex1 = 0;

    setInterval(() => {
        subBanners1.forEach(banner => banner.classList.remove('active'));
        subBannerIndex1 = (subBannerIndex1 + 1) % subBanners1.length;
        subBanners1[subBannerIndex1].classList.add('active');
    }, 3000);

    const subBanners2 = document.querySelectorAll('.sub-banner2 img');
    let subBannerIndex2 = 0;

    setInterval(() => {
        subBanners2.forEach(banner => banner.classList.remove('active'));
        subBannerIndex2 = (subBannerIndex2 + 1) % subBanners2.length;
        subBanners2[subBannerIndex2].classList.add('active');
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
});
