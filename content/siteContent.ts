// All site copy lives here. Never hardcode strings in components.

// Kept from the earlier site: both quotes run verbatim, with permission.
export const testimonials = {
  label: "WHAT CLIENTS SAY",
  items: [
    {
      paragraphs: [
        "I have been utilizing AI tools Camden created to bring more efficiency to my work as Sublette County BOCES Director. One thing it has helped me do is distinguish between time spent on true executive-level work versus time I spend simply providing coverage for our services — a distinction that's easy to lose track of in a day that moves this fast.",
        "The daily journal has helped me track work progression over time and provides meaningful reminders of where I need to focus. I often capture my day in a voice memo at the end of the day, and it organizes and summarizes everything — then gives me a starting point for the next morning. It also flags board-worthy items as they happen, so I'm not reconstructing a month from memory when it's time to write the board report.",
        "The value has been significant. It keeps me focused on the work that actually requires me, while surfacing bigger organizational questions I might not have stopped to consider otherwise.",
      ],
      name: "Robin Schamber",
      title: "Director, Sublette County BOCES",
    },
    {
      paragraphs: [
        "I started working with Camden because I was juggling multiple demanding roles while preparing to take over a retail business. I needed something that could not just keep up with all of it, but actually help me operate more efficiently, give me practical advice, and provide tools that moved the needle.",
        "When I first met with Camden, he took the time to figure out exactly how I needed help. He went deeper than just getting me organization and got to real answers and systems that could actually take work off my plate and make my life more manageable. That set the tone for everything that followed.",
        "The journaling framework that is part of the program completely shifted how I start my days. Instead of waking up and reacting to whatever felt most urgent, I had a place to intentionally organize my thoughts and priorities. Having somewhere to brain dump everything stopped me from carrying it all in my head all the time. That alone significantly reduced my mental load.",
        "Time management has also been a huge shift. I used to operate almost entirely on urgency and whatever was loudest in the moment. Now I have a structure that helps me identify what truly matters today versus what can wait. I am also getting better at boundaries, which honestly does not come naturally to me. Having someone reflect patterns back to me without judgment helped me recognize where I was taking on work that was not mine or saying yes when I should have said no.",
        "One of the most surprising parts of the process was realizing how much I was actually accomplishing. I constantly felt behind and overwhelmed, but once I started tracking my progress, I could clearly see I was moving things forward every single week. Seeing it documented changed the way I viewed my own output.",
        "The accountability piece is real. Having a place to openly name what I was avoiding, and then being called out on it directly, helped me finally close loops that otherwise would have drifted for weeks.",
        "I will also be honest. I was intimidated by the idea of building my own AI program in Claude. I did not think I was smart enough to do it. But as I worked with Camden and went deeper into the process, my mindset started to shift. Eventually, I built my own AI tool completely from scratch. That felt like a huge milestone, and I genuinely do not think I would have gotten there without the confidence this process helped build in me.",
        "What I appreciate most is that Camden stays with you throughout the process. He continuously tweaks and adjusts the program as your needs evolve and offers practical tips and guidance along the way. It never felt like a one size fits all system. It was built around my life, my responsibilities, and the way my brain works.",
        "His program works for so many different areas of life, whether it is business, work, personal growth, or managing your private life. What makes it different is that it adapts to your goals, your responsibilities, and the way your brain works, which makes it effective no matter what season of life or business you are in. Camden created something that truly meets people where they are, and that makes all the difference.",
      ],
      homepageQuote:
        "The accountability piece is real. Having a place to openly name what I was avoiding, and then being called out on it directly, helped me finally close loops that otherwise would have drifted for weeks. His program works for so many different areas of life, whether it is business, work, personal growth, or managing your private life. What makes it different is that it adapts to your goals, your responsibilities, and the way your brain works, which makes it effective no matter what season of life or business you are in. Camden created something that truly meets people where they are, and that makes all the difference.",
      name: "Christy Devlin",
      title: "Owner, White Bear Boutique and Decor",
    },
  ],
};

