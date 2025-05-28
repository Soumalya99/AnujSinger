// /src/modules/hamburgerMenuToggle.js

/**
 * Initializes the hamburger menu toggle for mobile navigation.
 * On small screens, clicking the hamburger shows/hides the nav links in a vertical dropdown.
 * Usage: import { initHamburgerMenuToggle } from './modules/hamburgerMenuToggle.js'; initHamburgerMenuToggle();
 */
export function initHamburgerMenu({
  hamburgerSelector = '.hamburger',
  navMenuSelector = '.nav-menu',
  mobileMenuClass = 'mobile-nav-dropdown'
} = {}) {
  const hamburger = document.querySelector(hamburgerSelector);

  // If you want to use a separate mobile menu, create it dynamically if not present
  let mobileMenu = document.querySelector(`.${mobileMenuClass}`);
  let navMenu = document.querySelector(navMenuSelector);

  // Only create mobile menu if not present and navMenu exists
  if (!mobileMenu && navMenu) {
    // Clone navMenu for mobile, remove md:flex, add mobile styles
    mobileMenu = navMenu.cloneNode(true);
    mobileMenu.classList.remove('flex', 'items-center', 'space-x-6', 'md:flex');
    mobileMenu.classList.add(
      mobileMenuClass,
      'flex',
      'flex-col',
      'space-y-4',
      'absolute',
      'right-4',
      'top-16',
      'w-48',
      'bg-stone-300',
      'rounded-lg',
      'shadow-lg',
      'py-6',
      'px-4',
      'z-50',
      'hidden'
    );
    // Remove hamburger from mobile menu
    const mobileHamburger = mobileMenu.querySelector('.hamburger');
    if (mobileHamburger) mobileHamburger.remove();
    // Insert after navMenu
    navMenu.parentNode.insertBefore(mobileMenu, navMenu.nextSibling);
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });

    // Optional: Hide menu when a link is clicked (for better UX)
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });
    });
  }
}