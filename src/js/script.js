'use strict';

window.addEventListener('DOMContentLoaded', () => {
    /***** hamburger menu animation *****/  
    const hamburgerBtn = document.querySelector('.hamburger-btn'),
          navbar = document.querySelector('.navbar'),
          hamburgerBtnLines = document.querySelectorAll('.hamburger-btn__line'),
          menuItems = navbar.querySelectorAll('.navbar__list-item'),
          overlay = document.querySelector('.overlay');

    const toggleActiveClasses = () => {
        hamburgerBtnLines.forEach (line => {
            line.classList.toggle('hamburger-btn__line_active');
        });
        navbar.classList.toggle('navbar_active');
        overlay.classList.toggle('overlay_visible');
    }

    hamburgerBtn.addEventListener('click', () => {
        toggleActiveClasses();
    });

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            toggleActiveClasses();
        });
    });

    window.addEventListener('keydown', (event) => {
        if (event.key == 'Escape' && navbar.classList.contains('navbar_active')) {
            toggleActiveClasses();
        };
    });

    overlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('overlay') && navbar.classList.contains('navbar_active')) {
            toggleActiveClasses();
        }
    });
});