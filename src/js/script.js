'use strict';

/***** import script of tiny-slider *****/
/* import { tns } from "./node_modules/tiny-slider/src/tiny-slider"; */

window.addEventListener('DOMContentLoaded', () => {

    /***** find coordinates of element *****/ 

    const stack = document.querySelector('#stack');
    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    /***** hamburger menu animation *****/  

    const hamburgerBtn = document.querySelector('.hamburger-btn'),
          navbar = document.querySelector('.navbar'),
          hamburgerBtnLines = document.querySelectorAll('.hamburger-btn__line'),
          menuItems = navbar.querySelectorAll('.navbar__link'),
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

    menuItems.forEach((item,i) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const idLink = event.target.href.split('#')[1];           
            window.scrollTo({
                top: offset (document.querySelector(`#${idLink}`)).top,
                behavior: "smooth"
            });
            if (navbar.classList.contains('navbar_active')) {
                toggleActiveClasses();
            }
            menuItems.forEach((elem, i) => {
                elem.classList.remove('navbar__link_active');
            });
            event.target.classList.add('navbar__link_active');
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



    /***** tittle animation in intro section *****/ 

    const tittleWrapper = document.querySelector('.intro__change-tittle'),
          helloWord = document.querySelector('.intro__hello');
    const text = [
        `   <div class="intro__tittle  animate__fadeIn">I'm <span>Irina Azizova</span> </div>
            <div class="intro__subtittle  animate__fadeIn">a frontend developer</div>`,
        `<div class="intro__tittle  animate__fadeIn">I'm a <span>frontend developer</span> based in N.Novgorod</div>`
    ]

    let i = 0;
    tittleWrapper.innerHTML = text[i];
    helloWord.classList.add('animate__bell');
    const tittleAnimation = () => {
        setTimeout(() => {  
            if (i === 0) {
                i = 1;
            } else {
                i = 0;
            }
            tittleWrapper.innerHTML = text[i]; 
            tittleAnimation();      
        },5000);
    }
    const helloAnimation = () => {        
        setTimeout(() => {
            helloWord.classList.toggle('animate__bell');
            helloAnimation();      
        },2500);
    }
    tittleAnimation();
    helloAnimation()



    /***** use tiny slider *****/
    let slider;
    if (document.documentElement.clientWidth > 1200) {
        slider = tns({
            container: '.slider',
            items: 5,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayButtonOutput: false,
            nav: false,
            controls: false,
            slideBy: 1
        });
    } else if (document.documentElement.clientWidth > 585 && document.documentElement.clientWidth <= 1200) {
        slider = tns({
            container: '.slider',
            items: 3,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayButtonOutput: false,
            nav: false,
            controls: false,
            slideBy: 1
        });
    } else {
        slider = tns({
            container: '.slider',
            items: 1,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayButtonOutput: false,
            nav: false,
            controls: false,
            slideBy: 1
        });
    }
    
    document.querySelector('.slider__prev').addEventListener('click', () => {
        slider.goTo('prev');
    });
    document.querySelector('.slider__next').addEventListener('click', () => {
        slider.goTo('next');
    });
});