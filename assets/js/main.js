// ============================================
// GLOBAL FUNCTIONS (Available even if scripts load later)
// ============================================
window.openOffcanvas = function () {
    const offcanvas = document.getElementById('menu-wrap-off');
    const overlay = document.querySelector('.header-overlay');
    if (offcanvas) offcanvas.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeOffcanvas = function () {
    const offcanvas = document.getElementById('menu-wrap-off');
    const overlay = document.querySelector('.header-overlay');
    if (offcanvas) offcanvas.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
};

window.openNav = function () {
    const menuMobile = document.getElementById('menu-mobile');
    const overlay = document.querySelector('.header-overlay');
    if (menuMobile) menuMobile.classList.add('active');
    if (overlay) overlay.classList.add('active');
};

window.closeNav = function () {
    const menuMobile = document.getElementById('menu-mobile');
    const overlay = document.querySelector('.header-overlay');
    if (menuMobile) menuMobile.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', function () {

    // Use Event Delegation for dynamically loaded content (Header/Footer via fetch)
    document.addEventListener('click', function (e) {
        // Overlay click to close
        if (e.target.classList.contains('header-overlay')) {
            closeOffcanvas();
            closeNav();
        }
    });

    // ---- Mobile Accordion Sub-menus (Delegate to handle fetch content) ----
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('#menu-mobile .accordion');
        if (btn) {
            e.preventDefault();
            const subMenu = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            if (subMenu && subMenu.classList.contains('sub-menu')) {
                const isVisible = subMenu.style.display === 'block';
                subMenu.style.display = isVisible ? 'none' : 'block';
                if (icon) {
                    icon.classList.toggle('fa-angle-up', !isVisible);
                    icon.classList.toggle('fa-angle-down', isVisible);
                }
            }
        }
    });

    // ---- Initialize Owl Carousel (Only if libraries are loaded) ----
    if (typeof jQuery !== 'undefined' && typeof $.fn.owlCarousel !== 'undefined') {
        $('.slide-adv').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            autoplay: true,
            items: 1
        });

        $('.owl-sukien').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 } }
        });
    }

    // ---- GSAP Smooth Scrolling (With Error Handling) ----
    if (typeof gsap !== 'undefined' && typeof ScrollSmoother !== 'undefined') {
        try {
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
            ScrollSmoother.create({
                smooth: 1.5,
                effects: true
            });
        } catch (err) {
            console.error("GSAP ScrollSmoother Error:", err);
        }
    }

    // Use Event Delegation for dynamically loaded content (Header/Footer via fetch)
    document.addEventListener('click', function (e) {
        // Overlay click to close
        if (e.target.classList.contains('header-overlay')) {
            if (typeof closeOffcanvas === 'function') closeOffcanvas();
            if (typeof closeNav === 'function') closeNav();
        }
    });

    // ---- Sticky Header Background Change ----
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header-main');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('is-scrolled');
            } else {
                header.classList.remove('is-scrolled');
            }
        }
    });

});