// Kept until the attorney-reviewed rewrite: /privacy-policy imports it.
export const privacyPolicy = {
  title: "Privacy Policy",
  effectiveDate: "March 26, 2026",
  lastUpdated: "May 8, 2026",
  contact: "camden@pallume.com",
  sections: [
    {
      heading: "What This Policy Covers",
      body: "This Privacy Policy explains what information Pallume collects when you visit pallume.com, how that information is used, and what choices you have. Pallume is a one-person coaching practice operated by Camden Bennett. Your data is never sold, rented, or traded.",
    },
    {
      heading: "Information We Collect",
      body: "",
      subsections: [
        {
          label: "Information you provide directly:",
          text: "When you complete the qualifier form or contact us, we collect the information you submit — typically your name, email address, phone number, and your responses to intake questions. We only collect what you choose to give us.",
        },
        {
          label: "Information collected automatically:",
          text: "When you visit pallume.com, standard web analytics tools collect basic technical data: pages visited, time spent on the site, device type, browser type, and general geographic location (city/country level). This data is aggregated and anonymous — it is not tied to your name or contact information.",
        },
        {
          label: "Cookies:",
          text: "This site uses cookies to support analytics and basic site functionality. Analytics cookies help us understand how visitors use the site so we can improve it. You can disable cookies in your browser settings at any time.",
        },
      ],
    },
    {
      heading: "How We Use Your Information",
      body: "Information you submit through the qualifier form or contact form is used exclusively to:",
      list: [
        "Respond to your inquiry",
        "Schedule and conduct an initial consultation",
        "Build and deliver your Pallume Journal system if you become a client",
        "Send coaching feedback and session-related communications",
      ],
      footer: "We do not use your information for advertising, email marketing lists, or any purpose unrelated to the service you requested.",
    },
    {
      heading: "How We Store and Protect Your Information",
      body: "Intake responses and client information are stored in tools used to deliver the coaching service (which may include Notion, Google Workspace, and Claude). These platforms maintain their own security and privacy standards. We do not store payment card information — payments are processed by third-party payment processors who are responsible for securing that data.\n\nWe take reasonable precautions to protect your information, but no method of transmission over the internet is completely secure. If you have concerns about a specific piece of sensitive information, contact us before submitting it through a web form.",
    },
    {
      heading: "AI Coaching System Data",
      body: "If you become a Pallume coaching client, your daily interactions with the Pallume Journal system are processed through a third-party artificial intelligence platform (currently Claude, operated by Anthropic, PBC). This means the content you enter during coaching sessions — including business information, goals, reflections, and any other text you provide — flows through that platform's infrastructure and is subject to that platform's privacy policy and data practices.\n\nKey facts you should know:",
      list: [
        "By default, the AI platform may use your conversation data to train its models. During onboarding, we provide instructions to disable this feature in your account settings. We strongly recommend completing this step before beginning daily journaling.",
        "If model training is disabled, the platform currently retains conversation data for up to 30 days. If training remains enabled, data may be retained for up to 5 years.",
        "Your AI coaching account is yours — Pallume does not access, log into, or control your account on the AI platform. You are responsible for your account security and privacy settings.",
        "Pallume does not control the AI platform provider's data handling practices and cannot guarantee how that provider stores, processes, or secures your data.",
        "For the most current information, we recommend reviewing the AI platform provider's privacy policy directly.",
      ],
      footer: "The specific terms governing data handling between you and Pallume are detailed in the Master Service Agreement signed before coaching begins.",
    },
    {
      heading: "Information Sharing",
      body: "We do not sell, rent, or share your personal information with third parties for marketing purposes.\n\nWe may share information only in these limited circumstances:",
      subsections: [
        {
          label: "Service delivery:",
          text: "Tools necessary to deliver the coaching service (e.g., scheduling software, document storage). These are disclosed to clients directly.",
        },
        {
          label: "Legal compliance:",
          text: "If required by law, court order, or government authority.",
        },
        {
          label: "Business transfer:",
          text: "In the unlikely event Pallume is sold or merged, client data would transfer as part of the business. You would be notified before that occurs.",
        },
      ],
    },
    {
      heading: "Google Analytics",
      body: "This site uses Google Analytics 4 to understand how visitors use the site. Google Analytics collects anonymized usage data. Google's use of this data is governed by Google's Privacy Policy (policies.google.com/privacy). You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout).",
    },
    {
      heading: "Your Rights",
      body: "You have the right to:",
      list: [
        "Access the personal information we hold about you",
        "Correct any inaccurate information",
        "Request deletion of your information (subject to any legal obligations we have to retain records)",
        "Withdraw consent for any communication at any time",
      ],
      footer: "To exercise any of these rights, email camden@pallume.com. We will respond within 30 days.",
    },
    {
      heading: "Children's Privacy",
      body: "Pallume is a professional coaching service intended for adults. We do not knowingly collect personal information from anyone under the age of 18. If you believe a minor has submitted information through this site, contact us and we will delete it promptly.",
    },
    {
      heading: "External Links",
      body: "This site may contain links to external websites. We are not responsible for the privacy practices of those sites. We recommend reviewing the privacy policy of any site you visit.",
    },
    {
      heading: "Changes to This Policy",
      body: "If we make material changes to this policy, we will update the \"Last Updated\" date at the top and, where appropriate, notify active clients by email. Continued use of the site after changes are posted constitutes acceptance of the updated policy.",
    },
  ],
};

