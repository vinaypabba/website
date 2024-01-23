document.querySelector('#navbar-toggle').addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector("#nav-links").classList.toggle('hide-on-mobile');
    document.querySelector("body").classList.toggle('menu-opened');
});

document.querySelector('body').addEventListener('click', function() {
    document.querySelector("body").classList.remove('menu-opened');
    document.querySelector("#nav-links").classList.add('hide-on-mobile');
});

var faqElements = document.querySelectorAll('.faq');
faqElements.forEach(function (faqElement) {
    faqElement.addEventListener('click', function (e) {
        e.stopPropagation();
        faqElement.classList.toggle('opened');
    });
});
