document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.main-nav');
    
    if (hamburger && nav) {
        // Toggle menu on click
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            // Swap icon
            if (nav.classList.contains('active')) {
                hamburger.innerHTML = '✕'; 
            } else {
                hamburger.innerHTML = '☰';
            }
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.innerHTML = '☰';
            });
        });
    }
});