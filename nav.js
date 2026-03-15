// navbar mobile
(function() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('nav');
    if (toggle && nav) {
        toggle.addEventListener('click', function() {
            nav.classList.toggle('nav-open');
        });
    }
})();