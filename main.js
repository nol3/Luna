document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show')
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cartas-luna', { delay: 300});
ScrollReveal().reveal('.cartas-banner-uno', { delay: 400});
ScrollReveal().reveal('.cartas-banner-dos', { delay: 500});