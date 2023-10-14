import { categorySelectors } from '../category/category-selectors';
import { createBookByCategory } from './book-by-category';

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
