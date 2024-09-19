// Hamburger-Menü
const toggle = document.getElementById('toggle');
const navMenu = document.querySelector('nav ul');

toggle.addEventListener('change', function() {
    if (this.checked) {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
});

document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault(); // Standardmäßiges Verhalten verhindern
    document.querySelector('#products-norma').scrollIntoView({
        behavior: 'smooth' // Sorgt für das sanfte Scrollen
    });
});


// Swiper Slider Initialisierung
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000, // Wechselt alle 3 Sekunden
        disableOnInteraction: false,
    },
    speed: 1000, // Weicher Übergang von 1 Sekunde
    effect: 'fade', // Sanftes Überblenden
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive Einstellungen
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
});


// Zurück nach oben Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

