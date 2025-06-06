import './style.css';
import { cacheDom } from './modules/domCache.js';
import { initLoader } from './modules/loader.js';
import { initHamburgerMenu } from './modules/hamBurg.js';
import { initHeaderScrollAndNavHighlight } from './modules/header.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initMusicTabs } from './modules/musicTabs.js';
import { initTestimonialSlider } from './modules/testimonialSlider.js';
import { initBookingForm } from './modules/bookingForm.js';
import { initGalleryViewMore } from './modules/gallery.js';
import { swiperinit , swiperAbtgallery} from './modules/swiper.js';
import { contactInit } from './modules/contactForm.js';
import { serviceInit } from './modules/services.js';
import { initContactModal } from './modules/contactModel.js';
import { loadNextBatch } from './modules/videoCards.js';

document.addEventListener('DOMContentLoaded', () => {
  try {
    cacheDom();
    initLoader();
    initHamburgerMenu();
    // initHeaderScrollAndNavHighlight();
    initSmoothScroll();
    swiperAbtgallery();
    initMusicTabs();
    initContactModal();
    loadNextBatch();
    serviceInit();
    swiperinit();
    contactInit()
    initTestimonialSlider();
    initBookingForm();
    initGalleryViewMore();
  } catch (error) {
    console.error('Error during initialization:', error);
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}


