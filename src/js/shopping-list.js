import { getBookById } from './api';

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
      if (storedData.id === bookData.id) {
        localStorage.removeItem('bookData');
      }
    }
    removeBookFromLS();
  })
  .catch(error => {
    console.log('Error:', error);
  });

const showSLbtn = document.querySelector('.js-btn');
const textParagraph = document.querySelector('.empty-list-text');
const bookPlace = document.querySelector('.shopping-list-js');
console.log(bookPlace);

showSLbtn.addEventListener('click', onButtonClick);

function onButtonClick(e) {
  e.preventDefault();
  if (!localStorage.length) {
    textParagraph.textContent =
      'This page is empty, add some books and proceed to order.';
  } else {
  }
}

function bookTemplate() {
  return `
      <div class="book-body">
        
      </div>`;
}

function renderBooks() {
  const markup = elems.map(elem => bookTemplate(elem)).join('');
  bookPlace.innerHTML = markup;
}
