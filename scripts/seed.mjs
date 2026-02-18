import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "twgqgtz0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

async function seed() {
  console.log("Seeding Sanity with website content...\n");

  // --- Profile ---
  console.log("Creating profile...");
  await client.createOrReplace({
    _id: "profile-soniya",
    _type: "profile",
    name: "Soniya Gupta-Rawal",
    title: "PhD Candidate, Management Studies (Marketing)",
    institution: "Cambridge Judge Business School, University of Cambridge",
    tagline:
      "Finding potential in percentages. Identifying narratives behind numbers for business strategy and marketing insights.",
    bio: [
      {
        _type: "block",
        _key: "bio1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s1",
            marks: [],
            text: "Soniya Gupta-Rawal is a PhD candidate in Management Studies (Marketing) at Cambridge Judge Business School, University of Cambridge, supervised by Prof. Jaideep Prabhu. She is a Commonwealth Scholar and recipient of the Tony Cowling Memorial Research Award and Judge Business School PhD Fellowship.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s2",
            marks: [],
            text: "Her research specializing in Quantitative Marketing tackles critical marketing challenges for entrepreneurs in emerging markets \u2014 especially micro-entrepreneurs, female entrepreneurs, the informal sector, and unorganized retail. Using field experiments, AI, and economic analysis, Soniya identifies what works for micro-entrepreneurs in India and Sub-Saharan Africa.",
          },
        ],
      },
      {
        _type: "block",
        _key: "bio3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s3",
            marks: [],
            text: "Her thesis, Business Innovation with Marketing Strategies for Micro-entrepreneurs in Emerging Markets, draws on econometric methods, causal inference, and machine learning to develop evidence-based marketing strategies for underserved entrepreneurs.",
          },
        ],
      },
    ],
    email: "sg2001@jbs.cam.ac.uk",
  });
  console.log("  \u2713 Profile created");

  // --- Research Areas ---
  console.log("Creating research areas...");
  const areas = [
    {
      _id: "area-1",
      title: "Marketing Strategy & Innovation",
      description:
        "Developing evidence-based marketing strategies for entrepreneurs in emerging markets, with focus on micro-entrepreneurs and the informal sector in India and Sub-Saharan Africa.",
      icon: "\ud83d\udcca",
      order: 1,
    },
    {
      _id: "area-2",
      title: "Entrepreneurship in Emerging Markets",
      description:
        "Studying micro-entrepreneurship, female entrepreneurship, and unorganized retail \u2014 understanding what drives business growth for underserved entrepreneurs.",
      icon: "\ud83c\udf0d",
      order: 2,
    },
    {
      _id: "area-3",
      title: "Econometric Modelling & Causal Inference",
      description:
        "Applying field experiments, regression kink design, and quasi-experimental methods to measure causal impacts of marketing interventions.",
      icon: "\ud83d\udd2c",
      order: 3,
    },
    {
      _id: "area-4",
      title: "Social Impact & Sustainability",
      description:
        "Evaluating frugal innovation, digital leapfrogging for agricultural productivity, climate resilience, and sustainable business practices in developing nations.",
      icon: "\ud83c\udf31",
      order: 4,
    },
  ];
  for (const area of areas) {
    await client.createOrReplace({ ...area, _type: "researchArea" });
    console.log(`  \u2713 ${area.title}`);
  }

  // --- Publications ---
  console.log("Creating publications...");
  const publications = [
    {
      _id: "pub-1",
      title:
        "Democratizing Space: India\u2019s Frugal Space Innovation Provides Key Lessons for Emerging Nations",
      authors: "Corrado, L., Gupta-Rawal, S., Kattuman, P., & Prabhu, J.",
      year: 2026,
      type: "journal",
      journal: "PNAS Opinion",
      abstract: "",
      doi: "",
      pdfUrl: "",
      featured: true,
    },
    {
      _id: "pub-2",
      title:
        "Dynamic AI-embedded Super App: A Design-Based Process Innovation towards Customer Engagement and Value Creation",
      authors: "Gupta, S., Gupta-Rawal, S., & Shrivastava, P.",
      year: 2025,
      type: "journal",
      journal: "Journal of Product Innovation Management, 1\u201326",
      abstract: "",
      doi: "10.1111/jpim.70009",
      pdfUrl: "",
      featured: true,
    },
    {
      _id: "pub-3",
      title:
        "More the Merrier!! Understanding the Effect of Available Content Choices over Willingness to Pay for Over-the-Top Subscriptions",
      authors: "Gupta, S., Shrivastava, P., & Gupta-Rawal, S.",
      year: 2023,
      type: "journal",
      journal: "Psychology & Marketing, 40(12), 2612\u20132626",
      abstract: "",
      doi: "10.1002/mar.21895",
      pdfUrl: "",
      featured: true,
    },
    {
      _id: "pub-4",
      title:
        "Online-to-Offline (O2O) Commerce in Emerging Markets: Analysis of the Retail Sector",
      authors: "Gupta-Rawal, S. & Jeyaraj, A.",
      year: 2021,
      type: "journal",
      journal: "Journal of Asia-Pacific Business, 22(4), 260\u2013278",
      abstract: "",
      doi: "10.1080/10599231.2021.1983501",
      pdfUrl: "",
      featured: false,
    },
    {
      _id: "pub-w1",
      title:
        "Matching Entrepreneurs with Mentors: Customising Business Mentoring Based on Mentee & Mentor Characteristics",
      authors: "Gupta-Rawal, S., Khwaja, A., & Prabhu, J.",
      year: 2026,
      type: "working",
      journal: "Preparing for Marketing Science",
      abstract: "",
      doi: "",
      pdfUrl: "",
      featured: true,
    },
    {
      _id: "pub-w2",
      title:
        "Signals from Space, Decisions on Farms: Digital Leapfrogging for Agricultural Productivity, Climate Resilience & Sustainability",
      authors: "Gupta-Rawal, S., Corrado, L., Kattuman, P., & Prabhu, J.",
      year: 2026,
      type: "working",
      journal: "Preparing for Management Science",
      abstract: "",
      doi: "",
      pdfUrl: "",
      featured: true,
    },
    {
      _id: "pub-w3",
      title:
        "Shattering the Invisible Chains: Social Constraints and Supplier Dependency of Women Entrepreneurs in Egypt",
      authors: "Hassan, M., Gupta-Rawal, S., Vassello, J., & Prabhu, J.",
      year: 2026,
      type: "working",
      journal: "Preparing for Journal of Marketing",
      abstract: "",
      doi: "",
      pdfUrl: "",
      featured: true,
    },
    {
      _id: "pub-w4",
      title:
        "The Frugal Space Race: Frugal Innovation and the Cost of Environmental Information in the Global Space Programmes",
      authors: "Corrado, L., Gupta-Rawal, S., Kattuman, P., & Prabhu, J.",
      year: 2026,
      type: "working",
      journal: "Preparing for Science Policy",
      abstract: "",
      doi: "",
      pdfUrl: "",
      featured: false,
    },
  ];
  for (const pub of publications) {
    await client.createOrReplace({ ...pub, _type: "publication" });
    console.log(`  \u2713 ${pub.title.substring(0, 60)}...`);
  }

  // --- Projects ---
  console.log("Creating research projects...");
  const projects = [
    {
      _id: "proj-1",
      title: "Mentor Matching: Impact of Customized Mentoring on Entrepreneurs",
      slug: { _type: "slug", current: "mentor-matching" },
      description:
        "In collaboration with Micromentor (Capital For Good), this University of Cambridge-backed project develops a two-sided matching framework to customize business mentoring based on mentee and mentor characteristics. Using econometric modelling and machine learning, we aim to maximize successful matches and drive evidence-based improvements in the Micromentor platform\u2019s matching algorithm.",
      status: "active",
      collaborators: "Prof. Jaideep Prabhu, Prof. Ahmed Khwaja",
      startDate: "2022-01-01",
    },
    {
      _id: "proj-2",
      title: "Banas Dairy: Strengthening Rural Retail through Umang Malls",
      slug: { _type: "slug", current: "banas-dairy" },
      description:
        "Partnering with Banas Dairy \u2014 India\u2019s largest dairy cooperative and a key contributor to Amul \u2014 to research sales performance, consumer behaviour, and marketing strategies for the Umang Mall rural retail model. The initiative covers 35+ stores in rural areas following a circular economy model, offering branded products to rural consumers.",
      status: "active",
      collaborators: "Prof. Jaideep Prabhu",
      startDate: "2025-01-01",
    },
    {
      _id: "proj-3",
      title: "Shattering the Invisible Chains: Women Entrepreneurs in Egypt",
      slug: { _type: "slug", current: "women-entrepreneurs-egypt" },
      description:
        "Investigating how age and gender influence buyer dependency in micro-enterprises in Egypt. Using scenario-based field experiments, this study identifies effective interventions \u2014 including negotiation training, alternative supplier information, and networking opportunities \u2014 to reduce supplier dependency and improve business performance for women entrepreneurs.",
      status: "active",
      collaborators: "Prof. Jaideep Prabhu, Magda Hassan, Jarrod Vassello",
      startDate: "2024-01-01",
    },
    {
      _id: "proj-4",
      title: "The Frugal Space Race: ISRO Satellite Project",
      slug: { _type: "slug", current: "frugal-space-race" },
      description:
        "Investigating the role of frugal innovation in India\u2019s space programme (Chandrayaan, Mangalyaan), emphasizing how constraint-led innovation has made India globally competitive. Gathering comparative data on 17,000+ global satellite launches (US, Russia, China, etc.) to benchmark India\u2019s performance on cost-effectiveness and policy implications.",
      status: "active",
      collaborators: "Prof. Jaideep Prabhu, Paul Kattuman, Luisa Corrado",
      startDate: "2022-01-01",
    },
    {
      _id: "proj-5",
      title: "Farmonaut: AI-Powered Satellite Advisories for Farmers",
      slug: { _type: "slug", current: "farmonaut" },
      description:
        "Evaluating the causal impact of Farmonaut\u2019s AI-powered satellite-based agricultural advisories on farmer productivity. Comparing WhatsApp-based alerts versus the JEEVN AI web portal, using remote sensing data (NDVI, SAVI), Regression Kink Design, and quasi-experimental techniques across 900+ farms.",
      status: "active",
      collaborators: "Paul Kattuman, Luisa Corrado, Prof. Jaideep Prabhu",
      startDate: "2023-01-01",
    },
  ];
  for (const proj of projects) {
    await client.createOrReplace({ ...proj, _type: "project" });
    console.log(`  \u2713 ${proj.title}`);
  }

  // --- Talks ---
  console.log("Creating talks...");
  const talks = [
    {
      _id: "talk-1",
      title: "Match Frictions and Engagement: Two-sided Matching for Digital Business Mentoring in Indonesia",
      event: "ISMS Marketing Science Conference, Nova School of Business and Economics",
      date: "2026-06-15",
      location: "Portugal",
    },
    {
      _id: "talk-2",
      title: "Match Frictions and Engagement: Two-sided Matching for Digital Business Mentoring in Indonesia",
      event: "EMAC Main Conference & Global Doctoral Colloquium, University of Bath",
      date: "2026-05-20",
      location: "UK",
    },
    {
      _id: "talk-3",
      title: "Match Frictions and Engagement: Two-sided Matching for Digital Business Mentoring in Indonesia",
      event: "AMA Global Conference",
      date: "2026-05-10",
      location: "Nice, France",
    },
    {
      _id: "talk-4",
      title: "Shattering the Invisible Chains: Social Constraints and Supplier Dependency of Women Entrepreneurs in Egypt",
      event: "AMA Winter Conference",
      date: "2026-02-15",
      location: "Madrid, Spain",
    },
    {
      _id: "talk-5",
      title: "Signals from Space, Decisions on Farms: Digital Leapfrogging for Agricultural Productivity, Climate Resilience & Sustainability",
      event: "Ivey-PhD Sustainability Academy (Best Paper Award)",
      date: "2025-11-15",
      location: "",
    },
    {
      _id: "talk-6",
      title: "Signals from Space, Decisions on Farms: Digital Leapfrogging for Agricultural Productivity",
      event: "4th UK Workshop on Digital Economics, Centre for Competition Policy (CCP), Imperial London",
      date: "2025-11-10",
      location: "London, UK",
    },
    {
      _id: "talk-7",
      title: "Match Frictions and Engagement: Two-sided Matching for Digital Business Mentoring in Indonesia",
      event: "SEI Research Day, Bayes Business School",
      date: "2025-11-01",
      location: "London, UK",
    },
    {
      _id: "talk-8",
      title: "Match Frictions and Engagement",
      event: "Cambridge Zero Research Symposia",
      date: "2024-11-15",
      location: "Cambridge, UK",
    },
    {
      _id: "talk-9",
      title: "Capital-centric Opportunities for Skill Training of Microentrepreneurs in Emerging Markets",
      event: "Commonwealth Scholarship Commission Conference 2023",
      date: "2023-06-15",
      location: "Cambridge, UK",
    },
    {
      _id: "talk-10",
      title: "The Future is Remote \u2014 Social Impact of Telemedicine Business in Emerging Markets",
      event: "Cambridge Zero Research Symposia",
      date: "2021-11-15",
      location: "Cambridge, UK",
    },
    {
      _id: "talk-11",
      title: "Super App: A Design Innovation towards Customer Engagement",
      event: "AMA Winter Academic Conference 2021",
      date: "2021-02-15",
      location: "",
    },
    {
      _id: "talk-12",
      title: "Store Promotion using Halo Effect Contamination in Consumer Decision Making",
      event: "International Communication Management Conference, MICA (Consolation Prize, Best Paper Awards)",
      date: "2020-01-15",
      location: "India",
    },
  ];
  for (const talk of talks) {
    await client.createOrReplace({ ...talk, _type: "talk" });
    console.log(`  \u2713 ${talk.title.substring(0, 60)}...`);
  }

  // --- Collaborators ---
  console.log("Creating collaborators...");
  const collaborators = [
    { _id: "collab-1", name: "Prof. Jaideep Prabhu", institution: "Cambridge Judge Business School" },
    { _id: "collab-2", name: "Prof. Ahmed Khwaja", institution: "Yale School of Management" },
    { _id: "collab-3", name: "Prof. Luisa Corrado", institution: "University of Cambridge / University of Rome" },
    { _id: "collab-4", name: "Paul Kattuman", institution: "Cambridge Judge Business School" },
    { _id: "collab-5", name: "Magda Hassan", institution: "Cambridge Judge Business School" },
    { _id: "collab-6", name: "Jarrod Vassello", institution: "Cambridge Judge Business School" },
    { _id: "collab-7", name: "Prof. Shaphali Gupta", institution: "MICA, India" },
    { _id: "collab-8", name: "Micromentor (Capital For Good)", institution: "Mentoring Platform Partner" },
    { _id: "collab-9", name: "Banas Dairy / Amul Cooperative", institution: "Industry Partner, India" },
    { _id: "collab-10", name: "Farmonaut", institution: "AgriTech Partner" },
  ];
  for (const collab of collaborators) {
    await client.createOrReplace({ ...collab, _type: "collaborator" });
    console.log(`  \u2713 ${collab.name}`);
  }

  // --- RA Application ---
  console.log("Creating RA Application...");
  await client.createOrReplace({
    _id: "ra-application-1",
    _type: "raApplication",
    heading: "Research Apprenticeship Program",
    introduction: [
      {
        _type: "block",
        _key: "ra1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "ras1",
            marks: [],
            text: "Under the guidance of Prof. Jaideep Prabhu \u2014 Professor of Marketing, Jawaharlal Nehru Professor of Indian Business and Enterprise, and Director of the Cambridge Centre for India and Global Business at Judge Business School, and his research team led by Ms. Soniya Gupta (Commonwealth Scholar and PhD student in Marketing at the University of Cambridge), a comprehensive academic study is being conducted to explore various ways of strengthening the micro-entrepreneurial ecosystem.",
          },
        ],
      },
      {
        _type: "block",
        _key: "ra2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "ras2",
            marks: [],
            text: "As part of this initiative, we are offering Research Internship opportunities across multiple domains. Selected interns will contribute meaningfully to ongoing research activities and will report to an assigned project manager or research scholar.",
          },
        ],
      },
    ],
    position: "Research Apprentice",
    languages: "Proficiency in English is essential.",
    location: "Remote (Work from Home)",
    duration: "4 to 6 months (Minimum 4 months\u2019 work is mandatory for Completion Certificate)",
    commitment: "Minimum of 4 hours per week, with a 30-minute weekly meeting update call (Voluntary Position)",
    startDate: "Rolling basis",
    projectDetailsUrl: "https://docs.google.com/document/d/1pHslolysbmXQzkaIgsRYV0REiKY8hQmaYhago3bLM_E/edit?usp=sharing",
    applicationFormUrl: "https://forms.gle/KAJg5sGiFwdYGLVT8",
    submissionTimeline: "Please aim to submit your assignment within 2 weeks of receiving it. If you have other commitments, feel free to submit it at your convenience within this window \u2014 there\u2019s no need to email us about delays. For any queries or clarifications, feel free to reach out. Kindly do not email regarding submission delays.",
    reviewTimeline: "You can expect to hear back from us after 2\u20133 weeks of submitting both your application form and assignment. We receive thousands of applications weekly, so we appreciate your patience and understanding in the meantime.",
    isActive: true,
  });
  console.log("  \u2713 RA Application created");

  // --- Teaching ---
  console.log("Creating teaching entries...");
  const teaching = [
    {
      _id: "teach-1",
      title: "MBA Teaching Assistant \u2014 MBA14: Managing Innovation Strategically",
      role: "ta",
      course: "MBA14: Managing Innovation Strategically",
      professor: "Prof. Jeremy Hutchison-Krupat",
      institution: "University of Cambridge",
      period: "2024\u20132026",
      description: "",
      order: 1,
    },
    {
      _id: "teach-2",
      title: "Executive MBA Course Coordinator \u2014 EMBA10: Marketing Management",
      role: "coordinator",
      course: "EMBA10: Marketing Management",
      professor: "Prof. Eden Yin & Dominique Lauga",
      institution: "University of Cambridge",
      period: "2025\u20132026",
      description: "",
      order: 2,
    },
    {
      _id: "teach-3",
      title: "Global MBA Course Coordinator \u2014 GEMBA10: Marketing Management",
      role: "coordinator",
      course: "GEMBA10: Marketing Management",
      professor: "Prof. Eden Yin & Dominique Lauga",
      institution: "University of Cambridge",
      period: "2025\u20132026",
      description: "",
      order: 3,
    },
    {
      _id: "teach-4",
      title: "MBA Teaching Assistant \u2014 MBA96: Marketing & Innovation in Emerging Economies",
      role: "ta",
      course: "MBA96: Marketing & Innovation in Emerging Economies",
      professor: "Prof. Jaideep Prabhu",
      institution: "University of Cambridge",
      period: "2023\u20132025",
      description: "",
      order: 4,
    },
    {
      _id: "teach-5",
      title: "Undergraduate Supervisor \u2014 3E2: Marketing, Engineering Department",
      role: "supervisor",
      course: "3E2: Marketing, Engineering Department (Undergraduate Honours)",
      professor: "",
      institution: "University of Cambridge",
      period: "2025\u20132026",
      description: "",
      order: 5,
    },
    {
      _id: "teach-6",
      title: "Undergraduate Supervisor \u2014 M6: Marketing, Management Studies Tripos",
      role: "supervisor",
      course: "M6: Marketing, Management Studies Tripos (Undergraduate Honours)",
      professor: "",
      institution: "Emmanuel College, University of Cambridge",
      period: "2023\u20132025",
      description: "",
      order: 6,
    },
    {
      _id: "teach-7",
      title: "Supervisor \u2014 BME Shadow Scheme",
      role: "other",
      course: "BME Shadow Scheme",
      professor: "",
      institution: "Emmanuel College, University of Cambridge",
      period: "2023\u20132024",
      description: "",
      order: 7,
    },
    {
      _id: "teach-8",
      title: "MBA Teaching & Research Assistant \u2014 Decoding Customer Engagement",
      role: "ta",
      course: "MBA Decoding Customer Engagement",
      professor: "Prof. Shaphali Gupta",
      institution: "MICA, India",
      period: "2019\u20132021",
      description: "",
      order: 8,
    },
  ];
  for (const t of teaching) {
    await client.createOrReplace({ ...t, _type: "teaching" });
    console.log(`  \u2713 ${t.course}`);
  }

  console.log("\n\u2705 All content seeded successfully!");
  console.log("Go to your Sanity Studio to review and publish the documents.");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
