// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
// const swiper = document.querySelector('swiper');

const swiper = new Swiper('swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: true,
  mousewhell: true,
  direction: 'vertical',
});

// Now you can use all slider methods like
swiper.slideNext();
