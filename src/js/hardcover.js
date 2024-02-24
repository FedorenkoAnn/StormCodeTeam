import { getByCategoryBooks } from './api.js';

const allCategoriesBtn = document.querySelector('.test-button');
const hardcoverBooksList = document.querySelector('.books-list');

document.addEventListener('DOMContentLoaded', () => {
    const isButtonHidden = localStorage.getItem('isButtonHidden');
    if (isButtonHidden === 'true') {
        allCategoriesBtn.style.display = 'none';
    }
});

allCategoriesBtn.addEventListener('click', async () => {
    try {
        const category = 'Hardcover Fiction'; 
        const response = await getByCategoryBooks(category);
        const books = response.data;
        const booksByCategory = books.map(({ book_image, title, author }) => ({
            book_image,
            title,
            author
        }));
        const markup = createHardcoverMarkup(category, booksByCategory);

        hardcoverBooksList.innerHTML = markup;

        localStorage.setItem('isButtonHidden', 'true');
        allCategoriesBtn.style.display = 'none';
    } catch (error) {
        console.error(error);
    }
});

function createHardcoverMarkup(category, booksByCategory) {
    const categoryTitle = `<h2 class="hardcover-category-title">${category.replace(/(\w+)/g, (match, p1, offset) => offset === 0 ? match : `<span class="book-categories-span">${match}</span>`)}</h2>`;
    const booksMarkup = booksByCategory.map(({ book_image, title, author }) =>
        `<li class="hardcover-item">         
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
    return categoryTitle + '<ul class="hardcover-list">' + booksMarkup + '</ul>';
}