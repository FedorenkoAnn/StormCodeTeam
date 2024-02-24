function closeModal() {
  const backdrop = document.querySelector('.backdrop');
  backdrop.style.display = 'none';
}
function openModal() {
  const backdrop = document.querySelector('.backdrop');
  backdrop.style.display = 'block';
}
function toggleShoppingList() {
  const shoppingListButton = document.querySelector('.shopping-list');
  if (shoppingListButton.textContent === 'Add to shopping list') {
    shoppingListButton.textContent = 'Remove from the shopping list';
  } else {
    shoppingListButton.textContent = 'Add to shopping list';
  }
}
document
  .querySelector('.shopping-list')
  .addEventListener('click', toggleShoppingList);

function darkTheme() {
  // const modalCloseBtnIcon = document.querySelector('modal-close-btn-icon use');
  const modalContentElem = document.querySelector('.modal-content');
  const titleElem = document.querySelector('.title');
  const listNameElem = document.querySelector('.list-name');
  const listDescrElem = document.querySelector('.list-descr');
  const shoppingListElem = document.querySelector('.shopping-list');
  const modalBottomTextElem = document.querySelector('.modal-bottom-text');

  // modalCloseBtnIcon.setAttribute('href', './img/icons.svg#icon-close-white');
  modalContentElem.style.backgroundColor = 'rgb(208, 208, 208)';
  titleElem.style.color = 'rgb(255, 255, 255)';
  listNameElem.style.color = 'rgb(255, 255, 255)';
  listDescrElem.style.color = 'rgb(255, 255, 255)';
  shoppingListElem.style.color = 'rgb(255, 255, 255)';
  modalBottomTextElem.style.color = 'rgb(255, 255, 255)';
}
// darkTheme();
