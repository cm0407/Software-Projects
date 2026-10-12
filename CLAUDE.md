# CLAUDE.md

Collins's TCSS 490 (Autumn 2026) portfolio. A static site on GitHub Pages with one card per course artifact (1–5). It's also how every artifact gets submitted: each time one is finished, its card gets filled in and the same site link goes to Canvas.

Live: https://cm0407.github.io/Software-Projects/ · Repo: https://github.com/cm0407/Software-Projects

## Working with Collins

- **Teach, don't just do.** Collins wants to learn the stack. Explain why things work, and give terminal commands (especially `git commit` / `git push`) for Collins to run instead of running them yourself, unless asked.
- **Don't write personal content.** The About text, card reflections, and artifact ideas must be Collins's own words; the course grades placeholder ideas on that. Ask questions or give prompts instead.
- **Windows machine.** Give PowerShell/Windows commands, never macOS ones. Use `python`, not `python3` (on this machine `python3` is a Microsoft Store placeholder).
- **Keep the log.** After each working session, add an entry to `NOTES.md`: what was asked, what was decided, what was abandoned. The course requires this log in every artifact's repo.

## Structure

- `index.html` — page layout, About section, empty `#card-grid`
- `cards.js` — the `artifacts` array; **the only file edited when an artifact is finished**
- `script.js` — loops over `artifacts` and builds one `<article class="card {status}">` each
- `style.css` — colors as CSS variables in `:root`; `.card.idea` gets a dashed border
- `NOTES.md` — build log (required by the course)

`cards.js` must load before `script.js`, since script.js reads the global `artifacts`.

## Card fields

`number`, `status` (`"done"` or `"idea"`, which sets the badge and the dashed border), `title`, `link` (empty string shows "Link coming soon"), `body` (reflection when done, ideas when not). Strings are double-quoted, so a stray `"` inside `body` breaks the whole page. The card text is inserted with `innerHTML`, which is fine because it's Collins's own data only.

## Run and deploy

- Local: `python -m http.server 8000` from this folder, then open http://localhost:8000 (or just open `index.html`)
- Deploy: push to `main`; GitHub Pages serves the repo root. Check the Actions tab for "pages build and deployment."

## Constraints

- Front end only: no server, no database, no build step (course requirement for Artifact 1).
- Public repo and site: no secrets, and nothing Collins wouldn't want an employer to read.
- GitHub Pages paths are case-sensitive even though Windows isn't, so keep filenames and `href`s matching exactly.
