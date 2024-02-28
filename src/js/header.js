function toggleModal(action) {
  const mobileContent = document.querySelector('.mobile-content');
  const burgerBtn = document.querySelector('.burger-btn');
  const closeBtn = document.querySelector('.close-btn');

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

document.querySelector('.burger-btn').addEventListener('click', function () {
  toggleModal('open');
});

document.querySelector('.close-btn').addEventListener('click', function () {
  toggleModal('close');
});



document.addEventListener('DOMContentLoaded', function() {
  const switchElement = document.querySelector('.switch input');
  const bodyElement = document.body;

  // Предварительно прячем содержимое
  bodyElement.style.opacity = '0';
  bodyElement.style.visibility = 'hidden';

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    bodyElement.classList.toggle('dark-mode', savedTheme === 'dark');
    switchElement.checked = savedTheme === 'dark';
  }

  // Отображаем содержимое после загрузки стилей
  window.requestAnimationFrame(() => {
    bodyElement.style.opacity = '1';
    bodyElement.style.visibility = 'visible';
  });

  switchElement.addEventListener('change', function() {
    bodyElement.classList.toggle('dark-mode', switchElement.checked);
    localStorage.setItem('theme', switchElement.checked ? 'dark' : 'light');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.header-menu a, .header-menu svg');

  navLinks.forEach(function(link) {
    if (link.href === window.location.href) {
      link.classList.add('active');
      // Проверяем, является ли текущий элемент иконкой icon-shopping
      if (link.classList.contains('icon-shopping')) {
        // Если да, то добавляем класс active также к иконке
        link.querySelector('svg').classList.add('active');
      }
    }
  });
});