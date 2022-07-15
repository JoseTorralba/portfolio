// Document on Ready
document.addEventListener('DOMContentLoaded', function () {
  // NAVIGATION OBJECT & VARIABLES
  let toggleLink = document.querySelectorAll('.navigation__link');
  let navigation = {
    div: document.querySelector('.navigation'),
    nav: document.querySelector('.navigation__nav'),
    list: document.querySelector('.navigation__list'),
    background: document.querySelector('.navigation__background'),
    icon: document.querySelector('.navigation__toggle--icon'),
  };

  // When Mobile Nav is Clicked
  navigation.icon.addEventListener('click', function () {
    navigation.nav.classList.toggle('navigation__active');
    navigation.list.style.opacity = '1';
    toggleNavIcon();
  });

  // This needs to be worked on for mobile
  toggleLink.forEach(function (toggleItem) {
    toggleItem.addEventListener('click', function () {
      navigation.nav.classList.remove('navigation__active');
      toggleNavIcon();
    });
  });

  // Toggles Nav Icon
  function toggleNavIcon() {
    if (navigation.icon.classList.contains('fa-bars')) {
      navigation.icon.setAttribute(
        'class',
        'fas fa-times navigation__toggle--icon'
      );
      navigation.icon.removeAttribute('fas fa-bars navigation__toggle--icon');
    } else {
      navigation.icon.setAttribute(
        'class',
        'fas fa-bars navigation__toggle--icon'
      );
      navigation.icon.removeAttribute('fas fa-times navigation__toggle--icon');
    }
  }

  // Header on Scroll Background Image
  window.addEventListener('scroll', function () {
    // Navigation changes past header
    if (window.pageYOffset > 700) {
      navigation.nav.classList.add('navigation__nav--displayBackground');
    } else {
      navigation.nav.classList.remove('navigation__nav--displayBackground');
    }
  });

  // Scroll animation
  $('a.scroll').click(function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      1000
    );
  });
});
