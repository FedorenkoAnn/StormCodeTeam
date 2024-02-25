import { getBookById } from './api';

const showLocalStorageBtn = document.querySelector('.js-shopping-list');
const localStorageBtn = document.querySelector('.shopping-list');
const textParagraph = document.querySelector('.empty-list-text');
const bookPlace = document.querySelector('.shopping-list-js');
const deleteBtn = document.querySelector('.delete-button');
let storedBookID;
// Отримання даних з бекенду і логіка роботи з local Storage

getBookById('643282b1e85766588626a0dc')
  .then(response => {
    const book = response.data;
    const {
      _id,
      book_image,
      title,
      list_name,
      description,
      author,
      buy_links,
    } = book;

    const selectedLinks = buy_links.slice(0, 2);

    const bookData = {
      id: _id,
      book_image,
      title,
      list_name,
      description,
      author,
      selectedLinks,
    };

    localStorage.setItem('bookData', JSON.stringify(bookData));

    function removeBookFromLS() {
      const storedData = JSON.parse(localStorage.getItem('bookData')) || {};
      if (storedData && storedData.id === bookData.id) {
        localStorage.removeItem('bookData');
      }
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });

// Додавання і видалення книги з сховища

localStorageBtn.addEventListener('click', optionsInLS);

function optionsInLS(e) {
  e.preventDefault();
  const buttonText = localStorageBtn.innerText.toLowerCase();
  if (buttonText.includes('add')) {
    getBookById();
  } else if (buttonText.includes('remove')) {
    removeBookFromLS();
  }
}

// Видалення книги з Shopping list через кошик

// deleteBtn.addEventListener('click', removeBookFromLS);

// Додавання книжок зі сховища в Shopping List

showLocalStorageBtn.addEventListener('click', onButtonClick);

function onButtonClick(e) {
  e.preventDefault();
  if (!localStorage.length) {
    textParagraph.textContent =
      'This page is empty, add some books and proceed to order.';
  } else {
  }
}

function bookTemplate() {
  return `<div class="book-card">
  <img src="${book_image}" alt="Book" class="book-cover">
  <div class="book-info">
    <h2 class="book-title">${title}</h2>
    <p class="book-category">${list_name}</p>
    <p class="book-description">${description}</p>
    <p class="book-author">${author}</p>
      <div class="book-links">
          <a href="${buy_links[0]}" class="book-link">amazon</a>
          <a href="${buy_links[1]}" class="book-link">apple</a>
      </div>
  </div>
  <button class="delete-button">Delete</button>
</div>`;
}

function renderBooks() {
  const markup = elems.map(elem => bookTemplate(elem)).join('');
  bookPlace.innerHTML = markup;
}
