// document.addEventListener('DOMContentLoaded', function () {
//   const toggleSwitch = document.querySelector('.switch input');
  
//   // Получаем текущее состояние из localStorage
//   const isDarkMode = localStorage.getItem('darkMode') === 'true';

//   // Устанавливаем состояние переключателя в соответствии с сохраненным значением
//   toggleSwitch.checked = isDarkMode;

//   // Устанавливаем тему в соответствии с сохраненным значением
//   if (isDarkMode) {
//     document.body.classList.add('dark-mode');
//   }

//   toggleSwitch.addEventListener('change', function () {
//     // Сохраняем состояние в localStorage при изменении
//     localStorage.setItem('darkMode', toggleSwitch.checked);

//     if (toggleSwitch.checked) {
//       document.body.classList.add('dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//     }
//   });
// });

// function navigateToPage(page) {
//   // Переключение страницы
//   window.location.href = page;
// }



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

  // Проверяем, сохранена ли тема в локальном хранилище
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    bodyElement.classList.toggle('dark-mode', savedTheme === 'dark');
    switchElement.checked = savedTheme === 'dark';
  }

  // Слушаем изменения в переключателе темы
  switchElement.addEventListener('change', function() {
    // Изменяем класс тела и сохраняем выбор в локальном хранилище
    bodyElement.classList.toggle('dark-mode', switchElement.checked);
    localStorage.setItem('theme', switchElement.checked ? 'dark' : 'light');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.header-menu a, .header-menu svg');

  navLinks.forEach(function(link) {
    // Проверяем, является ли текущая ссылка активной
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});