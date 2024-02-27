import throttle from 'lodash.throttle';

const scrollUpBtnEl = document.querySelector('.scroll-up');
scrollUpBtnEl.addEventListener('click', onScrollUpClick);

function onScrollUpClick() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
window.addEventListener('scroll', throttle(showScrollUpButton, 1000));

function showScrollUpButton(event) {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  scrollY > 300 ? showScrollUpBtn() : hideScrollUpBtn();
}

function hideScrollUpBtn() {
  scrollUpBtnEl.classList.add('is-hidden');
}

function showScrollUpBtn() {
  scrollUpBtnEl.classList.remove('is-hidden');
}
