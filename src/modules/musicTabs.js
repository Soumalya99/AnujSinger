import { dom } from './domCache.js';

export function initMusicTabs() {
  if (!dom.tabButtons.length || !dom.musicContents.length) return;
  dom.tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      dom.tabButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-secondary', 'text-gray-900', 'hover:bg-accent');
        btn.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
      });
      dom.musicContents.forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
      });
      button.classList.add('active', 'bg-secondary', 'text-gray-900', 'hover:bg-accent');
      button.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
      const targetId = button.dataset.target;
      document.getElementById(targetId).classList.remove('hidden');
      document.getElementById(targetId).classList.add('active');
    });
  });
}