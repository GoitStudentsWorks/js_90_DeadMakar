const btnBurger = document.querySelector('#openBurger');
btnBurger.addEventListener('click', openPopup);
const btnClose = document.querySelector('#closeBurger');
btnClose.addEventListener('click', closePopup);

function openPopup() {
  document.getElementById('overlay').style.display = 'block';
  //   document.getElementById('popup').style.display = 'block';
  toggleEl('.overlay');
  toggleEl('#openBurger');
  toggleEl('#closeBurger');
  //   console.log('ghhg');
}
function toggleEl(selector) {
  const element = document.querySelector(selector);
  element.classList.toggle('active');
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  //   document.getElementById('popup').style.display = 'none';
  toggleEl('.overlay');
  toggleEl('#openBurger');

  toggleEl('#closeBurger');
}
