import { getBookById } from './api';
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
    const hardcoverItem = event.target.closest('.hardcover-item');
    if (hardcoverItem) {
      const id = hardcoverItem.id;
      const response = await getBookById(id);
      const bookData = response.data;
      const markup = markupBook(bookData);
      openModal();
      addMarkup(modalBodyEl, markup);
      if (addToShoppingListBtn && addToShoppingListBtn.parentNode) {
        addToShoppingListBtn.parentNode.removeChild(addToShoppingListBtn);
      }
      addToShoppingListBtn = document.createElement('button');
      addToShoppingListBtn.textContent = 'Add to Shopping List';
      addToShoppingListBtn.classList.add('add-to-shopping-list-btn');
      if (shoppingList.includes(id)) {
        addToShoppingListBtn.textContent = 'Remove from Shopping List';
      }
      addToShoppingListBtn.addEventListener('click', () => {
        toggleShoppingList(id);
      });
      modalBodyEl.appendChild(addToShoppingListBtn);
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
      <ul class="list-details">
        <li class="title">${title}</li>
        <li class="list-name">${author}</li>
        <li class="list-descr">${description}</li>
        <div class="list-links">
          <li class="list-amazon">
            <img src="./img/amazon.png" alt="amazon" />
          </li>
          <li class="list-google">
            <img src="./img/google.png" alt="google" />
          </li>
        </div>
      </ul>
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
