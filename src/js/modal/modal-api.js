import axios from 'axios';
import { BASEURL } from '../category/api-requests';

export async function getBookById(bookId) {
  const URL_ID = `${BASEURL}${bookId}`;
  try {
    const response = await axios.get(URL_ID);
    const bookData = response.data;

    const STORED_BOOKS = JSON.parse(localStorage.getItem('storedBooks')) || {};
    STORED_BOOKS[bookId] = bookData;
    localStorage.setItem('storedBooks', JSON.stringify(STORED_BOOKS));

    return bookData;
  } catch (error) {
    console.error(`Error fetching book with ID ${bookId}:`, error);
    throw error;
  }
}
