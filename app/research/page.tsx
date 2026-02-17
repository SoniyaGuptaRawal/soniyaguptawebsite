import { client, hasConfig } from "@/sanity/client";
import { projectsQuery, teamQuery } from "@/lib/queries";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const revalidate = 0;

export const metadata = {
  title: "Research Projects & Team | Soniya Gupta-Rawal",
  description:
    "Explore research projects and meet the team behind Soniya Gupta-Rawal's quantitative marketing research.",
};

async function getData() {
  if (!hasConfig) {
    return { projects: [], team: [] };
  }

  const [projects, team] = await Promise.all([
    client.fetch(projectsQuery).catch(() => []),
    client.fetch(teamQuery).catch(() => []),
  ]);

  return { projects, team };
}

export default async function ResearchPage() {
  const { projects, team } = await getData();

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
              Research
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Projects & Team
            </h1>
            <p className="text-white/50 text-lg max-w-2xl">
              A comprehensive view of ongoing and completed research initiatives, and the
              talented individuals who make this work possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects section */}
      <Projects projects={projects} />

      {/* Team section */}
      <Team members={team} />

      <Footer />
    </main>
  );
}
