// ============================================
// MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ---- Mobile Menu Toggle ----
    window.openNav = function () {
        const menuMobile = document.getElementById('menu-mobile');
        const clickOut = document.querySelector('.click_out');
        menuMobile.classList.add('active');
        clickOut.style.display = 'block';
    };

    window.closeNav = function () {
        const menuMobile = document.getElementById('menu-mobile');
        const clickOut = document.querySelector('.click_out');
        menuMobile.classList.remove('active');
        clickOut.style.display = 'none';
    };

    // Close menu when clicking overlay
    document.querySelector('.click_out').addEventListener('click', function () {
        closeNav();
    });

    // ---- Mobile Accordion Sub-menus ----
    const accordionButtons = document.querySelectorAll('#menu-mobile .accordion');
    accordionButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const subMenu = this.nextElementSibling;
            const icon = this.querySelector('i');

            if (subMenu && subMenu.classList.contains('sub-menu')) {
                if (subMenu.style.display === 'block') {
                    subMenu.style.display = 'none';
                    icon.classList.remove('fa-angle-up');
                    icon.classList.add('fa-angle-down');
                } else {
                    subMenu.style.display = 'block';
                    icon.classList.remove('fa-angle-down');
                    icon.classList.add('fa-angle-up');
                }
            }
        });
    });

    // ---- Initialize Owl Carousel - Slider ----
    if (typeof $.fn.owlCarousel !== 'undefined') {
        $('.slide-adv').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            items: 1,
            navText: [
                '<i class="fa fa-chevron-left"></i>',
                '<i class="fa fa-chevron-right"></i>'
            ]
        });

        // ---- Initialize Owl Carousel - Sự kiện ----
        $('.owl-sukien').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                992: { items: 3 }
            },
            navText: [
                '<i class="fa fa-chevron-left"></i>',
                '<i class="fa fa-chevron-right"></i>'
            ]
        });
    }

});
