  document.addEventListener('DOMContentLoaded', function () {
    var toggleSwitch = document.querySelector('.switch input');

    toggleSwitch.addEventListener('change', function () {
      if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
          
    });
  });
 var navLinks = document.querySelectorAll('.nav-link');
   navLinks.forEach(function (navLink) {
      navLink.addEventListener('click', function () {
        navLinks.forEach(function (link) {
          link.classList.remove('is-active');
        });

        navLink.classList.add('is-active');
      });
    });