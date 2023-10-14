import { shopCardMarkup } from './basket-markup';
import { onErrorStubMarkup } from './basket-markup';
import { selectors } from './basket-selectors';

selectors.shopRemoveBtn.addEventListener('click', onRemoveCard);

onGetLocalArr();

function onGetLocalArr() {
  try {
    const saveCardArr = JSON.parse(localStorage.getItem(STORED_BOOKS));

    if (saveCardArr.length === 0) {
      onErrorStubMarkup();
    }

    shopCardMarkup(saveCardArr);

    onRemoveCard(saveCardArr);
  } catch (error) {
    onErrorStubMarkup();
  }
}

function onRemoveCard(evt) {
  let removeArr = evt;
  const cardTarget = evt.currentTarget;
  const cardIndex = evt.indexOf(cardTarget);
  const removeIndex = evt.splice(cardIndex, 1);

  localStorage.setItem(STORED_BOOKS, JSON.stringify(removeArr));
}

// listItem.addEventListener("onclick", function(e) {
//   remove(e.target);
//   //функция получит в качестве аргумента объект по которому кликнули
// });
// function remove(o) {
//   // для удаления нужного нам элемента используем свойство объекта в котором хранится индекс
//   arrayForSort.splice(o.indexOfLi, 1);
// }

// function removeBook(currentBook) {
//     try {
//       const getQueueFromStorage = localStorage.getItem("'QueueBook")
//       const getQueueArray = JSON.parse(getQueueFromStorage)

//       const queueBookIndex = getQueueArray.findIndex(value => value.id === currentBook.id);
//       getQueueArray.splice(queueBookIndex, 1)
//       localStorage.setItem("QueueBook", JSON.stringify(getQueueArray))

//   } catch (error) {
//     // console.error(' error: ', error.message);
//   }
// }
// /
