import { getBestBook } from '../category/api-requests';
import { getMarkupBestBooks } from './books-markup';
import { booksSelectors } from './books-selectors';
import { categorySelectors } from '../category/category-selectors';
import Notiflix from 'notiflix';

// let darkTheme = true;

export async function makeAllCategoriesContent() {
  try {
    showAllCategories()
  } catch (error) {
    Notiflix.Notify.info('Sorry, no books found..');
  }
}



export async function showAllCategories() {
  booksSelectors.allCategoryName.innerHTML =
      'Best Sellers <span class ="category-name-bold">Books</span>';
    categorySelectors.allCategory.classList.add('category-active');
    const bestBooksData = await getBestBook();

    const bestBookMarkup = getMarkupBestBooks(bestBooksData);
    booksSelectors.onlyBooksContent.insertAdjacentHTML(
      'beforeend',
      bestBookMarkup)
}



