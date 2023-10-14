import { getBookCategory } from '../category/api-requests';
import { getMarkupByCategory } from './books-markup';
import { booksSelectors } from './books-selectors';

// export async function createBookByCategory(event) {
//   if (event && event.target) {
//     const categoryToSearch = event.target.textContent;
//     let toSearchData = encodeURIComponent(categoryToSearch);
//     return toSearchData;
//   }
//   const data = await getBookByCategory(toSearchData);
//   console.log(data);
//   const bookList = document.createElement('ul');
//   bookList.classList.add('book-list');
//   //   bookList.innerHTML = markup;
//   booksSelectors.allCategoryName.insertAdjacentElement('afterend', bookList);

//   const markup = getMarkupByCategory(data);
//   //   booksSelectors.bookList.innerHTML = markup;
//   bookList.innerHTML = markup;
//   //   booksSelectors.booksContainer.innerHTML = '';
// }

export async function createBookByCategory(event) {
  const categoryToSearch = event.srcElement.innerText;
  //   booksSelectors.booksContainer.innerHTML = '';
  console.log(categoryToSearch);
  const toSearchData = encodeURIComponent(categoryToSearch); // Оголошення toSearchData
  const data = await getBookCategory(toSearchData);
  console.log(data);
  const bookList = document.createElement('ul');
  bookList.classList.add('book-list');
  booksSelectors.allCategoryName.insertAdjacentElement('afterend', bookList);

  const markup = getMarkupByCategory(data);
  bookList.innerHTML = markup;
}
