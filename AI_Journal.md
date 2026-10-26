# AI Usage Journal

Collins Mbugua · TCSS 490 · Autumn 2026

<!--
HOW TO USE THIS JOURNAL
Everything between these comment markers is hidden when the file is previewed
(Ctrl+Shift+V in VS Code) or exported, so only your entries show.

Once a week, on Sunday (same as the Learning Log), copy the entry template at the
bottom, paste it at the end of the weekly entries, and fill it in. A few
sentences per question is plenty.

FIVE RULES (each one fixes a problem in the old diary)
1. Never write "None," "n/a," or "same as last week." If nothing went wrong,
   write about the closest call: an answer you double-checked, something you had
   to re-ask, or a moment you weren't sure whether to trust it. If your approach
   didn't change, say what you kept doing and why it's still working.
2. Name the specific thing. Not "it helped with coding," but which task, what you
   asked, and what it gave back.
3. Every failure needs four facts: what you asked, what it said (the exact
   command, API, setting, or answer), how sure it sounded, and how you found out
   it was wrong.
4. Write it the same week. Details fade in a few days, and that's when entries
   turn vague.
5. Before saving, search for "YOUR TURN" and "[" and make sure no prompt text
   is left over.

QUICK TEST before you save: could a classmate who wasn't there tell exactly what
happened? If not, add the detail they'd ask about.
-->

---

## Week 1 (Oct 5 – Oct 11)

### What AI tools did you use this week?

This week I used Claude webchat and Claude Code (the VS Code extension).

**[YOUR TURN: add any other AI tool you used for this course this week, like ChatGPT, then delete this note.]**

### Describe a task where AI was helpful

After the webchat's python command didn't work, I switched to Claude Code. Because Claude Code could see my system and my folder, it was able to figure out that `python3` doesn't run Python on Windows and gave me `python -m http.server 8000` instead, which worked. I then asked it to walk me through the rest of the Artifact 1 spec and explain why each step works instead of just giving me code to paste. It helped me add a `.gitignore`, rename my branch from `master` to `main`, and deploy my portfolio on GitHub Pages. I also learned that saving a file only changes my laptop, and the live site only updates after I `git add`, `git commit`, and `git push`.

### Describe a time AI got it wrong or you had to correct it

I asked Claude webchat for a step by step guide to build and deploy my portfolio, and it gave me a 10 step plan that included running `python3 -m http.server 8000` to test the site. It gave me the commands as if I was on a Mac and never asked what computer I was using. On my Windows laptop `python3` opens a Microsoft Store placeholder instead of running Python, so the command didn't work and it took me a while to figure out why. It also never asked what I wanted on my page about me, even though I had given it the assignment. I fixed the command problem by switching to Claude Code, which recognized the issue and told me to use `python` instead.

### How is your approach to using AI evolving?

I learned that I need to be more specific about what I want, because even after I gave Claude the assignment it didn't ask me what I wanted on my webpage. I also noticed that Claude Code makes fewer mistakes than Claude on the web for tasks that depend on my system, since it can see my computer and my files, so I switched to Claude Code for building my portfolio.

### Notes

My Learning Log reflection for this week goes into the python3 bug in more detail. Build log: Sessions 1 and 2 in `Portfolio/NOTES.md`. Live site: https://cm0407.github.io/Software-Projects/

---

## Week 2 (Oct 12 – Oct 18)

### What AI tools did you use this week?

This week I used Claude Code.

**[YOUR TURN: add any other AI tool you used for this course this week, like ChatGPT, then delete this note.]**

### Describe a task where AI was helpful

I asked Claude Code to make my portfolio look less bland, with a green gradient dark mode background and something more techy and mathy. It redesigned the site with a dark green theme, a graph paper background, moving sine waves in the header, and an equation box with Euler's method as a nod to my research. It took screenshots of the site at desktop and phone sizes to check its own work, noticed the waves were running through my tagline, and moved them lower. When the new design looked exactly the same on my computer, it checked my local server, saw it was already sending the new files, and figured out my browser was showing an old saved copy. Pressing Ctrl+F5 fixed it. Before I started planning my Facilitator Assistant, it also pointed out that a static site can't send emails by itself and that student names and attendance are protected by FERPA, so they can't go in a public repo.

### Describe a time AI got it wrong or you had to correct it

When I asked Claude Code to work on my portfolio, its first summary of what was left to do was full of technical terms and file references, and I didn't understand it. I had to tell it to "try to be not too technical but rather as if you are teaching me software development throughout this process," and after that it explained things step by step in plain words with examples. A smaller one: while setting up this journal, it wrote a Git command in an example without its dashes (`git reset hard` instead of `git reset --hard`), which would not have worked, but it caught and fixed the mistake itself.

### How is your approach to using AI evolving?

I started asking Claude Code to teach me as we go instead of just doing things for me. I made some of the changes myself, like fixing the status on my Artifact 4 card, and I ran the git commands to commit and push on my own, then had Claude Code check my work with `git diff`.

### Notes

Build log: Session 3 in `Portfolio/NOTES.md`. This week I also turned my Group Shuffle idea into the Facilitator Assistant, which is now Artifact 2, and swapped it with the Investment platform, which is now Artifact 3.

---

## End-of-quarter write-up

<!--
900 to 1,200 words, written in finals week, drawing on the entries above.
Answer all four:
1. How did my use change across the quarter? Compare an early entry to a late one.
2. What did I learn to trust it for? Point to the "helpful" answers.
3. What did I learn not to trust it for? Point to specific "got it wrong" answers.
4. What would I tell a student starting this course next quarter?
Tip: before writing, reread every "How is your approach evolving" answer in
order. The pattern across them is your main point.
-->

<!--
ENTRY TEMPLATE: copy everything between the ===== lines and paste it at the end
of the weekly entries (above "End-of-quarter write-up").
=====

---

## Week [N] ([Monday's date] – [Sunday's date])

### What AI tools did you use this week?

[Every tool you used for this course]

### Describe a task where AI was helpful

[The specific task, what you asked, what it gave back, and what you learned]

### Describe a time AI got it wrong or you had to correct it

[What you asked, exactly what it said, how sure it sounded, how you caught it, and what the right answer was]

### How is your approach to using AI evolving?

[What you're doing differently than last week, and why]

### Notes

[Links, commits, or anything else worth remembering]

=====
-->
