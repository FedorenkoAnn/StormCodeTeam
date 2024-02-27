// Best Sellers Books

import {bookCount} from "./functions.js";
export const createGalleryTopBooks = (arr) => {
  return `<h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
  ${arr.map(item => {
    const markup = `
    <h2 class="books_card-heading js-heading">${item.list_name}</h2>
    <ul class="book_card-list" >
        ${item.books.slice(0, bookCount()).map(({ _id, book_image, title, author }) => {
         return `<li class="book_card-item js-card" id=${_id}>
                       <img
                         class="book_card_photo"
                         src=${book_image}
                         alt= book cover photo ${title}
                       />
                        <h3 class="book_card-title">${title}</h3>
                        <h4 class="book_card_author">${author}</h4>
                     </li>`
        })
      }
      </ul>
        <div class="btn_more">
    <button class="btn_see-more">See more</button>
    </div>`
    return markup
  })
    }
`
}