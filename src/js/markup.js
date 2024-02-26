// Best Sellers Books
// import {viewport} from "./variables.js" 
export const createGalleryTopBooks = (arr) => {
  return `<h1 class="books_galerry-title">Best Sellers <span class="books_galerry-title-subject">Books</span></h1>
  ${arr.map(item => {const markup = `
    <h2 class="books_card-heading js-heading">${item.list_name}</h2>
        ${item.books.map(({ _id, book_image, title, author }) => {
          return  `<ul class="book_card-list" >
                     <li class="book_card-item js-card" id=${_id}>
                       <img
                         class="book_card_photo"
                         src=${book_image}
                         alt= book cover photo ${title}
                       />
                        <h3 class="book_card-title">${title}</h3>
                        <h4 class="book_card_author">${author}</h4>
                     </li>
                   </ul>`  
        })
        }
        <div class"btn_more">
    <button class="btn_see-more">See more</button>
    </div>`
    return markup
  })
}
`
}
//   return arr.map(item => {
//     const markup = `
//     <h1 class="books_galerry">Best Sellers Books</h1>
//     <h2 class="books_card-heading js-heading">${item.list_name}</h2>
     
//         ${item.books.map(({ _id, book_image, title, author }) => {
//           return  `<ul class="book_card-list" >
//                      <li class="book_card-item js-card" id=${_id}>
//                        <img
//                          class="book_card_photo"
//                          src=${book_image}
//                          alt= book cover photo ${title}
//                        />
//                         <h3 class="book_card-title">${title}</h3>
//                         <h4 class="book_card_author">${author}</h4>
//                      </li>
//                    </ul>`  
//         })
//         }
//     <btn class="btn_see-more">See more</btn>
//     </section> `
//     return markup
//   })
// }