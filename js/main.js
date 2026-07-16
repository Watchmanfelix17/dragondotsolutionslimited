document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Dynamic Header on Scroll ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Change icon between hamburger and 'X'
        if(nav.classList.contains('active')) {
            hamburger.innerHTML = '✕'; 
        } else {
            hamburger.innerHTML = '☰';
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.innerHTML = '☰';
        });
    });

    // --- 3. Active Section Highlighting (ScrollSpy) ---
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // When we scroll past a section's top (minus header height offset)
            if (pageYOffset >= (sectionTop - 120)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active-link');
            }
        });
    });

    // --- 4. Smooth Scrolling & WhatsApp Routing ---
    // (Keep your existing smooth scroll and WhatsApp button routing code here)
});