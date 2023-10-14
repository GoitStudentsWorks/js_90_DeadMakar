import { categorySelectors } from '../category/category-selectors';
import { makeAllCategoriesContent } from './all-category-content';
import { createBookByCategory } from './book-by-category';
import { booksSelectors } from './books-selectors';

import { categorySelectors } from '../category/category-selectors';
import { makeAllCategoriesContent } from './all-category-content';

// makeAllCategoriesContent();

// categorySelectors.allCategory.addEventListener(
//   'click',
//   makeAllCategoriesContent
// );

// createBookByCategory();

categorySelectors.categoryList.addEventListener('click', createBookByCategory);
// categorySelectors.categoryItemAll.forEach(item => {
//   item.addEventListener('click', createBookByCategory);
// });
