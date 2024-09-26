document.querySelectorAll('.product-description').forEach(function (description) {
        const maxLength = 104; // حداکثر تعداد کاراکترها
        if (description.textContent.length > maxLength) {
            const truncatedText = description.textContent.slice(0, maxLength) + '...';
            description.textContent = truncatedText;
        }
    });

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const header = document.querySelector('header');
  const body = document.querySelector('body');

  hamburgerMenu.addEventListener('click', function() {
    header.classList.toggle('menu-opened');
    body.classList.toggle('no-scroll'); // اضافه کردن یا حذف کلاس no-scroll به بادی
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');

    // 1. تعامل با رابط کاربری (UI Interactions)
    // منوی موبایل
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('open');
        body.classList.toggle('no-scroll'); // اضافه کردن یا حذف کلاس no-scroll به بادی
    });

    // تغییر نمای گرید محصولات
    document.querySelectorAll('.btn-view').forEach(button => {
        button.addEventListener('click', function() {
            const columns = this.getAttribute('data-columns');
            document.getElementById('productGrid').style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        });
    });

    // بارگذاری هدر با استفاده از jQuery
    $(function() {
        $("#header").load("../templates/header.html");
    });

    // 2. انیمیشن‌ها و اسکرول خودکار (Animations and Auto-Scrolling)
    // نمایش اعضای تیم با اسکرول خودکار
    const teamMembers = document.querySelectorAll('.team-member');
    let teamIndex = 0;

    function updateActiveTeamMember() {
        teamMembers.forEach((member, i) => {
            member.classList.toggle('active', i === teamIndex);
        });
    }

    setInterval(() => {
        teamIndex = (teamIndex + 1) % teamMembers.length;
        updateActiveTeamMember();
    }, 4000);

    // کاروسل تصاویر محصولات
    document.querySelectorAll('.product-card').forEach(card => {
        let currentImageIndex = 0;
        const images = card.querySelectorAll('.product-carousel img');
        const prevBtn = card.querySelector('.prev');
        const nextBtn = card.querySelector('.next');

        function showImage(index) {
            images.forEach((img, i) => {
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

        showImage(currentImageIndex);
    });

    // اسکرول خودکار نظرات مشتریان
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    function updateVisibleTestimonials() {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.display = (index >= currentIndex && index < currentIndex + 3) ? 'block' : 'none';
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 3) % testimonials.length;
        updateVisibleTestimonials();
    }, 6000);
    updateVisibleTestimonials();

    // تایپ انیمیشن تیم
    const text = "ما با تیمی مجرب و خلاق و با تلاش شبانه‌روزی بهترین خدمات را به شما ارائه می‌دهیم.".replace(/ـ+/g, '');
    const typingSpeed = 50;
    const displayDuration = 2000;
    let charIndex = 0;

    function typeWriter() {
        const description = document.getElementById("team-description");
        if (charIndex < text.length) {
            description.innerHTML += text.charAt(charIndex++);
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(() => {
                description.innerHTML = "";
                charIndex = 0;
                typeWriter();
            }, displayDuration);
        }
    }
    typeWriter();

    // 3. تغییر دوره‌ای پس‌زمینه (Background Change)
    const hero = document.querySelector('.hero');
    const images = [
        'img/headers/header-banner-1.png',
        'img/headers/header-banner-2.png',
    ];
    let currentIndexBg = 0;

    function changeBackground() {
        hero.style.backgroundImage = `url(${images[currentIndexBg]})`;
        currentIndexBg = (currentIndexBg + 1) % images.length;
    }

    // تنظیم بک‌گراند اولیه و شروع تغییر دوره‌ای
    changeBackground();
    setInterval(changeBackground, 5000);
});
