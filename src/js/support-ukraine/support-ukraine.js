const container = document.querySelector('.container-ul-supp');
const scrollButton = document.querySelector('.supp-btn');
const itemsToShow = 6;
const totalItems = document.querySelectorAll('.supp-li').length;
let startIndex = 0;

scrollButton.addEventListener('click', () => {
  startIndex += itemsToShow;
  updateVisibility();
});

function updateVisibility() {
  const listItems = document.querySelectorAll('.supp-li');
  listItems.forEach((item, index) => {
    if (index >= startIndex && index < startIndex + itemsToShow) {
      item.classList.remove('hidden-supp');
    } else {
      item.classList.add('hidden-supp');
    }
  });
}

updateVisibility();
