import { dom } from './domCache.js';

export function initTestimonialSlider() {
  if (!dom.slides.length || !dom.dots.length || !dom.prevBtn || !dom.nextBtn) return;
  let currentIndex = 0;
  function showSlide(index) {
    dom.slides.forEach((slide, i) => {
      slide.classList.toggle('hidden', i !== index);
      slide.classList.toggle('active', i === index);
      dom.dots[i].classList.toggle('active', i === index);
      dom.dots[i].classList.toggle('bg-secondary', i === index);
      dom.dots[i].classList.toggle('bg-gray-300', i !== index);
      dom.dots[i].classList.toggle('hover:bg-gray-400', i !== index);
    });
  }
  dom.prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : dom.slides.length - 1;
    showSlide(currentIndex);
  });
  dom.nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < dom.slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  });
  dom.dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      currentIndex = parseInt(e.target.dataset.index);
      showSlide(currentIndex);
    });
  });
  showSlide(currentIndex);
}