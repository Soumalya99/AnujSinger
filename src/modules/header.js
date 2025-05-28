import { dom } from './domCache.js';

export function initHeaderScrollAndNavHighlight() {
  if (!dom.header) return;

  window.addEventListener('scroll', () => {
    // Header background transition
    if (window.scrollY > 10) {
      dom.header.classList.add('bg-white/90', 'text-black', 'transition-colors', 'duration-300', 'ease-in-out');
      dom.header.classList.remove('bg-transparent', 'text-white');
    } else {
      dom.header.classList.remove('bg-white/90', 'text-black');
      dom.header.classList.add('bg-transparent');
    }

    // Nav link highlight
    let current = '';
    dom.sections.forEach(section => {
      const sectionTop = section.offsetTop - dom.header.offsetHeight;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    dom.navLinks.forEach(link => {
      link.classList.toggle('active', link.href.includes(current));
    });
  });
}