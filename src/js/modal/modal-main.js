import { fetchBookById } from './modal-api';

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', async function (event) {
    const closestLi = event.target.closest('li.book-card' || 'li.book-item');

    if (closestLi) {
      const bookId = closestLi.dataset.id;

      try {
        const bookData = await fetchBookById(bookId);
        openModal();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });

  // Закриття модального вікна при кліку на хрестик
  const closeIcon = document.querySelector('.modal-icon-x-close');
  closeIcon.addEventListener('click', function () {
    closeModal();
  });

  // Закриття модального вікна при натисканні ESC
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  // Закриття модального вікна при кліку за межами модального вікна
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.modal-container')) {
      closeModal();
    }
  });
});

function openModal() {
  const modal = document.querySelector('.modal-section');
  modal.classList.remove('visually-hidden');
}

function closeModal() {
  const modal = document.querySelector('.modal-section');
  modal.classList.add('visually-hidden');
}
