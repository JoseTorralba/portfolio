$(document).ready(function () {
  // Scroll animation
  $("a.scroll").click(function (event) {
    event.preventDefault();

    $("html, body").animate({ 
      scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
  });

  // Background Icon Navbar Toggle
  $('.navigation__toggle--icon').click(function() {
    $('.navigation__nav').toggleClass('navigation__active-nav');
  });

  // List items shows up when Icon is toggled
  $('.navigation__toggle--icon').click(function() {
    $('.navigation__list').toggleClass('navigation__active-list');
  });

  // When a list item is clicked, nav menu is hidden
  // find a way to make it toggle icons
  $('.navigation__item').click(function() {
    $('.navigation__nav').toggleClass('navigation__active-nav');
  });
  
  // Prevents opacity when clicking on a nav link
  $('.navigation__item').click(function() {
    $('.navigation__list').toggleClass('navigation__active-list');
  });
 
  // Navigation
  $('.navigation__toggle--icon').click(function() {

    var toggleIcon = $('.navigation__toggle--icon');

    if (toggleIcon.hasClass('fas fa-bars')) {

      toggleIcon.attr("class", "fas fa-times navigation__toggle--icon");
      toggleIcon.removeAttr("fas fa-bars");
        
    } else {
      toggleIcon.attr("class", "fas fa-bars navigation__toggle--icon");
      toggleIcon.removeAttr('fas fa-times');
    }
  });
  
  $('.navigation__item').click(function() {

    var toggleIconItem = $('.navigation__toggle--icon');

    if (toggleIconItem.hasClass('fas fa-bars')) {

      toggleIconItem.attr("class", "fas fa-times navigation__toggle--icon");
      toggleIconItem.removeAttr("fas fa-bars");
      
    } else {
      toggleIconItem.attr("class", "fas fa-bars navigation__toggle--icon");
      toggleIconItem.removeAttr('fas fa-times');
    }

  });

  // About Background Image On Scroll
  $(window).scroll(function() {

    const scrollPosition = $(window).scrollTop()/2;

    $('.about-section').css({
      'background-position-x' : + scrollPosition + 'px'
    });
  });
});