
//Перелік категорій книг

async function getCategoryList(){
  const categoryList = await axios.get(`https://books-backend.p.goit.global/books/category-list`);
  return categoryList;
}

//Популярні книги, що належать до усіх категорій

async function getTopBooks(){
  const topBooks = await axios.get(`https://books-backend.p.goit.global/books/top-books`);
  return topBooks;
}

// Книги окремої категорії

async function getByCategoryBooks(paramCategory){
  const categoryBooks = await axios.get(`https://books-backend.p.goit.global/books/category?category=${paramCategory}`);
  return categoryBooks;
}

// Детальна інформація про книгу

async function getByIdBook(paramId){
  const idBook = await axios.get(`https://books-backend.p.goit.global/books/${paramId}`);
  return idBook;
}

export { getCategoryList, getTopBooks, getByCategoryBooks, getByIdBook };