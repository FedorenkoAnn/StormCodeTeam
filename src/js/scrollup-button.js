import throttle from 'lodash.throttle';
const scrollUpBtnEl = document.querySelector('.scroll-up');
scrollUpBtnEl.addEventListener('click', onScrollUpClick);
window.addEventListener('scroll', throttle(showScrollUpButton, 1000));
// Приховати кнопку при завантаженні сторінки
hideScrollUpBtn();
function onScrollUpClick() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
function showScrollUpButton(event) {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const isAtTop = scrollY === 0; // Перевірка, чи користувач вже на самому верху сторінки
  // Оновлені умови
  if (scrollY > 100 && !isAtTop) {
    showScrollUpBtn();
  } else {
    hideScrollUpBtn();
  }
}
function hideScrollUpBtn() {
  scrollUpBtnEl.classList.add('is-hidden');
}
function showScrollUpBtn() {
  scrollUpBtnEl.classList.remove('is-hidden');
}
