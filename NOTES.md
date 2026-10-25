# Build Log: Portfolio (Artifact 1)

## Goal

A static portfolio site (HTML/CSS/JS, no server or database) deployed on GitHub Pages, with one card for each of the five TCSS 490 artifacts. Card 1 describes this site; cards 2–5 hold my ideas until I build them. The same site gets a card filled in after every artifact this quarter.

Live site: https://cm0407.github.io/Software-Projects/

## AI tools used

- Session 1: Claude web chat (claude.ai)
- Session 2: Claude Code (VS Code extension)
- Session 3: Claude Code
- Session 4: Claude Code
- Session 5: Claude Code
- Session 6: Claude Code

## Session 1: Oct 11

**Asked:** Step-by-step guide to build and deploy a static portfolio per the Artifact 1 spec.
**Got:** File structure (HTML/CSS/JS split), data-driven cards, GitHub Pages deploy steps.
**What I changed / learned:**

- I needed to be more specific on what I wanted on my portfolio, even though I gave claude context of the assignment it did not ask me the 1st thing mentioned about what I would like to be on the webpage about me.

## Session 2: Oct 11–12

- After asking claude webchat how to make a portfolio website after giving it the context of the assignment, I ran into an issue where it gave me commands to run on my terminal as if I was on a mac. It took me a bit to debug but after I switched to Claude code, the Claude CLI recognized the issue well and gave me new instructions and I was able to deploy my portfolio.

**Asked Claude Code for:**

1. A step-by-step walkthrough of the rest of the spec that explains _why_ each step works, not just code to paste.
2. Why `python3 -m http.server 8000` didn't work.
3. How to add a `.gitignore`.
4. Whether the live site updates when I save locally.
5. How to stop the Python server.
6. To write up this log, a `CLAUDE.md`, and a `README.md`.

**Decided:**

- Kept the Session 1 structure: card data lives in `cards.js`, and `script.js` turns it into HTML. Updating a card later means editing one object.
- Wrote the About section and card ideas myself. Claude Code gave brainstorming questions instead of writing them.
- Renamed the branch from `master` to `main` before the first push.
- Named the GitHub repo `Software-Projects`, so the site lives at `cm0407.github.io/Software-Projects/`.
- Pointed the Artifact 1 card's link at the repo instead of the live site, since visitors are already on the site and the repo is where this log lives.
- Added a `.gitignore` (`.env`, `node_modules/`, `dist/`, `*.log`, etc.) now, before any secrets or build tools exist.

**Abandoned:**

- The Claude web chat, for Claude Code, after the web chat kept giving Mac terminal commands.
- `python3 -m http.server`. On Windows, `python3` is a Microsoft Store placeholder; `python -m http.server 8000` runs my real install.
- The Session 1 placeholder titles ("Ideas for Artifact N"), replaced with titles for my actual ideas.

**Takeaways:**

- Saving a file only changes my laptop. The live site updates after `git add` → `git commit` → `git push`, and GitHub Pages redeploys in about a minute. The Actions tab shows when it's done, and Ctrl+F5 skips the browser's cached copy.
- `.gitignore` only works on files Git isn't tracking yet. A secret that was already committed stays in the public history.
- Only one program can use a port at a time. Stop the server with Ctrl+C, or `Stop-Process -Id <id>` if the terminal is gone.
- `script.js` has to load after `cards.js` because it uses the `artifacts` variable that `cards.js` creates.

## Session 3: Oct 15–16

**Asked Claude Code for:**

1. To work on the Portfolio folder. It reviewed the project and listed what was left from the Session 2 next steps.
2. To re-explain that list less technically: "try to be not too technical but rather as if you are teaching me software development throughout this process."
3. To check my fix for the Artifact 4 card. The first time, my edits didn't show up because I hadn't saved the file.
4. A redesign: "lets add some techyness, mathyness to it. I like a green gradient dark mode background, advance the look."
5. Why the redesign looked exactly the same when I ran it locally.
6. To add this session to the log.

**Decided:**

- Fixed the Artifact 4 card myself: set its `status` to `"idea"` so it gets the dashed border, and deleted the out-of-date "fill in after deploying" comment in `cards.js`. Committed and pushed it on my own.
- Redesigned the site:
  - Dark green gradient background with faint graph-paper lines, made from layered CSS gradients instead of an image.
  - All colors and fonts named once as CSS variables at the top of `style.css`.
  - Two fonts: JetBrains Mono (a coding font) for my name, headings, and labels, and Inter for paragraphs.
  - A terminal-style header (`~/portfolio $ whoami`) with a blinking cursor after my name.
  - Animated sine waves behind the header, drawn on a `<canvas>` by a new file, `waves.js`. I kept it separate from `script.js` so each file has one job. The waves stay still for visitors who turn on "reduce motion."
  - An equation box showing Euler's method, a nod to my SLMath research on numerical methods for differential equations.
  - `//` before section headings, cards that lift and glow on hover, a solid green badge on finished cards, and ∎ (end of proof) in the footer.
