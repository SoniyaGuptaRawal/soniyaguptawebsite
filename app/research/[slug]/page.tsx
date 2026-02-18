import { client, hasConfig, urlFor } from "@/sanity/client";
import { projectBySlugQuery, projectsQuery } from "@/lib/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!hasConfig) return { title: "Project | Soniya Gupta-Rawal" };
  const project = await client
    .fetch(projectBySlugQuery, { slug })
    .catch(() => null);
  return {
    title: project
      ? `${project.title} | Soniya Gupta-Rawal`
      : "Project | Soniya Gupta-Rawal",
    description: project?.description || "",
  };
}

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  completed: "bg-slate-100 text-slate-600",
  upcoming: "bg-amber/10 text-amber",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!hasConfig) return notFound();

  const project = await client
    .fetch(projectBySlugQuery, { slug })
    .catch(() => null);

  if (!project) return notFound();

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-indigo-deep relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-light" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <a
              href="/research"
              className="inline-flex items-center gap-2 text-white/50 hover:text-amber-light transition-colors text-sm mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects & Team
            </a>
            <div className="flex items-center gap-3 mb-4">
              {project.status && (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    statusColors[project.status] || statusColors.active
                  }`}
                >
                  {project.status}
                </span>
              )}
              {project.startDate && (
                <span className="text-white/40 text-sm">
                  {project.startDate}{project.endDate ? ` \u2014 ${project.endDate}` : " \u2014 Present"}
                </span>
              )}
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
              {project.title}
            </h1>
            {project.collaborators && (
              <p className="text-white/40 text-base">
                Collaborators: {project.collaborators}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Project image */}
          {project.image && (
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden mb-12">
                <img
                  src={urlFor(project.image).width(1200).height(675).url()}
                  alt={project.title}
                  className="w-full"
                />
              </div>
            </ScrollReveal>
          )}

          {/* Short description */}
          {project.description && (
            <ScrollReveal>
              <p className="text-lg md:text-xl text-indigo-deep/70 leading-relaxed mb-10 pb-10 border-b border-indigo-deep/10">
                {project.description}
              </p>
            </ScrollReveal>
          )}

          {/* Full body */}
          {project.body && (
            <ScrollReveal>
              <div className="prose prose-lg max-w-none text-indigo-deep/80 leading-relaxed prose-headings:font-serif prose-headings:text-indigo-deep prose-a:text-amber hover:prose-a:text-amber-light">
                <PortableText value={project.body} />
              </div>
            </ScrollReveal>
          )}

          {/* Project URL */}
          {project.url && (
            <ScrollReveal>
              <div className="mt-12 pt-8 border-t border-indigo-deep/10">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-deep text-white font-medium rounded-full hover:bg-indigo-mid transition-colors text-sm"
                >
                  Visit Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
