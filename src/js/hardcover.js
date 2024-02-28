import { getByCategoryBooks } from './api.js';

const allCategoriesList = document.querySelector('.js-list');
const categoriesItem = document.querySelectorAll('.js-category');
const hardcoverBooksList = document.querySelector('.books-list');

let booksPerPage;

function renderBooks(category, booksByCategory) {
    const markup = createHardcoverMarkup(category, booksByCategory.slice(0, booksPerPage));
    hardcoverBooksList.innerHTML = markup;
}

function createHardcoverMarkup(category, booksByCategory) {
    const categoryTitle = `<h2 class="hardcover-category-title">${category.replace(/(\w+)\s*$/, '<span class="book-categories-span">$1</span>')}</h2>`;
    const booksByCategoryMarkup = booksByCategory.map(({ _id, book_image, title, author }) =>
        `<li class="hardcover-item" id=${_id}>         
            <div class="hardcover-container">
                <div class="hardcover-wrapper">
                <div class ="overlay-wrapper">
                    <img class="hardcover-image" src="${book_image}"/>
                    </div>
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

async function handleCategoryClick(event) {
    try {
        if (Array.from(categoriesItem).includes(event.target)) {
            const category = event.target.textContent.trim(); 
            const booksByCategory = await fetchBooksByCategory(category);
            renderBooks(category, booksByCategory);
        }
    } catch (error) {
        console.error(error);
    }
}

async function handleSeeMoreClick(event) {
    if (event.target.classList.contains('btn_see-more')) {
        try {
            const category = event.target.dataset.category.trim(); 
            const booksByCategory = await fetchBooksByCategory(category);
            renderBooks(category, booksByCategory);
        } catch (error) {
            console.error(error);
        }
    }
}

async function fetchBooksByCategory(category) {
    const response = await getByCategoryBooks(category);
    return response.data.map(({ _id, book_image, title, author }) => ({
        _id,
        book_image,
        title,
        author
    }));
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        booksPerPage = 7;
    } else {
        booksPerPage = 15;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        booksPerPage = 7;
    } else {
        booksPerPage = 15;
    }

    const bookCardListSeeMore = document.querySelector('.js-bookslist');
    bookCardListSeeMore.addEventListener('click', handleSeeMoreClick);

    allCategoriesList.addEventListener('click', handleCategoryClick);
});