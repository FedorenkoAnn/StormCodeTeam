import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-scrollbar', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

const newSwiper = new Swiper('.swiper-container', {
  slidesPerView: 6,
  spaceBetween: 20,
  direction: 'vertical',
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const supportArrow = document.querySelector('.support-arrow');
  const sidebarList = document.querySelector('.sidebar-list-support');

  supportArrow.addEventListener('click', function () {
    // Прокрутка содержимого вниз на 100 пикселей
    sidebarList.scrollTop += 100;
  });
});
