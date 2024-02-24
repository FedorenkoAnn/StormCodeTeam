import { getByCategoryBooks } from './api.js';

const allCategoriesList = document.querySelector('.js-list');
const categoriesItem = document.querySelectorAll('.js-category');
const hardcoverBooksList = document.querySelector('.books-list');

// document.addEventListener('DOMContentLoaded', () => {
//     const isButtonHidden = localStorage.getItem('isButtonHidden');
//     if (isButtonHidden === 'true') {
//         allCategoriesList.style.display = 'none';
//     }
// });

allCategoriesList.addEventListener('click', async (event) => {
    try {
        if (Array.from(categoriesItem).includes(event.target)) {
            const category = event.target.textContent.trim(); 
            const response = await getByCategoryBooks(category);
            const books = response.data; 
            console.log(books);

            const booksByCategory = books.map(({ _id, book_image, title, author }) => ({
                book_image,
                title,
                author,
                _id
            }));
            const markup = createHardcoverMarkup(category, booksByCategory);

            hardcoverBooksList.innerHTML = markup;

            localStorage.setItem('isButtonHidden', 'true');
        }
    } catch (error) {
        console.error(error);
    }
});

function createHardcoverMarkup(category, booksByCategory) {
    const categoryTitle = `<h2 class="hardcover-category-title">${category.replace(/(\w+)/g, (match, p1, offset) => offset === 0 ? match : `<span class="book-categories-span">${match}</span>`)}</h2>`;
    const booksByCategoryMarkup = booksByCategory.map(({ _id, book_image, title, author }) =>
        `<li class="hardcover-item" id=${_id}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                    <img class="hardcover-image" src="${book_image}"/>
                    <div class="hardcover-text-container">
                        <h2 class="hardcover-title">${title}</h2>
                        <p class="hardcover-text">${author}</p>
                    </div>
                </div>
            </div>
        </li>`
    ).join('');
    return categoryTitle + '<ul class="hardcover-list">' + booksByCategoryMarkup + '</ul>';
}