var backdrop = document.querySelector('.backdrop');
var mobileNav = document.querySelector('.mobile-nav');
var toggleButton = document.querySelector('.toggle-button');

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeBackdrop();
});

toggleButton.addEventListener("click", function () {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

function closeBackdrop() {
    backdrop.classList.remove("open");
}