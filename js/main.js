// Hamburger-Menu toggle
const menuBtn = document.getElementById('menu-btn');
const nav     = document.querySelector('.main-nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Smooth-Scroll (intern)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const tgt = document.querySelector(link.getAttribute('href'));
    if (tgt) tgt.scrollIntoView({ behavior: 'smooth' });
    // Menü schließen nach Klick (mobile)
    if (nav.classList.contains('open')) nav.classList.remove('open');
  });
});
