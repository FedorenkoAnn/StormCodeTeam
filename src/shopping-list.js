import { getBookById } from './js/api';
import amazon from './img/amazon@1x.png';
import amazon2x from './img/amazon@2x.png';
import applebooks from './img/app_books@1x.png';
import applebooks2x from './img/app_books@2x.png';
import logo from './img/against_hunger@2x.png';
import emptyDesk1 from './img/against_hunger@2x.png';
import emptyDesk2 from './img/against_hunger@1x.png';
import emptyMob1 from './img/amazon_color@2x.png';

const KEY_LOCAL_STORAGE = 'shoppingList';
const showLocalStorageBtn = document.querySelector('.js-shopping-list');
const bookPlace = document.querySelector('.js-container');
const descEmpty = 'Description is not available.';

// Отримуємо дані з локального сховища
function parseStorage(key) {
  try {
    const parsedData = localStorage.getItem(key);
    console.log(parsedData);
    return parsedData === null ? [] : JSON.parse(parsedData);
  } catch (error) {
    console.error('Error getting state: ', error.message);
    return [];
  }
}

// Функція для збереження даних в localStorage
function setStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving state: ', error.message);
  }
}

// Функція для рендерінгу списку книг з localStorage
function renderBooks() {
  const shopListCard = parseStorage(KEY_LOCAL_STORAGE);
  if (shopListCard && shopListCard.length > 0) {
    bookPlace.innerHTML = '';
    bookPlace.insertAdjacentHTML('afterbegin', bookTemplate(shopListCard));
    bookPlace.addEventListener('click', deleteCard);
  } else {
    createEmpty();
  }
}

// Відображення списку при завантаженні сторінки
renderBooks();

// Функція для рендерінгу шаблону списку книг з localStorage
function bookTemplate(shopListCard) {
  return shopListCard
    .map(({ book_image, title, author, description, buy_links }, index) => {
      if (!description) {
        description = descEmpty;
      }
      return `<li class="shopping-list-item">
      <img class="shopping-list-card-img" src="${book_image}" alt="${title}">
      <div class="shopping-list-card-container">
        <h2 class="shopping-list-card-title">${title}</h2>
        <p class="shopping-list-card-text">Hardcover fiction</p>
        <p class="shopping-list-card-desc">${description}</p>
        <div class="shopping-list-card-bottom-container">
          <p class="shopping-list-card-author">${author}</p>
          <div class="shopping-list-card-container-img">
            // <a href="${buy_links[0]}" class="shopping-amazon-link" rel="noopener noreferrer nofollow" target="_blank">
            //   <img class="shopping-list-card-icon-amazon" srcset="${amazon2x} 2x, ${amazon} 1x" src="${amazon}" alt="Amazon" loading="lazy" width="20" height="20">
            // </a>
            // <a href="${buy_links[1]}" class="shopping-book-link" rel="noopener noreferrer nofollow" target="_blank">
            //   <img class="shopping-list-card-icon-book" srcset="${applebooks2x} 2x, ${applebooks} 1x" src="${applebooks}" alt="Apple books" loading="lazy">
            </a>
          </div>
        </div>
        <div>
          // <button class="btn-shop shopping-list-card-container-trash" data-index="${index}">
          //   <svg class="shopping-list-card-icon-trash" width="18px" height="18px">
          //     <use href="${logo}#icon-del"></use>
          //   </svg>
          // </button>
        </div>
      </div>
    </li>`;
    })
    .join('');
}

// Функція для створення пустого повідомлення
function createEmpty() {
  bookPlace.innerHTML = `
    <p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      class="shopping-list-image"
      srcset="${emptyDesk1} 1x, ${emptyDesk2} 2x"
      src="${emptyMob1}"
      alt="books"
      width="265"
      height="198"
    />`;
}

// Функція для видалення книги зі списку
function deleteCard(e) {
  e.preventDefault(); // Prevent the default action of the event
  const target = e.target.closest('.btn-shop');
  if (target) {
    const index = target.dataset.index;
    const shopListCard = parseStorage(KEY_LOCAL_STORAGE);
    shopListCard.splice(index, 1);
    setStorage(KEY_LOCAL_STORAGE, shopListCard);
    renderBooks();
  }
}
