"use client";

import { urlFor } from "@/sanity/client";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface NewsItem {
  _id: string;
  title: string;
  summary?: string;
  thumbnail?: any;
  ogImage?: string | null;
  date?: string;
  tag?: string;
  url?: string;
}

interface NewsInsightsProps {
  items: NewsItem[];
}

const tagLabels: Record<string, string> = {
  press: "Press",
  award: "Award",
  conference: "Conference",
  research: "Research Update",
  media: "Media",
  other: "Other",
};

const tagColors: Record<string, string> = {
  press: "bg-blue-50 text-blue-600",
  award: "bg-amber/10 text-amber",
  conference: "bg-indigo-deep/10 text-indigo-deep",
  research: "bg-green-50 text-green-700",
  media: "bg-purple-50 text-purple-600",
  other: "bg-slate-100 text-slate-600",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function NewsInsights({ items }: NewsInsightsProps) {
  if (!items?.length) return null;

  return (
    <section id="news" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="News & Insights"
          subtitle="Latest updates, press coverage, and research highlights."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item._id} delay={i * 0.08}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-indigo-deep/5 hover:border-amber/20 transition-all duration-300 hover:shadow-lg hover:shadow-amber/5 flex flex-col h-full">
                {/* Thumbnail */}
                <div className="aspect-[16/9] bg-gradient-to-br from-indigo-deep/5 to-amber/5 relative overflow-hidden">
                  {item.thumbnail ? (
                    <img
                      src={urlFor(item.thumbnail).width(600).height(338).url()}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : item.ogImage ? (
                    <img
                      src={item.ogImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full dot-grid flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-amber/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {item.tag && (
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${tagColors[item.tag] || tagColors.other}`}>
                        {tagLabels[item.tag] || item.tag}
                      </span>
                    )}
                    {item.date && (
                      <span className="text-xs text-slate-warm">
                        {formatDate(item.date)}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-indigo-deep mb-2 group-hover:text-amber transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {item.summary && (
                    <p className="text-slate-warm text-sm leading-relaxed flex-1 line-clamp-3">
                      {item.summary}
                    </p>
                  )}

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 pt-4 border-t border-indigo-deep/5 inline-flex items-center gap-1.5 text-sm font-medium text-amber hover:text-amber-light transition-colors"
                    >
                      Read more
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
