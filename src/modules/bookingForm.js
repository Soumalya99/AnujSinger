import { dom } from './domCache.js';

export function initBookingForm() {
  if (dom.bookingForm) {
    dom.bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Booking request submitted! (This is a demo, form data is not sent)');
      dom.bookingForm.reset();
    });
  }
}