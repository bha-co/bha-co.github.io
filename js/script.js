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

    // Product images carousel scroll
    document.querySelectorAll('.product-card').forEach(card => {
        let currentImageIndex = 0;
        const images = card.querySelectorAll('.product-carousel img'); // تصحیح انتخابگر
        const prevBtn = card.querySelector('.prev');
        const nextBtn = card.querySelector('.next');

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
                img.style.display = i === index ? 'block' : 'none';
            });
        }

        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        });

        // افزودن رویداد کلیک برای دکمه‌های "مشاهده محصول"
        const showButtons = document.querySelectorAll('.show-button');
        showButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                window.location.href = `products/${index + 1}.html`;
            });
        });

        // افزودن رویداد کلیک برای آیتم‌های بلاگ
        const blogItems = document.querySelectorAll('.blog-item');
        blogItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                window.location.href = `blogs/${index + 1}.html`;
            });
        });

        // نمایش اولین تصویر هنگام بارگذاری
        showImage(currentImageIndex);
    });
});