// ════════════════════════════════════════════════════════════════════════════
// SITE 2026 — the new offer. Written by Pallume Productization, 10/11/2026.
// Writer of this file's words: Productization only (DESIGN.md §11). The Website
// session builds pages from `site2026` and never edits this file. The two
// exports above are the only survivors of the retired coaching-era copy
// (removed 10/14/2026). Design rules: ~/Overwatch/02-businesses/pallume/DESIGN.md.
// Voice rules: ~/Overwatch/02-businesses/pallume/VOICE-SIGNATURE.md (D-50).
// Module words are NOT here: they live in
// ~/Overwatch/02-businesses/pallume/module-descriptions.json — sync that file
// into content/ at build time and read `site_line` and `site` from it.
// Decisions behind these words: D-80 (paid at purchase, no free tier, free is
// video; no tester applications on the site, Camden 10/11), D-84 (Claude Code, the
// desktop app), D-86 (Pallume never sees what you write), D-87–D-89 (brand).
// ════════════════════════════════════════════════════════════════════════════

export const site2026 = {
  meta: {
    title: "Pallume — Clarity for your business",
    description:
      "A journal that reads what gets in your way, and a system that fixes it, running in Claude on your own computer. Plus fixed-scope consulting for problems worth solving properly.",
  },

  nav: {
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Consulting", href: "/consulting" },
      { label: "The Work", href: "/the-work" },
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
    ],
  },

  // FirstLightHero: the image and the wordmark only. The tagline stays off the
  // hero for now (D-50 note, 10/11/2026).
  hero: {
    wordmark: "Pallume",
    imageAlt: "A person seated on a granite outcrop before dawn, a lantern lit beside them, fog over a mountain lake below.",
  },

  // First section below the image. Two-tone headline (DESIGN.md §3): first
  // sentence in --text, second in --text-muted. Rhythm 7, the anchor.
  opener: {
    headline: ["Your day holds no surprises.", "So why are you still overwhelmed?"],
    paragraphs: [
      "It's nine at night and the laptop is still open on the kitchen table. You answered everything today. You can't name one thing that moved.",
      "You know what matters. You knew it this morning. The day went to everyone else's version of urgent, the way it did yesterday and the way it will tomorrow.",
    ],
  },

  // Leads the homepage straight after the opener (Camden, 10/12/2026). Consulting
  // is a one-line footnote to the product, linking /consulting, not a section.
  home: {
    productLine:
      "The Pallume System is a daily journal that reads what gets in your way, and the tools that fix it, all running in Claude on your own computer. You buy it once. It opens this winter.",
    consultingFootnote: "Separately, I take fixed-scope consulting on business problems worth at least $50,000.",
  },

  // Rhythm 2. Reframes the problem from willpower to system.
  diagnosis: {
    headline: ["You don't have a discipline problem.", "You have a defaults problem."],
    paragraphs: [
      "Every unexamined yes, every inbox opened before the real work, every Tuesday that runs itself. None of it is a character flaw. It's a system nobody designed, running exactly as built.",
      "Pallume gives you a different one, built from how your days actually go.",
    ],
  },

  // A real sequence, so numbering is information (DESIGN.md: structure is information).
  howItWorks: {
    headline: ["It starts with what you write.", "Then it gets to work."],
    steps: [
      {
        name: "The Journal",
        body: "One entry a day, in two parts: what got in your way, and what's on your mind. The journal reads them back, names what keeps showing up, and builds a list of things worth fixing, in your words.",
      },
      {
        name: "The baseline",
        body: "Over the first few weeks it learns how your work and life actually run: your tools, your time, your people, where things rub. When the picture is complete, it tells you, and writes your strategy from what you wrote.",
      },
      {
        name: "Overwatch",
        body: "Then the work starts. Overwatch builds what the journal found: the checklists, drafts, routines, and the board that shows your whole operation at a glance. The journal keeps going beside it.",
      },
    ],
    modulesIntro: "Overwatch runs the modules you need as the need shows up, not before.",
    // Module list: read from module-descriptions.json (synced), in this order.
    moduleOrder: ["journal", "overwatch", "triage", "focus", "inbox", "people", "research", "prompt", "examen"],
  },

  // The honest part. The first line is locked (D-80, 10/06/2026).
  requirements: {
    headline: ["This fails one hundred percent of the time if you don't use it.", "Not most of the time. Every time."],
    paragraphs: [
      "It has nothing to work with except what you write. A few minutes a day, three mornings a week at the least, and it starts to see what you can't.",
    ],
    list: [
      "A Claude account in your own name, on a paid plan. Pro is enough.",
      "The Claude desktop app on your Mac or PC. Everything runs there, in a folder on your own computer.",
      "Your own account, not your employer's. What you write is yours.",
    ],
  },

  privacy: {
    headline: "Pallume knows what you bought. Never what you write.",
    body: "Your journal and everything built from it live in a folder on your computer and in your own Claude account. Nothing you write is sent to Pallume. Not a summary, not a sample, not a number.",
  },


  consulting: {
    headline: ["Some problems are worth solving properly.", "Those are the ones I take."],
    paragraphs: [
      "This isn't coaching. It's problem-first work: I listen, figure out what's actually wrong, and solve it. Fixed scope, fixed fee, and a defined end. No retainer, because a retainer pays me for time, not for the result.",
      "It fits problems worth at least $50,000 to the business. The fee is set in the conversation, once the problem is clear.",
    ],
    // Was "paths"; path language is retired. Three starting points, not three offers.
    startingPoints: [
      { name: "You know the problem", body: "I scope it and solve it." },
      { name: "You can feel it, but can't name it", body: "I find the cause first, then fix that." },
      { name: "You can't tell yet", body: "A full diagnostic of the business comes first. This is the only starting point that begins there." },
    ],
  },

  founder: {
    name: "Camden Bennett",
    imageSrc: "/images/camden-headshot.jpg",
    imageAlt: "Camden Bennett, founder of Pallume",
    paragraphs: [
      "Fifteen years in the Navy, first as a diver, then as an intelligence officer. Both jobs run on accurate information, read clearly and acted on. Then I came home to Wyoming and ran the top-producing brokerage in Sublette County, with my time finally my own, and found out what reactive mode really costs.",
      "I built the system for myself first. I run it every morning on my own business, and every part of Pallume ran on my real work before anyone else saw it.",
    ],
    pullQuote: "I don't sell anything I haven't run on my own work first.",
  },

  // The founding tenet belongs on the About page and the sales page (Voice Signature).
  closing: {
    tenet: "Stop doing things that sound nice and don't matter.",
  },

  // Rule 8 of the Voice Signature: the tagline closes everything.
  footer: {
    tagline: "Pallume. Clarity for your business.",
    contact: "camden@pallume.com",
    links: [
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms-of-service" },
    ],
  },

  // The banner on every first visit. Nothing loads before a yes.
  analyticsConsent: {
    body: "May this site use Google Analytics? It counts visits and which pages get read, and it sets cookies. Nothing loads unless you say yes.",
    allow: "Allow",
    decline: "No thanks",
    settings: "Analytics settings",
  },

  // On /consulting only; the site's one form. No apply buttons anywhere.
  // {email} stays literal; the site fills in footer.contact.
  contactForm: {
    name: "Name",
    email: "Email",
    message: "What's the problem, and what is it costing you?",
    send: "Send",
    sent: "Sent. I read every message myself.",
    error: "That didn't send. Email {email} instead.",
  },

  about: {
    meta: {
      title: "About Camden Bennett — Pallume",
      description:
        "Navy diver and intelligence officer, Wyoming real estate broker, and the first user of every part of Pallume.",
    },
    headline: ["Stop doing things that sound nice", "and don't matter."],
    paragraphs: [
      "That's the line I wish someone had said to me years earlier. I was the managing broker of the top-producing brokerage in Sublette County, and I knew exactly which work would grow it. I just never got to it. The phone, the questions, the fires, the emails got the best hours of every day.",
      "I tried earlier mornings, headphones, notebooks, three calendars, a shelf of productivity books, and every app with a checkbox. Some of it helped for a week.",
      "What finally worked was a system built around my real days instead of my good intentions, run every morning until the evidence showed up. That system is what Pallume sells, and I still run it on my own business.",
    ],
  },

  consultingPage: {
    meta: {
      title: "Consulting — Pallume",
      description: "Fixed-scope, fixed-fee work on business problems worth at least $50,000, with a defined end."
    },
  },

  faqPage: {
    meta: {
      title: "FAQ — Pallume",
      description:
        "What you need to run Pallume, how much time it takes, who can read what you write, and how the consulting works.",
    },
    headline: "Questions worth asking before you buy.",
  },

  reviewsPage: {
    meta: {
      title: "Reviews — Pallume",
      description: "Two clients describe what changed in their own work, in their own words, unedited.",
    },
    headline: "In their own words.",
    lead: "Unedited, and printed with permission. Two clients describe what changed in their own work, and why.",
  },

  faq: [
    {
      q: "Isn't this just ChatGPT with extra steps?",
      a: "No. It runs in Claude, on your own computer, in a folder that holds everything you've written and everything built from it. A chat forgets. This doesn't, because the folder is the memory.",
    },
    {
      q: "What do I need?",
      a: "A paid Claude plan in your own name (Pro is enough), the Claude desktop app on a Mac or PC, and the willingness to write a little most days.",
    },
    {
      q: "How much time does it take?",
      a: "A few minutes, most days. Three mornings a week is the floor. A short entry counts.",
    },
    {
      q: "Can Pallume read my journal?",
      a: "No. It lives on your computer and in your Claude account. Pallume knows what you bought, never what you write.",
    },
    {
      q: "Is it a subscription?",
      a: "No. You buy it once. The only ongoing cost is your own Claude plan, which you pay Anthropic directly.",
    },
    {
      q: "Is there a free trial?",
      a: "No. What's free is the videos and the webinar, where I teach the basic methods, enough to build your own version. The finished system is paid at purchase, because something you didn't commit to is something you won't use.",
    },
    {
      q: "Can I get a refund?",
      a: "Yes. You have 14 days from purchase. Once you set up Overwatch, it's 10 days from that day instead. A refund switches off Overwatch's engine; your journal and your notes stay yours.",
    },
    {
      q: "Can I use my work account?",
      a: "Use your own. What you write belongs to you, and an employer's account belongs to the employer.",
    },
    {
      q: "When can I buy it?",
      a: "It opens this winter. Webinar dates will be posted here first."
    },
    {
      q: "Is the consulting coaching?",
      a: "No. It's fixed-scope work on one problem worth solving, with a fixed fee and a defined end. No monthly retainer.",
    },
    {
      q: "Is there a free call?",
      a: "The webinar is the free call. You'll see the whole system and get your questions answered live.",
    },
  ],
};
