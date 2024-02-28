import { getTopBooks } from "./api.js"
import { createGalleryTopBooks } from "./markup.js"
import { booksList, topBooks, viewport } from "./variables.js"

getRandomTopBooks();

// Обробка запиту на сервер та рендер розмітки

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
    booksList.innerHTML = createGalleryTopBooks(arrTopBooks);
  } catch (err) {
    console.log(err);
  }
}

// Перезавантаження сторінки при зміні розміру в'юпорту

window.onresize = function (event) {
  const cur_viewport = document.documentElement.clientWidth;
  if (cur_viewport < 768 && viewport >= 768) {
    location.reload()
  } else if (cur_viewport < 1440 && viewport >= 1440) {
    location.reload()
  } else if (cur_viewport >= 768 && viewport < 768) {
    location.reload()
  } else if(cur_viewport >= 1440 && viewport < 1440) {
    location.reload()
  }
};

// Завантаження домашньої сторінки на кліку на категорію "All categories"

topBooks.addEventListener("click", onTopBooks)
function onTopBooks(evt) {
  getRandomTopBooks();
}