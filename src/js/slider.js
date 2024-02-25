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

document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelector('.sidebar-swiper-list');
  const scrollStep = 100; // Величина прокрутки

  // Функция прокрутки вверх
  function scrollUp() {
    list.scrollTop -= scrollStep;
    updateScrollButtons();
  }

  // Функция прокрутки вниз
  function scrollDown() {
    list.scrollTop += scrollStep;
    updateScrollButtons();
  }

  // Функция обновления состояния кнопок прокрутки
  function updateScrollButtons() {
    const scrollTop = list.scrollTop;
    const maxScrollTop = list.scrollHeight - list.clientHeight;

    // Показать/скрыть кнопку прокрутки вверх
    document
      .querySelector('.support-arrow-up')
      .classList.toggle('visually-hidden', scrollTop === 0);

    // Показать/скрыть кнопку прокрутки вниз
    document
      .querySelector('.support-arrow-down')
      .classList.toggle('visually-hidden', scrollTop === maxScrollTop);
  }

  // Добавление обработчиков событий для кнопок прокрутки
  document
    .querySelector('.support-arrow-up')
    .addEventListener('click', scrollUp);
  document
    .querySelector('.support-arrow-down')
    .addEventListener('click', scrollDown);

  // Обновление состояния кнопок прокрутки при загрузке страницы
  updateScrollButtons();
});
