// Document on Ready
document.addEventListener('DOMContentLoaded', function() {

    // NAVIGATION OBJECT & VARIABLES
    var toggleItem = document.querySelectorAll('.navigation__item');
    var navigation = {
        div: document.querySelector('.navigation'),
        nav: document.querySelector('.navigation__nav'),
        list: document.querySelector('.navigation__list'),
        background: document.querySelector('.navigation__background'),
        icon: document.querySelector('.navigation__toggle--icon')
    };


    // When Mobile Nav is Clicked
    navigation.icon.addEventListener('click', function() {
        navigation.nav.classList.toggle('navigation__active');
        navigation.list.style.opacity = '1';
        toggleNavIcon();
    });
  

    // This needs to be worked on for mobile
    toggleItem.forEach(function (toggleItem) {
        toggleItem.addEventListener('click', function() {
            navigation.nav.classList.remove('navigation__active');
            toggleNavIcon();
        })
    });

    // Toggles Nav Icon
    function toggleNavIcon() {
        if (navigation.icon.classList.contains('fa-bars')) {
            navigation.icon.setAttribute("class", "fas fa-times navigation__toggle--icon");
            navigation.icon.removeAttribute("fas fa-bars navigation__toggle--icon");

        } else {
            navigation.icon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
            navigation.icon.removeAttribute('fas fa-times navigation__toggle--icon');
        }
    }


    // Header on Scroll Background Image
    window.addEventListener('scroll', function() {

        // Navigation changes past header
        var getNav = document.querySelector('.navigation__nav');
        var getNavList = document.querySelector('.navigation__list');
        
        if (window.pageYOffset > 700) {
            getNav.style.backgroundColor = '#000';
            getNavList.style.padding = '1rem 1.5rem';

        } else {
            getNav.style.removeProperty("background-color");
            getNavList.style.removeProperty("padding");

        }

        // Header Background on Scroll
        const headerScroll = window.pageYOffset/2;
        var getHeaderBackground = document.querySelector('.header');
        getHeaderBackground.style.backgroundPositionY = headerScroll + 'px';

        // About Background on Scroll
        const aboutScroll = window.pageYOffset/2;
        var getAboutBackground = document.querySelector('.about-section');
        getAboutBackground.style.backgroundPositionX = aboutScroll + 'px';

        // Contact Background gradient/color on scroll?

    })
});