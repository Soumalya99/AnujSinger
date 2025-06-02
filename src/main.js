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

