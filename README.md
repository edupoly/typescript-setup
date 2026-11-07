# Plain HTML + TypeScript starter

A framework-free website using HTML, CSS, TypeScript, and Vite.

## Run locally

Install Node.js 22.12+ or a supported newer version, then run from this folder:

```sh
npm install
npm run dev
```

The browser opens automatically. Vite prints the local URL (normally
http://localhost:5173). Keep the terminal running and save your files to see
updates automatically. Press Ctrl+C to stop the server.

## Where to write your code

- `index.html`: HTML markup and entry point.
- `src/main.ts`: TypeScript, DOM interactions, and module imports.
- `src/style.css`: styles.
- `public/`: static files copied unchanged, such as images. For example,
  `public/logo.png` is available at `/logo.png`.

You can also put JavaScript files in `src/` and import them from `main.ts`.
Link TypeScript entry points with `<script type="module" src="/src/main.ts"></script>`.
Use the development URL instead of opening the HTML file directly from disk.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` or `npm start` | Start development server and open browser; update on save |
| `npm run typecheck` | Check TypeScript errors |
| `npm run typecheck:watch` | Continuously check TypeScript in a second terminal |
| `npm run build` | Check types and create production files in `dist/` |
| `npm run preview` | Serve the existing production build and open browser |

Development automatically transforms TypeScript to JavaScript in memory.
It does not write `dist/` or perform full type checking. Your editor can show
type errors, or use the watch command in a second terminal. Production builds
fail if type checking fails.

To preview the deployable output:

```sh
npm run build
npm run preview
```

Upload the contents of `dist/` to a static web host. Preview serves the last
build; run `npm run build` again after changes to refresh production output.

Vite documentation: https://vite.dev/guide/
