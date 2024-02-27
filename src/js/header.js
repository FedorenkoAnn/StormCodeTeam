
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


  document.addEventListener("DOMContentLoaded", function() {
       var navLinks = document.querySelectorAll('#link-menu');

       navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
      event.preventDefault();

      navLinks.forEach(function(link) {
      link.classList.remove('is-active');
   });

      link.classList.add('is-active');
      });
    });
  });
  


function toggleModal(action) {
  var mobileContent = document.querySelector('.mobile-content');
  var burgerBtn = document.querySelector('.burger-btn');
  var closeBtn = document.querySelector('.close-btn');

  if (action === 'open') {
    mobileContent.style.display = 'block';
    burgerBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  } else {
    mobileContent.style.display = 'none';
    burgerBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  }
}

document.querySelector('.burger-btn').addEventListener('click', function() {
  toggleModal('open');
});

document.querySelector('.close-btn').addEventListener('click', function() {
  toggleModal('close');
});
