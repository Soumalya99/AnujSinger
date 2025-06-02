import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        music: 'music.html',
        gallery: 'gallery.html',
        newsMedia: 'newsMedia.html',
        digitalPR: 'digitalpr.html',
        contact: 'contact.html',
      }
    }
  }
});