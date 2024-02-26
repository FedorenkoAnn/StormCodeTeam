// import axios from 'axios';
// import { getBookById } from './api';

// getBookDyId('_id').then(response => {
//   const book = response.data;
//   const { _id, book_image, list_name, description, author } = book;
// });

// function markupBook(book) {
//   const { id, book_image, list_name, author, description } = book;

//   return `<div class="modal-body" data-bookid="${id}">
//       <div class="image-container">
//         ${book_image}
//       </div>
//       <div class="list-container">
//         <ul class="list-details">
//           <li class="title">${list_name}</li>
//           <li class="list-name">${author}</li>
//           <li class="list-descr">
//             ${description}
//           </li>
//           <div class="list-links">
//             <li class="list-amazon">
//               <img src="./img/amazon.png" alt="amazon" />
//             </li>
//             <li class="list-google">
//               <img src="./img/google.png" alt="google" />
//             </li>
//           </div>
//         </ul>
//       </div>
//     </div>`;
// }

// const modalBodyEl = document.querySelector('.modal-body');

// function addMarkup(el, markup) {
//   el.innerHTML = markup;
// }

// async function init() {
//   try {
//     const data = await getBookById('idBook');
//     const markup = markupBook(data);
//     addMarkup(modalBodyEl, markup);
//   } catch (error) {
//     console.error(error);
//   }
// }
// init();

// const modalCloseBtn = document.querySelector('.modal-close-btn');
// const backdrop = document.querySelector('.backdrop');
// function closeModal() {
//   const backdrop = document.querySelector('.backdrop');
//   backdrop.style.display = 'none';
// }

// modalCloseBtn.addEventListener('click', () => {
//   closeModal();
// });

// function openModal() {
//   const backdrop = document.querySelector('.backdrop');
//   backdrop.style.display = 'block';
// }
// function toggleShoppingList() {
//   const shoppingListButton = document.querySelector('.shopping-list');
//   if (shoppingListButton.textContent === 'Add to shopping list') {
//     shoppingListButton.textContent = 'Remove from the shopping list';
//   } else {
//     shoppingListButton.textContent = 'Add to shopping list';
//   }
// }
// document
//   .querySelector('.shopping-list')
//   .addEventListener('click', toggleShoppingList);

// // function darkTheme() {
// //   const modalCloseBtnIcon = document.querySelector('modal-close-btn-icon use');
// //   const modalContentElem = document.querySelector('.modal-content');
// //   const titleElem = document.querySelector('.title');
// //   const listNameElem = document.querySelector('.list-name');
// //   const listDescrElem = document.querySelector('.list-descr');
// //   const shoppingListElem = document.querySelector('.shopping-list');
// //   const modalBottomTextElem = document.querySelector('.modal-bottom-text');

// //    modalCloseBtnIcon.setAttribute('href', './img/icons.svg#icon-close-white');
// //   modalContentElem.style.backgroundColor = 'rgb(208, 208, 208)';
// //   titleElem.style.color = 'rgb(255, 255, 255)';
// //   listNameElem.style.color = 'rgb(255, 255, 255)';
// //   listDescrElem.style.color = 'rgb(255, 255, 255)';
// //   shoppingListElem.style.color = 'rgb(255, 255, 255)';
// //   modalBottomTextElem.style.color = 'rgb(255, 255, 255)';
// // }
// //  darkTheme();
