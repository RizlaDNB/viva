var mobileMenuBtn = document.querySelector('.header-mobile-menu'),
    nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    mobileMenuBtn.classList.toggle('header-mobile-menu--active');
    nav.classList.toggle('nav--active');
});