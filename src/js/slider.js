// import Swiper from 'swiper/bundle';

// import 'swiper/css/bundle';

// const swiper = new Swiper('.swiper-scrollbar', {
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
// });

// const newSwiper = new Swiper('.swiper-container', {
//   slidesPerView: 6,
//   spaceBetween: 20,
//   direction: 'vertical',
//   speed: 400,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// function handlerClick() {
//   arrowDown.classList.toggle('visually-hidden');
//   arrowUp.classList.toggle('visually-hidden');

//   supportList.scroll({
//     top: 170,
//     left: 0,
//     behavior: 'smooth',
//   });

//   if (arrowUp.classList.contains('visually-hidden')) {
//     supportList.scroll({
//       top: -170,
//       left: 0,
//       behavior: 'smooth',
//     });
//   }
// }

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

// =======================================================================================

// document.addEventListener('DOMContentLoaded', function () {
//   var list = document.querySelector('.sidebar-swiper-list');
//   var scrollStep = 100; // Величина прокрутки

//   // Функция прокрутки вверх
//   function scrollUp() {
//     list.scrollTop -= scrollStep;
//     updateScrollButtons();
//   }

//   // Функция прокрутки вниз
//   function scrollDown() {
//     list.scrollTop += scrollStep;
//     updateScrollButtons();
//   }

//   // Функция обновления состояния кнопок прокрутки
//   function updateScrollButtons() {
//     var scrollTop = list.scrollTop;
//     var maxScrollTop = list.scrollHeight - list.clientHeight;

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
const arrowDown = document.querySelector('.support-arrow-down');
const arrowUp = document.querySelector('.support-arrow-up');

// Добавляем обработчик события на кнопку "вниз"
arrowDown.addEventListener('click', function () {
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
arrowUp.addEventListener('click', function () {
  // Прокручиваем вверх
  supportList.scrollBy({
    top: -170,
    behavior: 'smooth',
  });

  // Скрываем кнопку "вверх" и показываем кнопку "вниз"
  arrowUp.classList.add('visually-hidden');
  arrowDown.classList.remove('visually-hidden');
});
