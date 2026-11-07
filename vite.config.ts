import { defineConfig } from 'vite';

export default defineConfig({
  // Browser entry points are ES modules, including files without imports/exports.
  // This keeps generated decorator helpers from using Node's require().
  oxc: {
    sourceType: 'module',
  },
});
