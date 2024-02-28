import { getBookById } from './api';
import amazon1x from '../img/amazon@1x.png';
import app_books1x from '../img/app_books@1x.png';

const modalBodyEl = document.querySelector('.modal-body');
const backdrop = document.querySelector('.backdrop');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalBottomText = document.querySelector('.modal-bottom-text');

let addToShoppingListBtn;
let shoppingList = [];

// Використовуйте константу для ключа у локальному сховищі

const BOOKS_STORAGE_KEY = 'shoppingList';
const savedShoppingList = localStorage.getItem(BOOKS_STORAGE_KEY);
if (savedShoppingList) {
  shoppingList = JSON.parse(savedShoppingList);
}
modalCloseBtn.addEventListener('click', closeModal);
document.addEventListener('click', async event => {
  try {
    const hardcoverItem =
      event.target.closest('.hardcover-item') ||
      event.target.closest('.js-card');
    if (hardcoverItem) {
      const id = hardcoverItem.id;
      const response = await getBookById(id);
      const bookData = response.data;
      const truncatedBookData = {
        _id: bookData._id,
        book_image: bookData.book_image,
        title: bookData.title,
        list_name: bookData.list_name,
        description: bookData.description,
        author: bookData.author,
        buy_links: bookData.buy_links.slice(0, 2),
      };
      const markup = markupBook(truncatedBookData);
      openModal();
      addMarkup(modalBodyEl, markup);

      if (addToShoppingListBtn && addToShoppingListBtn.parentNode) {
        addToShoppingListBtn.parentNode.removeChild(addToShoppingListBtn);
      }
      addToShoppingListBtn = document.createElement('button');
      addToShoppingListBtn.textContent = shoppingList.some(
        book => book._id === id
      )
        ? 'Remove from Shopping List'
        : 'Add to Shopping List';
      addToShoppingListBtn.classList.add('add-to-shopping-list-btn');
      addToShoppingListBtn.addEventListener('click', () => {
        toggleShoppingList(truncatedBookData);
      });
      modalBodyEl.appendChild(addToShoppingListBtn);

      // Зберігаємо інформацію про книгу в local storage

      localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(shoppingList));
    }
  } catch (error) {
    console.error(error);
  }
});

backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    closeModal();
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
function openModal() {
  backdrop.style.display = 'block';
}
function closeModal() {
  backdrop.style.display = 'none';
}
function markupBook(book) {
  const { book_image, list_name, title, author, description } = book;
  return `<div class="image-container">
      <img src="${book_image}" alt="${list_name}" />
    </div>
    <div class="list-container">
      <div class="list-details">
        <h2 class="modal-title">${title}</h2>
        <p class="list-name">${author}</p>
      </div>
        <p class="list-descr">${description}</p>
        <div class="list-links">
         <a href="${book.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank"> 
            <img class="icon-amazon" src="${amazon1x}" alt="amazon" />
         </a>
         <a href="${book.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank"> 
            <img class="icon-apple" src="${app_books1x}" alt="amazon" />
          </a>
        </div>
       
      </div>
     
    
     `;
}
function addMarkup(el, markup) {
  el.innerHTML = markup;
}
function toggleShoppingList(book) {
  if (!book || !book._id) {
    console.error('Invalid book:', book);
    return;
  }
  const index = shoppingList.findIndex(item => item._id === book._id);
  if (index === -1) {
    shoppingList.push(book);
    modalBottomText.style.display = 'block';
  } else {
    shoppingList.splice(index, 1);
    modalBottomText.style.display = 'none';
  }
  localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(shoppingList));
  if (addToShoppingListBtn) {
    addToShoppingListBtn.textContent = shoppingList.some(
      item => item._id === book._id
    )
      ? 'Remove from Shopping List'
      : 'Add to Shopping List';
  }
}
