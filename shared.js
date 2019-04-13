var backdrop = document.querySelector('.backdrop');
var mobileNav = document.querySelector('.mobile-nav');
var toggleButton = document.querySelector('.toggle-button');

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeBackdrop();
    toggleButton.style.display = "block";
});

toggleButton.addEventListener("click", function () {
    toggleButton.style.display = "none";
    mobileNav.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(() => {
        backdrop.classList.add("open");
    }, 10);
});

function closeBackdrop() {
    backdrop.classList.remove("open");
    backdrop.style.display = "none";
}