<<<<<<< Updated upstream
import { booksSelectors } from './books-selectors';
=======
>>>>>>> Stashed changes
export function getMarkupBestBooks(bookData) {
  const markup = bookData
    .map(item => {
      return `
        <div class="category-box">
            <h2 class="category-name">${item.list_name}</h2>
            <ul class="book-list">
                ${item.books
                  .slice(0, 5)
                  .map(
                    book => `
                    <li class="book-card" data-id="${book._id}">
                        <img class="photo-card" src="${book.book_image}" alt="${book.title}" />
                        <h3 class="book-name">${book.title}</h3>
                        <p class="book-author">${book.author}</p>
                    </li>`
                  )
                  .join('')}
            </ul>
            <button class="btn-book-open-category">see more</button>
        </div>
        `;
    })
    .join('');

  return markup;
}

<<<<<<< Updated upstream
// ---------------

export function getMarkupByCategory(data) {
  const markup = data
    .map(item => {
      return `
        <li class="book-item" data-id="${item._id}">
          <img class="photo-card" src="${item.book_image}" alt="${item.title}" />
          <h3 class="book-name">${item.title}</h3>
          <p class="book-author">${item.author}</p>
        </li>`;
    })
    .join('');
  return markup;
}
=======
//     <ul class="book-list">
//                     <li class="book-card" data-id="${book._id}">
//                         <img class="photo-card" src="${book.book_image}" alt="${book.title}" />
//                         <h3 class="book-name">${book.title}</h3>
//                         <p class="book-author">${book.author}</p>
//                     </li>
//    </ul>
>>>>>>> Stashed changes
