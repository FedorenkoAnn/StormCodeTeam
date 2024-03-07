//Получаем список категорий
const categoryList = document.querySelector('.js-list');
//Добавляем класс для стилизации прокрутки
// categoryList.classList.add('scrollable');

// const categoryList = document.querySelector('.js-list');
// Проверяем, нужна ли прокрутка
// if (categoryList.scrollHeight > categoryList.clientHeight) {
//   categoryList.parentElement.style.overflowY = 'scroll';
// }

const sliderList = document.querySelector('.sidebar-swiper-list');
const slides = document.querySelectorAll('.sidebar-company-img-box');
const nextBtn = document.querySelector('.support-arrow');
const visibleSlides = 6;
const totalSlides = slides.length;
let currentIndex = 0;
let scrollDirection = 'up';
nextBtn.addEventListener('click', onNextBtn);
function showSlide(index) {
  const offset = index * 170;
  sliderList.scrollTo({
    top: offset,
    behavior: 'smooth',
  });
}
function onNextBtn() {
  if (scrollDirection === 'up') {
    currentIndex += visibleSlides;
    if (currentIndex >= totalSlides) {
      currentIndex = totalSlides - visibleSlides;
      scrollDirection = 'down';
      nextBtn.style.transform = 'rotate(180deg)';
    }
  } else {
    currentIndex -= visibleSlides;
    if (currentIndex < 0) {
      currentIndex = 0;
      scrollDirection = 'up';
      nextBtn.style.transform = 'rotate(0deg)';
    }
  }
  showSlide(currentIndex);
  // Змінюємо напрямок після кожного кліку
  scrollDirection = scrollDirection === 'up' ? 'down' : 'up';
  nextBtn.style.transform = `rotate(${scrollDirection === 'up' ? 0 : 180}deg)`;
}
