export const dom = {
  loader: null,
  hamburger: null,
  navMenu: null,
  navLinks: null,
  sections: null,
  header: null,
  tabButtons: null,
  musicContents: null,
  slides: null,
  dots: null,
  prevBtn: null,
  nextBtn: null,
  bookingForm: null,
  viewMoreGalleryBtn: null,
};

export function cacheDom() {
  dom.loader = document.getElementById('loader');
  dom.hamburger = document.querySelector('.hamburger');
  dom.navMenu = document.querySelector('.nav-menu');
  dom.navLinks = document.querySelectorAll('.nav-menu .nav-link');
  dom.sections = document.querySelectorAll('section[id]');
  dom.header = document.getElementById('header');
  dom.tabButtons = document.querySelectorAll('.music-tabs .tab-btn');
  dom.musicContents = document.querySelectorAll('.music-content');
  dom.slides = document.querySelectorAll('.testimonial-slide');
  dom.dots = document.querySelectorAll('.testimonial-dots .dot');
  dom.prevBtn = document.querySelector('.testimonial-prev');
  dom.nextBtn = document.querySelector('.testimonial-next');
  dom.bookingForm = document.getElementById('booking-form');
  dom.viewMoreGalleryBtn = document.getElementById('view-more-gallery');
}