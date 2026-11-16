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
- Session 7: Claude Code
- Session 8: Claude Code
- Session 9: Claude Code
- Session 10: Claude Code

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

- This step was quite straight forward.

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

## Session 7: Oct 26

**Asked Claude Code for:**

1. To fill in the Artifact 3 card: link it to https://cm0407.github.io/AI-Investment-Project/ and turn my weekly write-up into a 100–200 word reflection on what I learned.
2. To make that reflection shorter, "short and sweet" like Artifacts 1 and 2, and to remove the leftover `[ ]` around the Artifact 2 reflection.

**Decided:**

- Marked the Artifact 3 card `"done"` and pointed its link at the live site. Claude Code checked that the page loads before I linked it.
- Kept the title "Investment platform."
- Cut my write-up down to about 85 words using my own sentences, to match the length of the Artifact 1 and 2 cards: the model as a judge for the half of my rubric that needs judgement, and the catalysts gap the backtest found.
- Removed the `[ ]` left over from the placeholder around the Artifact 2 reflection. They were showing on the live site.

**Abandoned:**

- The Artifact 3 idea text ("I wish investment information was as easily accessible as social media is...").
- A first, 194-word version of the reflection. It was too long next to the other cards.
- Parts of my write-up that didn't make the short version: the 100-point rubric breakdown, the seven checks, the 14 hand-written judgments and 3.4-point gap, planning before building this time, not writing the Next.js/MUI frontend, and Claude catching two bugs I would have missed.

## Session 8: Nov 1

**Asked Claude Code for:**

1. To pull the latest changes from GitHub. The remote had one new commit, "Week 4 AI usage," which only changed `AI_Journal.md`.
2. To add an "AI Journal Proposal" to `AI_Journal.md`: 2–3 paragraphs in my tone on how I'll keep the journal. My plan: at the end of each AI session, write down what I did and how AI helped, then at the end of the week compile those notes into the weekly entry.

**Decided:**

- Ran `git fetch` first to see what was coming, then `git pull --ff-only`, since the incoming commit didn't touch my uncommitted files.
- Restored Sessions 5–7 in this log. They had been deleted from my working copy, most likely by saving an older copy of `NOTES.md` that was still open in my editor. Kept the Session 4 takeaway I wrote in that save.
- Claude Code drafted the proposal from my plan because I asked it to write in my tone, even though journal entries are normally written by me. I'll reread it and change anything that doesn't sound like me.
- Put the proposal at the top of the journal, above Week 1, since it describes how every weekly entry gets written.
- Left my uncommitted Artifact 3 reflection edit in `cards.js` as it was.

**Takeaways:**

- `git fetch` downloads new commits without changing my files, and `git log HEAD..origin/main` lists what a pull would bring in.
- `git pull` only stops for uncommitted changes when an incoming commit edits one of the same files.
- If a file changes on disk while an older copy is open in my editor, saving the editor's copy overwrites the newer version. Running `git diff` before committing catches it.

## Session 9: Nov 8

**Asked Claude Code for:**

1. To replace the Artifact 4 card with SuperDriver, a driver's ed learning app for young people that I'm building with Abdulrahman Elmi, rewritten from our project description into my tone.
2. To commit and push the change without the Claude co-author line on the commit.
3. To link the card to the SuperDriver repo, https://github.com/abdulrahman1121/super-driver.
4. To mark the card `"done"` now that V1 is built.
5. (Nov 9) To point the link at the live app, https://super-driver-seven.vercel.app/, and update the description.

**Decided:**

- Titled the card "SuperDriver" and at first kept its `status` as `"idea"` with no link. Changed it to `"done"` once V1 was built. The body is still the project description for now; I'll replace it with my own reflection.
- Claude Code reworded our project description in my tone because I asked it to. I'll reread it and change anything that doesn't sound like me.
- Kept the parts a visitor cares about: what you learn, the lesson types, the Khan Academy feel, V1 (Washington only, no sign-in, 2 days) and V2 (state picker, Google sign-in, mini driving simulation), and that we're splitting the work feature by feature with AI's help.
- Left out the lines that were instructions for the AI building the app, like "build original visuals only" and "do not copy Khan Academy branding."
- Pointed the card's link at the SuperDriver repo at first. Claude Code found the repo is private, so it showed a 404 to anyone who isn't a collaborator, including visitors to my site. Switched to the live Vercel app instead, which Claude Code checked loads.
- Rewrote the description in my tone from what's actually on the live app: 4 lessons, 17 skill checks, explanations when you miss a question, and progress tracking. Dropped the 2-day target, plus the scenario puzzles and timed practice test, which aren't on the home page. V2 plans stay as "next."

**Abandoned:**

- The Artifact 4 idea for a REU and internship resource site.

## Session 10: Nov 16

**Asked Claude Code for:**

1. To fill in the Artifact 5 card with the live site, https://frontend-pink-eight-29.vercel.app/, and a reflection of 6 sentences or less, summarized in my tone from our brainstorm summary (`artifact #5 progress.txt`). The main thing I learned: how to research software that already exists and see what we can build that doesn't.
2. To commit and push it, with no Claude co-author line on any commit from now on.
3. To replace the Artifact 4 project description with a short reflection, combining two of my weekly AI journal write-ups: planning SuperDriver with Abdulrahman, and the Jest crash while testing my lessons.

**Decided:**

- Replaced the Personal Tutoring Business idea with CareForAll, the care organization tracking app I'm building with Abdulrahman Elmi. Marked the card `"done"`.
- Claude Code checked that the live site loads. It's a JavaScript app, so the page text only shows up once the browser runs it. Claude Code searched the app's code to confirm the three features the card mentions (offline kiosk check-in, voice logging, routine-change alerts) are on the site before naming them.
- Claude Code wrote the reflection in my tone from the brainstorm summary because I asked it to. I'll reread it and change anything that doesn't sound like me.
- Kept: where the idea came from, researching Procare, Brightwheel, and StoriiCare to find the gap (small programs still on paper), the three features, the voice-vs-offline tradeoff, and the operator interviews as next steps.
- Committed and pushed the Artifact 4 and 5 cards with only my name on the commit. Claude Code saved this as a standing preference.
- Artifact 4's card now has a reflection instead of the project description, as I planned in Session 9. It's 5 sentences in my own wording from the journal: planning with a teammate before coding, my part (9 lessons and 159 questions, one agent writing and one fact-checking), and the crash the AI caused by running a production build over my dev server's `.next` folder.

**Abandoned:**

- The Personal Tutoring Business idea for Artifact 5.
- Parts of the brainstorm that didn't fit in 6 sentences: the Procare stat that 44% of programs without software still use paper, audio privacy, alerts as observations instead of diagnoses, the org-type architecture decision, and the 3-phase roadmap.
- The Artifact 4 project description (4 lessons, 17 skill checks, the Khan Academy feel, V2 plans).
- Parts of the journal that didn't fit: the Supabase guest-progress and Google sign-in plan, Docker, how Claude found the problem (my dev server running since Nov 11, its own test server still running after it said it stopped it), and using AI to study for my math classes.

## Next steps

- [x] Put an idea in the Artifact 5 card (it currently says "NO IDEA YET")
- [x] Set the Artifact 4 card's `status` to `"idea"` (it's empty, so it doesn't get the dashed border)
- [ ] Confirm the live link is submitted on Canvas
- [ ] Decide whether to keep Euler's method in the header or swap in another equation
- [ ] Write the Artifact 2 reflection in `cards.js` (it currently says [YOUR TURN]), then push and submit the site link on Canvas
