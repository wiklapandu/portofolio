const navbar = document.getElementsByClassName('navbar-nav')[0];
const home = document.querySelectorAll('nav-link')[0];
const navLik = document.getElementById('nav-link');
navbar.addEventListener('click', (e) => {
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].classList.remove('active');
    }
    e.target.classList.add('active');
});