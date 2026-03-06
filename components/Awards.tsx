"use client";

import { urlFor } from "@/sanity/client";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface Award {
  _id: string;
  title: string;
  summary?: string;
  thumbnail?: any;
  date?: string;
  organization?: string;
  url?: string;
}

interface AwardsProps {
  awards: Award[];
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Awards({ awards }: AwardsProps) {
  if (!awards?.length) return null;

  return (
    <section id="awards" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Awards & Recognition"
          subtitle="Fellowships, grants, and honours recognising research excellence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <ScrollReveal key={award._id} delay={i * 0.08}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-indigo-deep/5 hover:border-amber/20 transition-all duration-300 hover:shadow-lg hover:shadow-amber/5 flex flex-col h-full">
                {/* Thumbnail */}
                <div className="aspect-[16/9] bg-gradient-to-br from-indigo-deep/5 to-amber/5 relative overflow-hidden">
                  {award.thumbnail ? (
                    <img
                      src={urlFor(award.thumbnail).width(600).height(338).url()}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full dot-grid flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-amber/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {award.organization && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber/10 text-amber">
                        {award.organization}
                      </span>
                    )}
                    {award.date && (
                      <span className="text-xs text-slate-warm">
                        {formatDate(award.date)}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-indigo-deep mb-2 group-hover:text-amber transition-colors leading-snug">
                    {award.title}
                  </h3>

                  {award.summary && (
                    <p className="text-slate-warm text-sm leading-relaxed flex-1 line-clamp-3">
                      {award.summary}
                    </p>
                  )}

                  {award.url && (
                    <a
                      href={award.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 pt-4 border-t border-indigo-deep/5 inline-flex items-center gap-1.5 text-sm font-medium text-amber hover:text-amber-light transition-colors"
                    >
                      Learn more
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
