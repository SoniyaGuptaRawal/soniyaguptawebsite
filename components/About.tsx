import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/client";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface AboutProps {
  bio: any[];
  photo: any;
  cvFile: any;
  email: string;
  googleScholar: string;
  linkedin: string;
  twitter: string;
  orcid: string;
}

export default function About({
  bio,
  photo,
  cvFile,
  email,
  googleScholar,
  linkedin,
  twitter,
  orcid,
}: AboutProps) {
  const socialLinks = [
    { label: "Email", href: email ? `mailto:${email}` : null, icon: "M" },
    { label: "Google Scholar", href: googleScholar, icon: "GS" },
    { label: "LinkedIn", href: linkedin, icon: "Li" },
    { label: "Twitter/X", href: twitter, icon: "X" },
    { label: "ORCID", href: orcid, icon: "ID" },
  ].filter((l) => l.href);

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="About" />

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Photo */}
          <ScrollReveal className="md:col-span-2" delay={0.1} direction="left">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-cream-dark">
                {photo ? (
                  <img
                    src={urlFor(photo).width(600).height(800).url()}
                    alt="Soniya Gupta-Rawal"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="/soniya.jpg"
                    alt="Soniya Gupta-Rawal"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {/* Decorative frame accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-amber/30 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Bio content */}
          <ScrollReveal className="md:col-span-3" delay={0.2}>
            <div className="prose prose-lg max-w-none text-indigo-deep/80 leading-relaxed">
              {bio ? (
                <PortableText value={bio} />
              ) : (
                <div className="space-y-4">
                  <p>
                    Soniya Gupta-Rawal is a PhD candidate in Management Studies (Marketing) at
                    Cambridge Judge Business School, University of Cambridge, supervised by
                    Prof. Jaideep Prabhu. She is a Commonwealth Scholar and recipient of the
                    Tony Cowling Memorial Research Award and Judge Business School PhD Fellowship.
                  </p>
                  <p>
                    Her research specializing in Quantitative Marketing tackles critical marketing
                    challenges for entrepreneurs in emerging markets — especially micro-entrepreneurs,
                    female entrepreneurs, the informal sector, and unorganized retail. Using field
                    experiments, AI, and economic analysis, Soniya identifies what works for
                    micro-entrepreneurs in India and Sub-Saharan Africa.
                  </p>
                  <p>
                    Her thesis, <em>Business Innovation with Marketing Strategies for
                    Micro-entrepreneurs in Emerging Markets</em>, draws on econometric methods,
                    causal inference, and machine learning to develop evidence-based marketing
                    strategies for underserved entrepreneurs.
                  </p>
                </div>
              )}
            </div>

            {/* Social links & CV */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-deep/10 text-sm text-indigo-deep/70 hover:border-amber hover:text-amber transition-colors"
                >
                  <span className="font-semibold text-xs">{link.icon}</span>
                  {link.label}
                </a>
              ))}
              <a
                href={cvFile?.asset?.url || "/cv.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-deep text-white text-sm hover:bg-indigo-mid transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
