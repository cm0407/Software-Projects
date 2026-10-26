# Collins Mbugua — Portfolio

My portfolio for TCSS 490 at UW Tacoma (Autumn 2026). It has one card for each of the course's five artifacts. Finished artifacts link to the work and include a short reflection. The rest hold ideas for what I might build.

**Live site:** https://cm0407.github.io/Software-Projects/

## Built with

Plain HTML, CSS, and JavaScript. No framework, build step, or server. Hosted on GitHub Pages.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page layout and About section |
| `cards.js` | The artifact cards, as data |
| `script.js` | Turns the card data into HTML |
| `waves.js` | Draws the moving sine waves in the header |
| `style.css` | Styles: dark green theme, graph-paper background |
| `NOTES.md` | Build log: what I asked the AI for, what I decided, what I dropped |
| `AI_Journal.md` | Weekly journal of how I used AI in TCSS 490 |

## Run it locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

Then go to http://localhost:8000.

## Update a card

Edit the artifact's entry in `cards.js`:

```js
{
  number: 2,
  status: "done",          // "done" or "idea"
  title: "Project name",
  link: "https://...",
  body: "A few sentences on how it went and what I learned.",
},
```

Commit and push to `main`. GitHub Pages redeploys in about a minute.

## How it was built

See [NOTES.md](NOTES.md) for the session-by-session log.
