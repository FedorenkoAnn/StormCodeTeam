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
