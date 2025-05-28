import { dom } from "./domCache";

export function initLoader() {
  window.addEventListener('load', () => {
  if (dom.loader) dom.loader.classList.add('hidden');
});
}