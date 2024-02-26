import { getTopBooks } from "./api.js"
import { createGalleryTopBooks } from "./markup.js"
// import {bookList} from "./variables.js"
import { hardcoverBooksList } from "./hardcover.js"

async function getRandomTopBooks() {
  try {
    const response = await getTopBooks();
    const data = response.data;
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
    hardcoverBooksList.innerHTML = createGalleryTopBooks(arrTopBooks);
  } catch (err) {
    console.log(err);
  }
}
getRandomTopBooks()