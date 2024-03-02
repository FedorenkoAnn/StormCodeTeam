import amazon from './img/amazon@1x.png';
import amazon2x from './img/amazon@2x.png';
import applebooks from './img/app_books@1x.png';
import applebooks2x from './img/app_books@2x.png';
import logo from './img/sprite.svg';

document.addEventListener('DOMContentLoaded', () => {
  let currentPage = 1;
  const shoppingListContainer = document.querySelector(
    '.shopping-list-container'
  );
  const shopContainer = document.querySelector('.shop-container');
  const target = document.querySelector('.js-guard');
  let options = {
    root: null,
    rootMargin: '300px',
    threshold: 1.0,
  };

  let observer = new IntersectionObserver(onLoad, options);

  function onLoad(entries, observer) {
    const savedShoppingList = localStorage.getItem('shoppingList');
    let shoppingList = [];
    if (savedShoppingList) {
      shoppingList = JSON.parse(savedShoppingList);
    }
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentPage += 1;
        renderShoppingList(shoppingList, shoppingListContainer);
        if (!shoppingList.length) {
          observer.unobserve(target);
        }
      }
    });
  }

  // Отримуємо збережений список з локального сховища
  const savedShoppingList = localStorage.getItem('shoppingList');
  if (savedShoppingList) {
    const shoppingList = JSON.parse(savedShoppingList);
    if (shoppingList.length > 0) {
      // Викликаємо функцію для відображення елементів на сторінці, якщо список не порожній
      renderShoppingList(shoppingList, shoppingListContainer);
      observer.observe(target);
      // Видаляємо клас visual-hidden
      shopContainer.classList.add('visually-hidden');
    } else {
      // Якщо список порожній, встановлюємо клас visual-hidden на shopContainer
      shopContainer.classList.remove('visually-hidden');
    }
  } else {
    // Якщо збережений список не існує, також встановлюємо клас visual-hidden на shopContainer
    shopContainer.classList.add('visually-hidden');
  }
});

function renderShoppingList(shoppingList, container) {
  container.innerHTML = '';
  // Перебираємо елементи shoppingList і відображаємо їх
  shoppingList.forEach((book, index) => {
    const bookElement = createBookElement(book, index); // Передаємо індекс у функцію
    container.appendChild(bookElement);
  });
}
function createBookElement(book, index) {
  const {
    _id,
    book_image,
    title,
    author,
    description,
    amazonLinks,
    appleLinks,
    list_name,
  } = book; // Add amazonLinks and appleLinks to destructuring
  // const bookElementText = document.createElement('h1');
  // bookElement.classList.add('shopping-list-title');
  const bookElement = document.createElement('div');
  bookElement.classList.add('shopping-list-card-box');
  bookElement.innerHTML = `
    <img class="shopping-list-card-img" src="${book_image}" alt="${title}" />
    <div class="shopping-description-wrap">
      <div class="shopping-text-wrap">
      <h2 class="shopping-list-card-title">${title}</h2>
      <p class="shopping-list-category">${list_name}</p>
      </div>
      ${
        description
          ? `<p class="shopping-list-card-paragraf">${description}</p>`
          : `<p class="shopping-list-card-paragraf">There is no description for this book</p>`
      }
      <div class="shopping-list-card-container-img">
        <a href="${
          book.buy_links[0].url
        }" class="shopping-amazon-link" rel="noopener noreferrer nofollow" target="_blank">
          <img class="shopping-list-card-icon-amazon" srcset="${amazon2x} 2x, ${amazon} 1x" src="${amazon}" alt="Amazon" loading="lazy" width="20" height ="20">
        </a>
        <a href="${
          book.buy_links[1].url
        }" class="shopping-book-link" rel="noopener noreferrer nofollow" target="_blank">
          <img class="shopping-list-card-icon-book" srcset="${applebooks2x} 2x, ${applebooks} 1x" src="${applebooks}" alt="Apple books" loading="lazy" width="20" height ="20">
        </a>
      </div>
      <p class="shopping-list-card-img-paragraf">${author}</p>
    </div>
    <button class="btn-shop shopping-list-card-container-trash" id="${index}">
      <svg class="shopping-list-card-icon-trash" width="24px" height="24px">
        <use href="${logo}#icon-dump"></use>
      </svg>
    </button>
  `;
  // Додаємо обробник подій для кнопки "Видалити зі списку покупок"
  const removeButton = bookElement.querySelector('.btn-shop');
  removeButton.addEventListener('click', () => {
    removeBook(_id); // Викликаємо функцію removeBook() з потрібним ідентифікатором
  });
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
