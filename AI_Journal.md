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

## AI Journal Proposal

My plan for keeping this journal is to take notes at the end of every AI session instead of trying to remember everything at the end of the week. Whenever I finish using AI, whether that is Claude Code helping me build one of my artifacts or Claude webchat helping me study for a class, I will write down a few quick notes on what I was working on, what I asked the AI, what it gave back and how it helped me. If it got something wrong or I had to correct it, I will write down exactly what it said and how I figured out it was wrong, since those are the details I forget the fastest.

At the end of each week on Sunday, I will go through all of my session notes from that week and compile them into my weekly log. Since the notes will already have the specific tasks, commands and mistakes, I can use them to answer each of the four questions with real examples instead of general sentences. I will also read my last few entries before writing so I can see how my approach to using AI is changing from week to week.

Looking back, my Week 3 and Week 4 entries are a lot shorter and less specific than my first two weeks, and taking notes the same day should fix that because details fade after a few days. I already keep a session log in NOTES.md after every Claude Code session on my portfolio, so this is the same idea applied to every time I use AI, not just my coding projects. By the end of the quarter I will have a full record of how I used AI, which will also make my end-of-quarter write-up much easier to write.

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



## Week 3 (Oct  19 – Oct 25)

### What AI tools did you use this week?

This week I used Claude webchat and Claude Code (the VS Code extension).

**[YOUR TURN: add any other AI tool you used for this course this week, like ChatGPT, then delete this note.]**

### Describe a task where AI was helpful
This week I used AI to improve my facilitator assistant app, I also used AI to help me edit and review a grant application I was writing for Grad school. 
### Describe a time AI got it wrong or you had to correct it
There was not a time AI got anything right as I was using it

### How is your approach to using AI evolving?
My AI usage has stayed mostly the same this week. I am however using more project based chat AI, that is I am creating a project on claude app and uploading a bunch of context files which in turn helps the AI get exactly what I require in it's responses to me.

## Week 4 (Oct  26 – Nov 1)

### What AI tools did you use this week?

This week I used Claude webchat and Claude Code (the VS Code extension).

**[YOUR TURN: add any other AI tool you used for this course this week, like ChatGPT, then delete this note.]**

### Describe a task where AI was helpful

This week I used AI to not only prep and study for my coding theory course midterm, help me correct my Calculus homework and also to star building an App that can be used as a helpful tool for students learning how to drive.


### Describe a time AI got it wrong or you had to correct it
AI did not get anything wrong this week, for my coding theory class it gave me methods we hadn't studied in class which were outside of the class's scope.

### How is your approach to using AI evolving?
My approach to using AI is evolving in that I am integrating AI to many more tasks in my daily life such as sending emails, writing tex code for student worksheet's and general knowledge acquisition.
 

---

## Week 5 (Nov 2 – Nov 8)

### What AI tools did you use this week?

This week I mainly used Claude Code. I used it to plan SuperDrive, an interactive driver's ed learning app I'm building for 490 with my teammate from class, Abdulrahman. I also kept using AI to study for my math classes.

### Describe a task where AI was helpful

Claude Code was really helpful on Nov 3 when we sat down to plan SuperDrive before writing any code. The idea is a Khan Academy style app where young people learn Washington driving laws and the WA Driver Guide through short lessons, "check your understanding" questions, scenario puzzles (right-of-way, four-way stops, school zones) and a timed practice knowledge test. Claude Code helped us make the important decisions up front:

- **Tech stack:** Next.js with React and TypeScript for the frontend, and Supabase (Postgres) for the backend and database.
- **Authentication:** Supabase Auth instead of Clerk, so everything stays with one vendor and the database's security rules can use the logged in user's ID directly. For V1 guests get an anonymous sign-in, which means they're real users from the start, so when we add Google sign-in in V2 their progress stays attached to the same account.
- **Database:** the lesson content lives in Supabase tables instead of plain files. Files would have been faster to start with, but we need statuses for a review workflow, and a database also makes it easy to pull 40 random questions for the practice test.
- **Checking the content:** driving laws have to be right, so every lesson and question gets reviewed by AI against the official WA Driver Guide before anyone sees it. The AI has to give an exact quote and page number, our code checks that the quote actually exists in the guide, and a human approves it before it's published. Having AI check content every time a page loads sounded safe at first, but it would show users text nobody verified and make answers change between visits, so reviewing once before publishing was the better call.
- **Saving progress:** Supabase is the source of truth, and localStorage only holds saves that failed until they go through.
- **Working as a team:** both of us run Supabase locally with Docker so we don't mess up each other's data, one branch per feature, and we split the work feature by feature so we both learn the whole stack.

We also planned a "report a problem" button on every page that sends an email and opens a GitHub issue, with a rate limit so the inbox doesn't get flooded. By the end we had a CLAUDE.md handoff doc and a build log in the repo with every decision and the reason behind it, so either of us (or an AI agent) can pick up where we left off. I learned some new things too, like RLS (Row Level Security), which is basically a per-row bouncer in the database, and that a hash is like a fingerprint for content that changes if you edit even one character.

### Describe a time AI got it wrong or you had to correct it

AI didn't get anything wrong this week. The closest call was the practice test facts. The WA knowledge test is 40 questions and you need 80% (32 out of 40) to pass, and that got checked against a DOL score sheet and DOL-approved driving schools before it went into our planning doc. The time limit was different though: some sources said 35 minutes and others said 45, so instead of trusting one number we made the timer a setting we can change later. That's also the reason we built the AI review step with real quotes and a human approval. The whole app is about teaching the law correctly, so we can't just take AI's word for it.

### How is your approach to using AI evolving?

The biggest change is that I'm using AI earlier in a project. In the first weeks I mostly used it to fix problems as they came up, like the `python3` command that didn't work on my Windows laptop, but this week we used it to plan a whole app before writing a single line of code. It got us thinking about things I wouldn't have thought of on my own, like spam protection on problem reports and what happens to a guest's progress if they clear their browser.

I'm also continuing to use AI to study for my math classes, not just for coding. Last week it helped me prep for my coding theory midterm and correct my Calculus homework, and I'm still using it like a tutor that's there whenever I need it. I ask it to explain a concept step by step in plain words, the same way I ask Claude Code to explain things "as if you are teaching me," and to walk through example problems so I can see how each step connects to the next. Since it gave me coding theory methods last week that were outside the scope of my class, it helps to tell it what we've actually covered. I also don't take its math as automatically right, since one time it put wrong entries in a DP table when I asked it to work out the knapsack problem, so I try to follow along and double check its steps instead of just copying the answer.

### Notes

Next up for SuperDrive: create the GitHub repo, decide who builds which features, set up the Next.js + Supabase project, and agree on the database schema together before we start working in parallel.

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
