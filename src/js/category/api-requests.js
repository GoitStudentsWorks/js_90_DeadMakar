import axios from 'axios';

const BASEURL = 'https://books-backend.p.goit.global/books/';

export async function getBookCategory() {
  const URL = `${BASEURL}category-list`;
  const response = await axios.get(URL);
  return response.data;
}

export async function getBestBook() {
  const URL = `${BASEURL}top-books`;
  const response = await axios.get(URL);
  return response.data;
}

<<<<<<< Updated upstream
export async function getBookByCategory(request) {
  const URL = `${BASEURL}category?category=${request}`;
=======
export async function getCategoryBook(category) {
  const URL = `${BASEURL} category?category=${category}`;
>>>>>>> Stashed changes
  const response = await axios.get(URL);
  return response.data;
}
