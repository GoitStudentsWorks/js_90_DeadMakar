import { getAndDisplayBookById } from './modal-bookmarkup';

const list = document.querySelector('.category-list');

list.addEventListener('click', async event => {
  if (event.target.classList.contains('category-item')) {
    const bookId = event.target.dataset.id;

    try {
      await getAndDisplayBookById(bookId);
    } catch (error) {
      console.error('Error handling click event:', error);
    }
  }
});
