import {getTopBooks} from "./api.js"
import{createGalleryTopBooks} from "./markup.js"

async function getRandomTopBooks() {
  const topBooks = await getTopBooks().then(data => {
    const arrTopBooks = [];
    let i = 0;
    for (const el of data) {
      if (arrTopBooks.length === 4) {
        break;
      }
      i = Math.round(Math.random() * data.length);
      if (!arrTopBooks.includes(data[i])) {
        arrTopBooks.push(data[i])
      }
    }
    return arrTopBooks;
  })
    .catch(err => console.log(err))

  cardList.innerHTML = createGalleryTopBooks(topBooks)
}



getRandomTopBooks()



