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

### Describe a task where AI was helpful

I asked Claude Code to make my portfolio look less bland, with a green gradient dark mode background and something more techy and mathy. It redesigned the site with a dark green theme, a graph paper background, moving sine waves in the header, and an equation box with Euler's method as a nod to my research. It took screenshots of the site at desktop and phone sizes to check its own work, noticed the waves were running through my tagline, and moved them lower. When the new design looked exactly the same on my computer, it checked my local server, saw it was already sending the new files, and figured out my browser was showing an old saved copy. Pressing Ctrl+F5 fixed it. Before I started planning my Facilitator Assistant, it also pointed out that a static site can't send emails by itself and that student names and attendance are protected by FERPA, so they can't go in a public repo.

### Describe a time AI got it wrong or you had to correct it

When I asked Claude Code to work on my portfolio, its first summary of what was left to do was full of technical terms and file references, and I didn't understand it. I had to tell it to "try to be not too technical but rather as if you are teaching me software development throughout this process," and after that it explained things step by step in plain words with examples. A smaller one: while setting up this journal, it wrote a Git command in an example without its dashes (`git reset hard` instead of `git reset --hard`), which would not have worked, but it caught and fixed the mistake itself.

### How is your approach to using AI evolving?

I started asking Claude Code to teach me as we go instead of just doing things for me. I made some of the changes myself, like fixing the status on my Artifact 4 card, and I ran the git commands to commit and push on my own, then had Claude Code check my work with `git diff`.

## Week 3 (Oct 19 – Oct 25)

### What AI tools did you use this week?

This week I used Claude webchat and Claude Code (the VS Code extension).

### Describe a task where AI was helpful

This week I used AI to improve my facilitator assistant app, I also used AI to help me edit and review a grant application I was writing for Grad school.

### Describe a time AI got it wrong or you had to correct it

AI did not get anything obviously wrong this week, but I double checked the outputs that were provided and asked for deeper explanations where it did not make sense to me.

### How is your approach to using AI evolving?

My AI usage has stayed mostly the same this week. I am however using more project based chat AI, that is I am creating a project on claude app and uploading a bunch of context files which in turn helps the AI get exactly what I require in it's responses to me.

## Week 4 (Oct 26 – Nov 1)

### What AI tools did you use this week?

This week I used Claude webchat and Claude Code (the VS Code extension).

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

---

## Week 6 (Nov 9 – Nov 15)

### What AI tools did you use this week?

This week was almost all Claude Code, working on SuperDriver (we renamed it from SuperDrive), the driver's ed app I'm building for 490 with Abdulrahman. Once the first demo went live, Abdulrahman gave me two more jobs on top of the "report a problem" button: bring the WA Driver Guide into the project, and finish the rest of the lessons with "check your understanding" questions. I also kept using AI to study for my math classes.

### Describe a task where AI was helpful

The biggest task was finishing the lessons. When the week started, the site had 4 lessons live with 17 questions. By the end of the week the course had all 13 lessons and 176 questions, merged into our main branch. Here's how Claude Code helped:

