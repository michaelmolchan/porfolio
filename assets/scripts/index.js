
$(() => {
  let menuIcon = document.querySelector('.menuIcon');
  let nav = document.querySelector('.overlay-menu');

  menuIcon.addEventListener('click', () => {
      if (nav.style.transform != 'translateX(0%)') {
          nav.style.transform = 'translateX(0%)';
          nav.style.transition = 'transform 0.2s ease-out';
      } else {
          nav.style.transform = 'translateX(-100%)';
          nav.style.transition = 'transform 0.2s ease-out';
      }
  })

  let toggleIcon = document.querySelector('.menuIcon');

  toggleIcon.addEventListener('click', () => {
      if (toggleIcon.className != 'menuIcon toggle') {
          toggleIcon.className += ' toggle';
      } else {
          toggleIcon.className = 'menuIcon';
      }
  })

// Scroll to Skills section
  $("#about").click(function() {
      $('html,body').animate({
          scrollTop: $(".about").offset().top - 70
        },
          'slow');
  });

  $("#skills").click(function() {
      $('html,body').animate({
          scrollTop: $(".technical-skills").offset().top - 70
        },
          'slow');
  });

  $("#work").click(function() {
      $('html,body').animate({
          scrollTop: $(".projects").offset().top - 70
        },
          'slow');
  });

  $("#contact").click(function() {
      $('html,body').animate({
          scrollTop: $(".contact").offset().top - 70
        },
          'slow');
  });

})
