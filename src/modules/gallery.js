import { dom } from './domCache.js';

export function initGalleryViewMore() {
  if (dom.viewMoreGalleryBtn) {
    dom.viewMoreGalleryBtn.addEventListener('click', () => {
      alert('Loading more gallery images... (Functionality to be added)');
    });
  }
}