- **Getting set up on Windows (Nov 11):** Abdulrahman built everything on a Mac, so this was the first time the project ran on my laptop. Claude Code got Docker, the local Supabase database, and the dev server running, and it checked everything with the database tests (22 of 22 passed), lint, and a build. One check, the code formatter, failed on 24 files even though nothing was wrong with the code. Claude figured out that Git on Windows changes the line endings when it downloads files, so we set the repo to keep the original Unix line endings.
- **Planning the lessons:** We went through the Driver Guide section by section and split it into 9 new lessons: traffic signs, turns and roundabouts, sharing the road, work zones and parking, hazards, crashes and traffic stops, impaired and distracted driving, your vehicle, and getting your license. We skipped the purely administrative parts like DOL offices and license plates, since a new driver doesn't need to study those.
- **Fixing a bug before it could happen:** While planning, we found that our publish script was all-or-nothing. Running it made every draft lesson visible to users. If I had checked 3 lessons and published them, the 6 unchecked ones would have gone live too. We changed it so it only publishes the lessons you name, and it refuses to run if the list is empty or an ID is misspelled. We tested it with 6 different cases. We also gave each new lesson its own file, so Abdulrahman and I don't run into each other's changes.
- **Writing 9 lessons at once:** Claude Code ran 9 AI agents in parallel, one per lesson, and each one wrote its lesson only from the official guide on dol.wa.gov. Then a second, separate agent fact-checked each lesson against the guide and fixed 92 problems. Finally, a script confirmed that all 782 guide quotes the agents cited appear word for word in the guide, so nothing was made up.
- **Teamwork on GitHub:** I opened PR #12 with the 9 lessons and the publish fix, and Abdulrahman reviewed and merged it. He then built on it with two PRs of his own:
  - **Fixed the answer-order bug (PR #13):** In our first 4 lessons, the correct answer was always the first choice, so you could get 100% by always clicking the top answer. Abdulrahman made the app shuffle the answer choices every time you open a lesson, and added a guard so a double click doesn't count twice. I had already spread the correct answers across all four positions in my new lessons, so they were safe either way.
  - **Moved the first 4 lessons into their own files (PR #14):** This made the old lessons match my one-file-per-lesson setup. He also added a check that proves the move didn't change any lesson content.

### Describe a time AI got it wrong or you had to correct it

This week AI did get things wrong, and that's exactly why we added the second checking step. The first set of agents left out steps for handling a tire blowout and a skid. The fact-checker caught it and put the steps back in the guide's order. In other places, an answer marked as "wrong" was actually correct according to a different part of the guide, so those questions had to be reworded. If we had trusted the first draft, we would have taught learners incomplete safety steps.

Claude Code also crashed my dev server. It ran a production build while my dev server was running, and the two share a folder. It told me right away and explained how to restart it. Even after two rounds of AI checking, a person still has to check each new lesson against the guide before it goes live. AI can speed up the writing, but it doesn't replace that check.

### How is your approach to using AI evolving?

I made it a hard rule that Claude Code has to walk me through its plan (which files change, what commands it will run, and the commit message) and wait for my OK before it does anything. Early in the week it started editing right after I said "let's do 2," and I realized I'd agreed to the idea but not the actual changes. I also told it never to add itself as an author on commits or PRs.

The other change is that I'm treating AI output like a draft that needs checking, not a final answer. This week that meant using one AI to check another, using code to confirm the quotes, and still keeping a human approval step. It's the same thing I do with math: I follow along and check the steps instead of copying the answer.

### Notes

Next up: check the 9 new lessons against the guide and publish the ones that pass, start on the "report a problem" button, and decide where the full guide text should live so the AI reviewer can check quotes and page numbers.

---

## Week 7 (Nov 16 – Nov 22)

### What AI tools did you use this week?

This week I used Claude Code to start CareForAll, my Moonshot project (Artifact 5) with Abdulrahman. It's a web app that replaces the paper logs that childcare, senior care and disability support programs use for attendance and daily activities. Before we wrote any code, we used AI to research the market and plan the app. I also kept using AI to study for my math classes.

### Describe a task where AI was helpful

The biggest task was researching before building. The idea came from childcare operators we know who log everything by hand. But we didn't want to build something that already exists, so we had Claude research the apps already on the market first. Here's what it found and how it helped:

- **What already exists:** Childcare is a crowded market led by Procare and Brightwheel, and it's still merging (Procare bought Playground in September). For senior care and adult day programs, tools like StoriiCare already cover attendance, care plans, medication records, family messaging and billing. Check-in, profiles and parent messaging are things every app already has, so they can't be what makes us different.
- **Finding the gap:** Smaller programs are the ones being left behind. A Procare industry report found that 44% of programs without software still use paper and pencil. That gave us our target: small programs that still log by hand.
- **Listing the real problems:** For childcare, the pain points are strict staff-to-child ratios, checking who's allowed to pick up a child, constant logging with busy hands (naps, meals, diapers, incidents), subsidy billing and high staff turnover.
- **Choosing 3 features to stand out:** All three come from the same problem. Staff are busy with kids, and logging gets in the way.
  - **Offline kiosk check-in:** a shared tablet that works without Wi-Fi and syncs later
  - **Hands-free voice logging:** staff say "Maya napped 1 to 2:15" and it becomes a log entry
  - **Pattern-change alerts:** flags things like nap times dropping or more absences, so staff can check in
- **Catching tradeoffs before coding:** Claude pointed out problems I wouldn't have seen yet:
  - Most good speech-to-text runs in the cloud, so voice logging fights with the offline kiosk.
  - Alerts only work after weeks of logged data, so they have to come last.
  - Audio recordings include children's names, so we have to decide when to delete them.
  - Alerts should say "nap times dropped this week," never anything that sounds like a diagnosis.
- **A plan instead of a pile of ideas:** We ended with a brainstorm summary and a 3-phase roadmap. Phase 1 is sign-up, child profiles and kiosk check-in. Phase 2 is voice logging and daily summaries for parents. Phase 3 is the alerts. After that we built a static home page and put it live on Vercel.

### Describe a time AI got it wrong or you had to correct it

When we put the site online, Claude guessed the URL of our live site and got a 200 response, which means the page loaded fine. So it looked like our site was up. But the page title said "Vite + React," and it turned out to be someone else's project at that address. A working page doesn't prove it's your page. Now we check the title and file names against our own build.

The research also had limits. Claude couldn't confirm whether Vercel's free plan allows a business to use it, because the docs it could read didn't say. Instead of guessing, it wrote that down as an open question to check in the Terms of Service before any launch. It also found out GitHub Pages needs a public repo on a free account, which is why we switched to Vercel. AI research is a good starting point, but anything we'd bet the business on, like terms of service or market numbers, needs a real source checked.

### How is your approach to using AI evolving?

With SuperDriver, we used AI to plan how to build the app. This time we used it one step earlier, to decide what to build at all. Researching competitors first kept us from building features every app already has.

The other change is that we set rules for how Claude works on this project:

- It has to lay out options and tradeoffs without picking one, wait for our decision, and only then give its honest opinion.
- It teaches as it goes, in plain language with examples.
- It never commits or pushes without our OK.
- Some code we type ourselves on purpose, like the router basename line, so we actually learn it instead of just watching AI write everything.

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

### Outline

**1. Introduction** (~150 words)

- Where I started: Claude webchat and Claude Code in Week 1, mostly fixing problems as they came up
- What I built with AI this quarter: portfolio, Facilitator Assistant, SuperDriver, CareForAll
- Main point: My AI use has allowed me to be a better/more efficient programmer in terms of completing tasks, understanding code and learning how to use AI effectively.

**2. My AI use progression** (~700–900 words)

- **How my use changed (Question 1)**
  - Early (Weeks 1–2): fixing errors and how-to questions, like the `python3` command; switching from webchat to Claude Code
  - Middle (Weeks 3–4): more everyday tasks: projects with context files, math study, emails, LaTeX worksheets
  - Late (Weeks 5–7): using AI before coding: planning SuperDriver, then researching what to build for CareForAll
  - Compare one early entry to one late entry side by side
- **What I learned to trust it for (Question 2)**
  - Week 1: fixing problems specific to my system once it could see my files
  - Week 2: checking its own work (screenshots, the browser cache problem)
  - Week 6: writing 9 lessons in parallel with a fact-checking step
  - Week 7: market research and spotting tradeoffs early
- **What I learned not to trust it for (Question 3)**
  - Week 1: Mac commands given without asking what computer I use
  - Week 2: much too technical until I asked it to teach me
  - Week 4 and math: knapsack DP table errors, methods outside my class
  - Week 6: missing blowout and skid steps, answers marked wrong that were right
  - Week 7: the "200 response" that was someone else's site; Vercel terms it couldn't confirm
  - Commonalities of all these
- **How I started controlling it**
  - Week 2: "teach me as we go"
  - Week 6: plan first, wait for my OK, no AI author on commits
  - Week 7: options without picking one, typing some code myself

**3. Conclusion** (~150 words)

- Advice for a student starting next quarter.
- Where I want to take my AI use next.

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
