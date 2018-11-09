var backdrop = document.querySelector('.backdrop');
var mobileNav = document.querySelector('.mobile-nav');



backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
});