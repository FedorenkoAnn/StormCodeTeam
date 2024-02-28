import { getBookById } from './js/api';
import amazon from './img/amazon@1x.png';
import amazon2x from './img/amazon@2x.png';
import applebooks from './img/app_books@1x.png';
import applebooks2x from './img/app_books@2x.png';
import logo from './img/against_hunger@2x.png';
import emptyDesk1 from './img/against_hunger@2x.png';
import emptyDesk2 from './img/against_hunger@1x.png';
import emptyMob1 from './img/amazon_color@2x.png';
import './js/api.js';
import './js/header.js';
import './shopping-list.js';

document.addEventListener('DOMContentLoaded', () => {
  const shoppingListContainer = document.querySelector(
    '.shopping-list-container'
  );
  // Отримуємо збережений список з локального сховища
  const savedShoppingList = localStorage.getItem('shoppingList');
  if (savedShoppingList) {
    const shoppingList = JSON.parse(savedShoppingList);
    // Викликаємо функцію для відображення елементів на сторінці
    renderShoppingList(shoppingList, shoppingListContainer);
  }
});
function renderShoppingList(shoppingList, container) {
  // Перебираємо елементи shoppingList і відображаємо їх
  shoppingList.forEach(book => {
    const bookElement = createBookElement(book);
    container.appendChild(bookElement);
  });
}
function createBookElement(book) {
  const { _id, book_image, title, author, description } = book;
  const bookElement = document.createElement('div');
  bookElement.classList.add('book-item');
  bookElement.innerHTML = `
    <img src="${book_image}" alt="${title}" />
    <h3>${title}</h3>
    <p>${author}</p>
    <p>${description}</p>
    <button onclick="removeBook('${_id}')">Remove from Shopping List</button>
  `;
  return bookElement;
}
function removeBook(bookId) {
  const savedShoppingList = localStorage.getItem('shoppingList');
  if (savedShoppingList) {
    let shoppingList = JSON.parse(savedShoppingList);
    // Видаляємо книгу за ідентифікатором
    shoppingList = shoppingList.filter(book => book._id !== bookId);
    // Оновлюємо локальне сховище з оновленим списком
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    // Перезавантажуємо сторінку, щоб побачити оновлений список
    location.reload();
  }
}
