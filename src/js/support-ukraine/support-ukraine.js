// Імпортуємо бібліотеку Swiper
import Swiper from 'swiper/bundle';

// Ініціалізуємо Swiper
const swiper = new Swiper('.swiper-container', {
  direction: 'vertical', // Прокручування вниз
  slidesPerView: '9', // Кількість видимих слайдів
  freeMode: true, // Вільний режим прокрутки
});

// Отримуємо номер слайда, на який потрібно прокрутити
const targetSlideIndex = 9;

// Отримуємо кнопку
const scrollToSlideBtn = document.getElementById('scrollToSlideBtn');

// Додаємо обробник події для кнопки
scrollToSlideBtn.addEventListener('click', function () {
  // Прокручуємо до вказаного слайда з плавністю
  swiper.slideTo(targetSlideIndex, 1000, false);
});
