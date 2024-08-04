document.addEventListener('DOMContentLoaded', function() {
    // منوی موبایل
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });

    // تغییر نمای گرید محصولات
    document.querySelectorAll('.btn-view').forEach(button => {
        button.addEventListener('click', function() {
            const columns = this.getAttribute('data-columns');
            document.getElementById('productGrid').style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        });
    });
    
    // نمایش اعضای تیم با اسکرول خودکار
    const teamGrid = document.querySelector('.team-grid');
    const members = document.querySelectorAll('.team-member');

    let index = 0;

    function updateActiveMember() {
        members.forEach((member, i) => {
            member.classList.remove('active');
            if (i === index) {
                member.classList.add('active');
            }
        });
    }

    function scrollNext() {
        index = (index + 1) % members.length;
        updateActiveMember();

        // بررسی تعداد کارت‌ها برای تعیین نحوه اسکرول
        if (members.length > 4) {
            // اسکرول کارت‌ها با جابجایی
            const firstMember = teamGrid.removeChild(members[0]);
            teamGrid.appendChild(firstMember);
            members[index].classList.add('active');
        }
    }

    // تنظیم اولین کارت به عنوان فعال
    members[index].classList.add('active');

    // جلوگیری از اسکرول دستی
    teamGrid.addEventListener('scroll', (e) => e.preventDefault());

    // شروع اسکرول خودکار
    setInterval(scrollNext, 5000);

    // کاروسل تصاویر محصولات
    document.querySelectorAll('.product-card').forEach(card => {
        let currentImageIndex = 0;
        const images = card.querySelectorAll('.product-carousel img');
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
