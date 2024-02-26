// Best Sellers Books
export const createGalleryTopBooks = (arr) => {
  return arr.map(item => {
    const markup = `<h1 class="card_title-section js-heading">${item.list_name}</h1>
      <ul>
        ${item.books.map(({ _id, book_image, title, author }) => {
          return  `<ul class="card-list" >
                     <li class="card-item js-card" id=${_id}>
                       <img
                         class="card_photo"
                         src=${book_image}
                         alt= book cover photo ${title}
                       />
                        <h3 class="card_book-title">${title}</h3>
                        <h4 class="card_author-title">${author}</h4>
                     </li>
                   </ul>`  
        })
        }
      </ul>
    <btn>See more</btn>
      `
    return markup
  })
}