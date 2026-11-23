const artifacts = [
  {
    number: 1,
    status: "done",
    title: "This portfolio site",
    link: "https://github.com/cm0407/Software-Projects",
    body: " Building this portfolio was exciting. I tried to do it without having claude make the folder and files for me, I did use html and css templates from the web, but I tried to make it my own. I learned a lot about html, css, and javascript while making this site, and I hope to continue improving it in the future.",
  },
  {
    number: 2,
    status: "done",
    title: "Facilitator Assistant",
    link: "https://cm0407.github.io/Facitant/",
    body: "Building a facilitator assistant for my Discrete Math 2 credit workshop course was taking was a great experience. I learned a lot about how to use javascript to create a web application, and I also learned about how to use APIs to get data from the web. The project was a great opportunity to learn about web development,how html, css and javascript work together, and I hope to continue improving it in the future.",
  },
  {
    number: 3,
    status: "done",
    title: "Investment platform",
    link: "https://cm0407.github.io/AI-Investment-Project/",
    body: "This build was an update to a project I had been working on. Before this, all the screening and scoring in my investment research system was done by python scripts. We made the model a judge for the judgement half of my rubric; is this a good business, does it have a moat, what could go wrong, and it never touches a number. Where AI really helped me understand something was the backtest. The model kept scoring catalysts low because my evidence comes from SEC filings and catalysts are news. So the problem was my evidence, not the model.",
  },
  {
    number: 4,
    status: "done",
    title: "SuperDriver",
    link: "https://super-driver-seven.vercel.app/",
    body: "SuperDriver is an interactive driver's ed app for young people that teaches Washington State driving laws, and I built it with my teammate Abdulrahman Elmi. The biggest thing I learned was how to sit down with a teammate and plan before any code is written, agreeing on the big pieces like Next.js and Supabase first, since with two people every decision affects both of us. My part was turning the rest of the Washington Driver Guide into lessons, and I used Claude Code to draft nine lessons with 159 practice questions, with one AI agent writing each lesson and a second fact-checking it against the official guide. While testing, my dev server crashed with a confusing Jest error, and it turned out the AI caused it by running a production build that overwrote the .next folder my server was using. I learned that AI is fast at debugging when it knows what changed recently, but it can also be the cause of the bug, so now I read its warnings more carefully and double-check what it says it did.",
  },
  {
    number: 5,
    status: "in-progress",
    week: 2,
    title: "CareForAll",
    link: "https://frontend-pink-eight-29.vercel.app/",
    body: "CareForAll is a web app I'm building with my teammate Abdulrahman Elmi to replace the paper logs that childcare, senior care, and disability support programs use for attendance and daily activities. The idea came from seeing childcare operators we know log everything by hand. The biggest thing I learned was how to research software that already exists, like Procare, Brightwheel, and StoriiCare, and see what we can build that doesn't already exist. Check-in and parent messaging are things every app already has, so we focused on smaller programs that still use paper and picked three features to stand out: offline kiosk check-in, hands-free voice logging, and alerts when someone's routine changes. I also learned to think through tradeoffs before writing code, like voice logging needing the internet while the kiosk has to work offline. Next we want to interview the operators we know so their real paper logs shape what we build.",
  },
];
