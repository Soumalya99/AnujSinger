export function contactInit(){
    const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Collect form data
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const eventType = document.getElementById('event-type').value;
      const eventDate = document.getElementById('event-date').value;
      const message = document.getElementById('message').value.trim();

      // Format WhatsApp message
      const whatsappNumber = '919418050235'; // Use country code, no + or spaces
      const text =
        `New Booking Request:%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Phone: ${phone}%0A` +
        `Event Type: ${eventType}%0A` +
        `Event Date: ${eventDate}%0A` +
        `Additional Info: ${message}`;

      // WhatsApp URL
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
    });
  }
}