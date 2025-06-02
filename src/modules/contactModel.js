export function initContactModal({
  openBtnId = 'book-now-btn',
  modalOverlayId = 'contact-modal-overlay',
  closeBtnId = 'close-contact-modal'
} = {}) {
  const openBtn = document.getElementById(openBtnId);
  const modalOverlay = document.getElementById(modalOverlayId);
  const closeBtn = document.getElementById(closeBtnId);

  if (!openBtn || !modalOverlay || !closeBtn) return;

  // Open modal
  function openModal() {
    modalOverlay.classList.remove('hidden');
    modalOverlay.classList.add('flex');
    // Focus first input for accessibility
    const firstInput = modalOverlay.querySelector('input, select, textarea, button');
    if (firstInput) firstInput.focus();
  }

  // Close modal
  function closeModal() {
    modalOverlay.classList.remove('flex');
    modalOverlay.classList.add('hidden');
  }

  // Open on button click
  openBtn.addEventListener('click', openModal);

  // Close on close icon click
  closeBtn.addEventListener('click', closeModal);

  // Close on overlay click (outside modal)
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('flex')) {
      closeModal();
    }
  });
}