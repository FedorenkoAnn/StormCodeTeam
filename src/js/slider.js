// document.addEventListener('DOMContentLoaded', function () {
//   const list = document.querySelector('.sidebar-swiper-list');
//   const scrollStep = 100; // Величина прокрутки

//   // Функция прокрутки вверх
//   function scrollUp() {
//     list.scrollBy += scrollStep;
//     updateScrollButtons();
//   }

//   // Функция прокрутки вниз
//   function scrollDown() {
//     list.scrollBy -= scrollStep;
//     updateScrollButtons();
//   }

//   // Функция обновления состояния кнопок прокрутки
//   function updateScrollButtons() {
//     const scrollTop = list.scrollTop;
//     const maxScrollTop = list.scrollHeight - list.clientHeight;

//     // Показать/скрыть кнопку прокрутки вверх
//     document
//       .querySelector('.support-arrow-up')
//       .classList.toggle('visually-hidden', scrollTop === 0);

//     // Показать/скрыть кнопку прокрутки вниз
//     document
//       .querySelector('.support-arrow-down')
//       .classList.toggle('visually-hidden', scrollTop >= maxScrollTop);
//   }

//   // Добавление обработчиков событий для кнопок прокрутки
//   document
//     .querySelector('.support-arrow-up')
//     .addEventListener('click', scrollUp);
//   document
//     .querySelector('.support-arrow-down')
//     .addEventListener('click', scrollDown);

//   // Обновление состояния кнопок прокрутки при загрузке страницы
//   updateScrollButtons();
// });

const supportList = document.querySelector('.sidebar-swiper-list');
const arrowButton = document.querySelector('.support-arrow');
const arrowDown = document.querySelector('.support-arrow-down');
const arrowUp = document.querySelector('.support-arrow-up');

// Добавляем обработчик события на кнопку "вниз"
arrowButton.addEventListener('click', function () {
  arrowDown = document.querySelector('.support-arrow-down');
  // Прокручиваем вниз
  supportList.scrollBy({
    top: 170,
    behavior: 'smooth',
  });

  // Скрываем кнопку "вниз" и показываем кнопку "вверх"
  arrowDown.classList.add('visually-hidden');
  arrowUp.classList.remove('visually-hidden');
});

// Добавляем обработчик события на кнопку "вверх"
arrowButton.addEventListener('click', function () {
  arrowUp = document.querySelector('.support-arrow-up');
  // Прокручиваем вверх
  supportList.scrollBy({
    top: -170,
    behavior: 'smooth',
  });

  // Скрываем кнопку "вверх" и показываем кнопку "вниз"
  arrowUp.classList.add('visually-hidden');
  arrowDown.classList.remove('visually-hidden');
});

//Получаем список категорий
const categoryList = document.querySelector('.js-list');
//Добавляем класс для стилизации прокрутки
// categoryList.classList.add('scrollable');

// const categoryList = document.querySelector('.js-list');
// Проверяем, нужна ли прокрутка
// if (categoryList.scrollHeight > categoryList.clientHeight) {
//   categoryList.parentElement.style.overflowY = 'scroll';
// }
