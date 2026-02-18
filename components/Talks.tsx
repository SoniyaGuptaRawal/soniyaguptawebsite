"use client";

import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface Talk {
  _id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  slidesUrl: string;
  videoUrl: string;
  description: string;
}

interface TalksProps {
  talks: Talk[];
}

const defaultTalks: Talk[] = [
  {
    _id: "t1",
    title: "Match Frictions and Engagement: Two-sided Matching for Digital Business Mentoring in Indonesia",
    event: "ISMS Marketing Science Conference, Nova School of Business and Economics",
    date: "2026-06-15",
    location: "Portugal",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
  {
    _id: "t2",
    title: "Match Frictions and Engagement: Two-sided Matching for Digital Business Mentoring in Indonesia",
    event: "EMAC Main Conference & Global Doctoral Colloquium, University of Bath",
    date: "2026-05-20",
    location: "UK",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
  {
    _id: "t3",
    title: "Match Frictions and Engagement: Two-sided Matching for Digital Business Mentoring in Indonesia",
    event: "AMA Global Conference",
    date: "2026-05-10",
    location: "Nice, France",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
  {
    _id: "t4",
    title: "Shattering the Invisible Chains: Social Constraints and Supplier Dependency of Women Entrepreneurs in Egypt",
    event: "AMA Winter Conference",
    date: "2026-02-15",
    location: "Madrid, Spain",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
  {
    _id: "t5",
    title: "Signals from Space, Decisions on Farms: Digital Leapfrogging for Agricultural Productivity, Climate Resilience & Sustainability",
    event: "Ivey-PhD Sustainability Academy (Best Paper Award)",
    date: "2025-11-15",
    location: "",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
  {
    _id: "t6",
    title: "Signals from Space, Decisions on Farms: Digital Leapfrogging for Agricultural Productivity",
    event: "4th UK Workshop on Digital Economics, Centre for Competition Policy (CCP), Imperial London",
    date: "2025-11-10",
    location: "London, UK",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
  {
    _id: "t7",
    title: "Match Frictions and Engagement: Two-sided Matching for Digital Business Mentoring in Indonesia",
    event: "SEI Research Day, Bayes Business School",
    date: "2025-11-01",
    location: "London, UK",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
  {
    _id: "t8",
    title: "Match Frictions and Engagement",
    event: "Cambridge Zero Research Symposia",
    date: "2024-11-15",
    location: "Cambridge, UK",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
  {
    _id: "t9",
    title: "Capital-centric Opportunities for Skill Training of Microentrepreneurs in Emerging Markets",
    event: "Commonwealth Scholarship Commission Conference 2023",
    date: "2023-06-15",
    location: "Cambridge, UK",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
  {
    _id: "t10",
    title: "The Future is Remote \u2014 Social Impact of Telemedicine Business in Emerging Markets",
    event: "Cambridge Zero Research Symposia",
    date: "2021-11-15",
    location: "Cambridge, UK",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
  {
    _id: "t11",
    title: "Super App: A Design Innovation towards Customer Engagement",
    event: "AMA Winter Academic Conference 2021",
    date: "2021-02-15",
    location: "",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
  {
    _id: "t12",
    title: "Store Promotion using Halo Effect Contamination in Consumer Decision Making",
    event: "International Communication Management Conference, MICA (Consolation Prize, Best Paper Awards)",
    date: "2020-01-15",
    location: "India",
    slidesUrl: "",
    videoUrl: "",
    description: "",
  },
];

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Talks({ talks }: TalksProps) {
  const displayTalks = talks?.length > 0 ? talks : defaultTalks;

  return (
    <section id="talks" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Research Presentations & Seminars"
          subtitle="Conference presentations, invited talks, and seminars."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-indigo-deep/10" />

          <div className="space-y-8">
            {displayTalks.map((talk, i) => (
              <ScrollReveal key={talk._id} delay={i * 0.1}>
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-amber border-2 border-cream" />

                  <div className="bg-white rounded-xl p-6 border border-indigo-deep/5 hover:border-amber/20 transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-amber">
                        {formatDate(talk.date)}
                      </span>
                      {talk.location && (
                        <span className="text-sm text-slate-warm">
                          {talk.location}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-indigo-deep mb-1">
                      {talk.title}
                    </h3>
                    <p className="text-slate-warm text-sm">{talk.event}</p>

                    {talk.description && (
                      <p className="text-sm text-indigo-deep/60 mt-2">{talk.description}</p>
                    )}

                    {(talk.slidesUrl || talk.videoUrl) && (
                      <div className="flex gap-3 mt-3">
                        {talk.slidesUrl && (
                          <a
                            href={talk.slidesUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-amber hover:text-amber-light transition-colors"
                          >
                            View Slides
                          </a>
                        )}
                        {talk.videoUrl && (
                          <a
                            href={talk.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-amber hover:text-amber-light transition-colors"
                          >
                            Watch Video
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