- Kept my About text and card text word for word. Only the design changed.
- Added `waves.js` to the file lists in `README.md` and `CLAUDE.md`.
- Grew the Group Shuffle idea into a **Facilitator Assistant**, a web app for my facilitator role that shuffles students into groups, takes attendance, and sends emails. It becomes Artifact 2, and the Investment platform moves to Artifact 3.
- Each artifact gets its own folder in `TCSS_490` and its own GitHub repo, instead of a subfolder in `Portfolio`. The portfolio card links to it when it's done.

**Abandoned:**

- The first position of the waves, which ran through the "Mathematics + Computer Science" line and made it harder to read. They now sit lower, behind the equation box.

**Takeaways:**

- Typing in VS Code doesn't change the file until I save it. A white dot on the tab means unsaved changes, and File → Auto Save saves automatically.
- `git diff` shows exactly what changed since my last commit. It's a good check before committing.
- The Artifact 4 bug was easy to miss because the badge still said "Idea" while the border was wrong. When code makes a choice based on a value, think about what happens if that value is blank.
- Browsers cache files, so a page can look unchanged after an edit. Ctrl+F5 forces a fresh download, a private window (Ctrl+Shift+N) starts with no cache, and F12 → Network → "Disable cache" turns caching off while Developer Tools is open.
- A new file is "untracked" until `git add` includes it. `git add .` adds every change in the folder, so run `git status` first to see what that includes.
- Animation on a canvas is a flipbook: about 60 times a second the code erases the canvas and redraws the waves a little further along in time.

## Session 4: Oct 18

**Asked Claude Code for:**

1. To fill in the Artifact 2 card for the final submission of Artifact 2 (Something You Will Use): a link to what I built and a short reflection on how it went and what I learned.

**Decided:**

- Marked the Artifact 2 card `"done"`, so it gets the solid green "Complete" badge instead of the dashed "Idea" border.
- Pointed its link at the live app, https://cm0407.github.io/Facitant/, so visitors can try it. Claude Code checked that the page loads before I linked it. The build log for Facitant lives in its own repo, https://github.com/cm0407/Facitant.
- Kept the title "Facilitator Assistant."
- Replaced the idea text with my reflection, which I wrote myself.

**Abandoned:**

- The idea text for Artifact 2 ("shuffles students into groups, takes attendance, and sends out emails"). Version 1 does the group shuffle and seating chart; attendance and emails are still planned.

**Takeaways:**

- **[YOUR TURN: anything you noticed while submitting, e.g. how filling in a card works now that the site is data-driven]**

## Session 5: Oct 23

**Asked Claude Code for:**

1. Whether my AI Journal was in a GitHub repo anywhere. It wasn't: it only lived in the `TCSS_490` folder on OneDrive.
2. To add it to this repo.

**Decided:**

- Moved `AI_Journal.md` into this folder instead of copying it, so there's only one copy to update each Sunday and the GitHub version never goes out of date.
- Added it to the file lists in `README.md` and `CLAUDE.md`.

## Session 6: Oct 25

**Asked Claude Code for:**

1. To fill in the Artifact 5 idea: a personal tutoring business with web services, customer integration, and appointment setting, covering middle school math through Calculus 4, Linear Algebra, Discrete Math, Real Analysis, Mathematical Proofs, Differential Equations, Abstract Algebra, and Probability and Statistics. The body should describe my passion for helping people with math, especially in my Kenyan community, and the idea of growing it into a larger tutoring franchise.

**Decided:**

- Titled the card "Personal Tutoring Business" and kept its `status` as `"idea"`.
- Built the card text from my own wording in the request, with only light cleanup, since the ideas need to be in my own words.

**Abandoned:**

- The "NO IDEA YET" placeholder for Artifact 5.

## Next steps

- [x] Put an idea in the Artifact 5 card (it currently says "NO IDEA YET")
- [x] Set the Artifact 4 card's `status` to `"idea"` (it's empty, so it doesn't get the dashed border)
- [ ] Confirm the live link is submitted on Canvas
- [ ] Decide whether to keep Euler's method in the header or swap in another equation
- [ ] Write the Artifact 2 reflection in `cards.js` (it currently says [YOUR TURN]), then push and submit the site link on Canvas
