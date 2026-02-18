import { client, hasConfig } from "@/sanity/client";
import { teachingQuery } from "@/lib/queries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export const revalidate = 0;

export const metadata = {
  title: "Teaching | Soniya Gupta-Rawal",
  description:
    "Teaching experience and course coordination by Soniya Gupta-Rawal at the University of Cambridge.",
};

interface TeachingEntry {
  _id: string;
  title: string;
  role: string;
  course: string;
  professor: string;
  institution: string;
  period: string;
  description: string;
}

const roleLabels: Record<string, string> = {
  ta: "Teaching Assistant",
  coordinator: "Course Coordinator",
  supervisor: "Undergraduate Supervisor",
  other: "Mentor / Other",
};

const roleColors: Record<string, string> = {
  ta: "bg-indigo-deep/10 text-indigo-deep",
  coordinator: "bg-amber/10 text-amber",
  supervisor: "bg-green-100 text-green-700",
  other: "bg-slate-100 text-slate-600",
};

const defaultTeaching: TeachingEntry[] = [
  {
    _id: "t1",
    title: "MBA Teaching Assistant — MBA14: Managing Innovation Strategically",
    role: "ta",
    course: "MBA14: Managing Innovation Strategically",
    professor: "Prof. Jeremy Hutchison-Krupat",
    institution: "University of Cambridge",
    period: "2024\u20132026",
    description: "",
  },
  {
    _id: "t2",
    title: "Executive MBA Course Coordinator — EMBA10: Marketing Management",
    role: "coordinator",
    course: "EMBA10: Marketing Management",
    professor: "Prof. Eden Yin & Dominique Lauga",
    institution: "University of Cambridge",
    period: "2025\u20132026",
    description: "",
  },
  {
    _id: "t3",
    title: "Global MBA Course Coordinator — GEMBA10: Marketing Management",
    role: "coordinator",
    course: "GEMBA10: Marketing Management",
    professor: "Prof. Eden Yin & Dominique Lauga",
    institution: "University of Cambridge",
    period: "2025\u20132026",
    description: "",
  },
  {
    _id: "t4",
    title: "MBA Teaching Assistant — MBA96: Marketing & Innovation in Emerging Economies",
    role: "ta",
    course: "MBA96: Marketing & Innovation in Emerging Economies",
    professor: "Prof. Jaideep Prabhu",
    institution: "University of Cambridge",
    period: "2023\u20132025",
    description: "",
  },
  {
    _id: "t5",
    title: "Undergraduate Supervisor — 3E2: Marketing, Engineering Department",
    role: "supervisor",
    course: "3E2: Marketing, Engineering Department (Undergraduate Honours)",
    professor: "",
    institution: "University of Cambridge",
    period: "2025\u20132026",
    description: "",
  },
  {
    _id: "t6",
    title: "Undergraduate Supervisor — M6: Marketing, Management Studies Tripos",
    role: "supervisor",
    course: "M6: Marketing, Management Studies Tripos (Undergraduate Honours)",
    professor: "",
    institution: "Emmanuel College, University of Cambridge",
    period: "2023\u20132025",
    description: "",
  },
  {
    _id: "t7",
    title: "Supervisor — BME Shadow Scheme",
    role: "other",
    course: "BME Shadow Scheme",
    professor: "",
    institution: "Emmanuel College, University of Cambridge",
    period: "2023\u20132024",
    description: "",
  },
  {
    _id: "t8",
    title: "MBA Teaching & Research Assistant — Decoding Customer Engagement",
    role: "ta",
    course: "MBA Decoding Customer Engagement",
    professor: "Prof. Shaphali Gupta",
    institution: "MICA, India",
    period: "2019\u20132021",
    description: "",
  },
];

async function getData() {
  if (!hasConfig) return [];
  return client.fetch(teachingQuery).catch(() => []);
}

export default async function TeachingPage() {
  const teaching = await getData();
  const entries: TeachingEntry[] =
    teaching?.length > 0 ? teaching : defaultTeaching;

  return (
    <main>
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-indigo-deep relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-light" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-amber-light font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
              University of Cambridge
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Teaching
            </h1>
            <p className="text-white/50 text-lg max-w-2xl">
              Teaching assistantships, course coordination, and undergraduate supervision
              at the University of Cambridge and beyond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Teaching entries */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4">
            {entries.map((entry, i) => (
              <ScrollReveal key={entry._id} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-6 md:p-8 border border-indigo-deep/5 hover:border-amber/20 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        roleColors[entry.role] || roleColors.other
                      }`}
                    >
                      {roleLabels[entry.role] || entry.role}
                    </span>
                    <span className="text-sm text-amber font-medium">
                      {entry.period}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-indigo-deep mb-1">
                    {entry.course || entry.title}
                  </h3>
                  {entry.professor && (
                    <p className="text-sm text-slate-warm">{entry.professor}</p>
                  )}
                  <p className="text-sm text-slate-light">{entry.institution}</p>
                  {entry.description && (
                    <p className="text-sm text-indigo-deep/60 mt-3 leading-relaxed">
                      {entry.description}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
