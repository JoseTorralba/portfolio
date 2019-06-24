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
        
        // Toggles Nav Icon
        if (navigation.icon.classList.contains('fa-bars')) {
            navigation.icon.setAttribute("class", "fas fa-times navigation__toggle--icon");
            navigation.icon.removeAttribute("fas fa-bars navigation__toggle--icon");
            navigation.list.style.opacity = '1';
  
        } else {
            navigation.icon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
            navigation.icon.removeAttribute('fas fa-times navigation__toggle--icon');
            navigation.list.style.opacity = '0';
        }
    });
  
    toggleItem.forEach(function (toggleItem) {
        toggleItem.addEventListener('click', function() {
            navigation.nav.classList.remove('navigation__active');
  
            // Toggles Nav Icon
            if (navigation.icon.classList.contains('fa-bars')) {
                navigation.icon.setAttribute("class", "fas fa-times navigation__toggle--icon");
                navigation.icon.removeAttribute("fas fa-bars navigation__toggle--icon");
    
            } else {
                navigation.icon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
                navigation.icon.removeAttribute('fas fa-times navigation__toggle--icon');
            }
        })
    });
    
    // About & Header Background Image On Scroll
    $(window).scroll(function() {
        const scrollAboutPosition = $(window).scrollTop()/4;
        $('.about-section').css({
            'background-position-x' : + scrollAboutPosition + 'px'
        });

        const scrollHeaderPosition = $(window).scrollTop()/ 2;
        $('.header').css({
            'background-position-y' : + scrollHeaderPosition + 'px'
        });
    });

    // Scroll animation
    $("a.scroll").click(function (event) {
        event.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });
});