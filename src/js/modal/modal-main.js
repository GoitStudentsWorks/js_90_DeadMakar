import { fetchBookById } from './modal-api';
import { saveBookToStorage, getStoredBooks } from './modal-local-storage';

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', async function (event) {
    const closestLi = event.target.closest('li.book-card');

    if (closestLi) {
      const bookId = closestLi.dataset.id;
      console.log(bookId);

      try {
        const bookData = await fetchBookById(bookId);
        console.log(bookData);
        await saveBookToStorage(bookId, bookData);

        const buyLinks = bookData.buy_links;
        const amazonLink = buyLinks.find(link => link.name === 'Amazon');
        const appleBooksLink = buyLinks.find(
          link => link.name === 'Apple Books'
        );
        console.log(amazonLink);
        console.log(appleBooksLink);
        const storedBooks = await getStoredBooks();
        console.log('Stored Books:', storedBooks);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
});
