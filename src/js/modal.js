import { getBookById } from './api';
import amazon1x from '../img/amazon@1x.png';
import amazon2x from '../img/amazon@2x.png';
import app_books1x from '../img/app_books@1x.png';
import app_books2x from '../img/app_books@2x.png';
const modalBodyEl = document.querySelector('.modal-body');
const backdrop = document.querySelector('.backdrop');
const modalCloseBtn = document.querySelector('.modal-close-btn');
let addToShoppingListBtn;
let shoppingList = [];
const savedShoppingList = localStorage.getItem('shoppingList');
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
      const markup = markupBook(bookData);
      openModal();
      addMarkup(modalBodyEl, markup);

      const modalBottomText = document.createElement('p');
      modalBottomText.textContent = `Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.`;
      modalBottomText.classList.add('modal-bottom-text', 'hidden');

      modalBodyEl.appendChild(modalBottomText);

      if (addToShoppingListBtn && addToShoppingListBtn.parentNode) {
        addToShoppingListBtn.parentNode.removeChild(addToShoppingListBtn);
      }
      addToShoppingListBtn = document.createElement('button');
      addToShoppingListBtn.textContent = shoppingList.includes(id)
        ? 'Remove from Shopping List'
        : 'Add to Shopping List';
      addToShoppingListBtn.classList.add('add-to-shopping-list-btn');
      if (shoppingList.includes(id)) {
        addToShoppingListBtn.textContent = 'Remove from Shopping List';
      }
      addToShoppingListBtn.addEventListener('click', () => {
        toggleShoppingList(id);
        toggleModalBottomText();
        addToShoppingListBtn.textContent = shoppingList.includes(id)
          ? 'Remove from Shopping List'
          : 'Add to Shopping List';
      });
      modalBodyEl.appendChild(addToShoppingListBtn);
    }
  } catch (error) {
    console.error(error);
  }
});

function toggleModalBottomText() {
  const modalBottomText = document.querySelector('.modal-bottom-text');
  if (modalBottomText) {
    modalBottomText.classList.toggle('hidden');
  }
}

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
            <img class="icon-amazon" src="../img/amazon@1x.png", "../img/amazon@2x.png" alt="amazon" />
            <img class="icon-apple" src="../img/app_books@1x.png", "../img/app_books@2x.png" alt="app_books" />
        </div>
      </div>
    </div>
     `;
}
function addMarkup(el, markup) {
  el.innerHTML = markup;
}
function toggleShoppingList(bookId) {
  if (!bookId) {
    console.error('Invalid bookId:', bookId);
    return;
  }
  const index = shoppingList.indexOf(bookId);
  if (index === -1) {
    shoppingList.push(bookId);
  } else {
    shoppingList.splice(index, 1);
  }
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  // Оновлюємо текст кнопки
  if (addToShoppingListBtn) {
    if (index === -1) {
      addToShoppingListBtn.textContent = 'Remove from Shopping List';
    } else {
      addToShoppingListBtn.textContent = 'Add to Shopping List';
    }
  }
}
