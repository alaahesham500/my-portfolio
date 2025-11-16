// ====== Dark/Light Mode ======
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// ====== Navbar Burger ======
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ====== Smooth Scroll ======
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active'); // close menu on mobile
    });
});

// ====== Scroll Fade Effects ======
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ====== Carousel ======
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i){
    if(i < 0) index = items.length - 1;
    else if(i >= items.length) index = 0;
    else index = i;
    carouselInner.style.transform = `translateX(-${index*100}%)`;
}

prev.addEventListener('click', () => showSlide(index-1));
next.addEventListener('click', () => showSlide(index+1));

// ====== Contact Form ======
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح! ✨');
    form.reset();
});
