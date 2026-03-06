import { client, hasConfig, urlFor } from "@/sanity/client";
import { projectBySlugQuery, projectsQuery } from "@/lib/queries";
import { fetchOgImage } from "@/lib/fetchOgImage";
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

  // Resolve OG images for articles that have no uploaded thumbnail
  type Article = { title: string; excerpt?: string; url: string; thumbnail?: any };
  const articlesWithImages: (Article & { ogImage: string | null })[] = project.articles?.length
    ? await Promise.all(
        project.articles.map(async (article: Article) => ({
          ...article,
          ogImage: article.thumbnail ? null : await fetchOgImage(article.url),
        }))
      )
    : [];

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
              Back to Research Projects & Team
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
            {project.dataPartners?.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-white/40 text-base">Data Partners:</span>
                {project.dataPartners.map((partner: { name: string; url?: string }, i: number) =>
                  partner.url ? (
                    <a
                      key={i}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-light hover:text-amber transition-colors text-base underline underline-offset-2"
                    >
                      {partner.name}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span key={i} className="text-white/40 text-base">{partner.name}</span>
                  )
                )}
              </div>
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

          {/* Awards & Grants */}
          {project.awardsAndGrants?.length > 0 && (
            <ScrollReveal>
              <div className="mt-16 pt-12 border-t border-indigo-deep/10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-indigo-deep mb-8">
                  Awards & Grants
                </h2>
                <div className="space-y-4">
                  {project.awardsAndGrants.map((item: { title: string; organization?: string; year?: string; url?: string }, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 bg-cream rounded-xl border border-indigo-deep/5"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif font-bold text-indigo-deep leading-snug">
                          {item.url ? (
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-amber transition-colors">
                              {item.title}
                            </a>
                          ) : (
                            item.title
                          )}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          {item.organization && (
                            <span className="text-sm text-slate-warm">{item.organization}</span>
                          )}
                          {item.year && (
                            <span className="text-sm text-amber font-medium">{item.year}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Articles */}
          {articlesWithImages.length > 0 && (
            <ScrollReveal>
              <div className="mt-16 pt-12 border-t border-indigo-deep/10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-indigo-deep mb-8">
                  Articles
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {articlesWithImages.map((article, i) => {
                    const thumb = article.thumbnail
                      ? urlFor(article.thumbnail).width(600).height(340).url()
                      : article.ogImage;
                    return (
                      <a
                        key={i}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-cream rounded-xl overflow-hidden border border-indigo-deep/5 hover:border-amber/30 transition-all duration-300 hover:shadow-md flex flex-col"
                      >
                        {/* Thumbnail */}
                        <div className="aspect-[16/9] bg-gradient-to-br from-indigo-deep/5 to-amber/5 overflow-hidden relative">
                          {thumb ? (
                            <img
                              src={thumb}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full dot-grid flex items-center justify-center">
                              <svg className="w-8 h-8 text-indigo-deep/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Text */}
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="font-serif font-bold text-indigo-deep group-hover:text-amber transition-colors leading-snug mb-2">
                            {article.title}
                          </h3>
                          {article.excerpt && (
                            <p className="text-sm text-slate-warm leading-relaxed flex-1 line-clamp-3">
                              {article.excerpt}
                            </p>
                          )}
                          <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-amber">
                            Read article
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
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
