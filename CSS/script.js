document.addEventListener('DOMContentLoaded', function() {
    const menuOpen = document.querySelector('.menu-open');
    const menuClose = document.querySelector('.menu-close');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle menu when hamburger icon is clicked
    menuOpen.addEventListener('click', function() {
        navMenu.classList.add('active');
        menuOpen.style.display = 'none';
        menuClose.style.display = 'block';
    });
    
    // Close menu when X icon is clicked
    menuClose.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';
    });
    
    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuOpen.style.display = 'block';
            menuClose.style.display = 'none';
        });
    });
}); 