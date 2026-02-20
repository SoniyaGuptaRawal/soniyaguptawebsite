import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface ContactProps {
  email: string;
  institution: string;
  googleScholar: string;
  linkedin: string;
  twitter: string;
}

export default function Contact({
  email,
  institution,
  googleScholar,
  linkedin,
  twitter,
}: ContactProps) {
  const displayEmail = email || "soniya@example.edu";

  return (
    <section id="contact" className="py-24 md:py-32 bg-indigo-deep relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-light" />

      {/* Gradient orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-light/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="section-divider mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Interested in collaboration, research opportunities, or academic inquiries?
            I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${displayEmail}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber text-white font-medium rounded-full hover:bg-amber-light transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {displayEmail}
            </a>
            <a
              href="https://topmate.io/soniya_guptarawal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber text-white font-medium rounded-full hover:bg-amber-light transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book on Topmate
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            {googleScholar && (
              <SocialLink href={googleScholar} label="Google Scholar" />
            )}
            {linkedin && <SocialLink href={linkedin} label="LinkedIn" />}
            {twitter && <SocialLink href={twitter} label="Twitter/X" />}
          </div>
        </ScrollReveal>

        {institution && (
          <ScrollReveal delay={0.4}>
            <p className="mt-10 text-white/30 text-sm">{institution}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-2 border border-white/15 text-white/60 rounded-full text-sm hover:border-amber hover:text-amber transition-colors"
    >
      {label}
    </a>
  );
}
