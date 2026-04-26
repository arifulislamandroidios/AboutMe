// Navigation Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Reveal on Scroll Animation
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

window.addEventListener('scroll', revealOnScroll);
// Initial check in case some elements are already in view
window.addEventListener('load', revealOnScroll);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Simple Typewriter Effect for Hero
const heroTitle = document.querySelector('.hero-text h1');
if (heroTitle) {
    const text = heroTitle.innerText;
    heroTitle.innerText = '';
    let i = 0;
    const type = () => {
        if (i < text.length) {
            heroTitle.innerText += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    };
    // Delay typing until load
    window.addEventListener('load', () => setTimeout(type, 500));
}
