import React from "react";
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
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-amber text-white font-medium rounded-full hover:bg-amber-light transition-colors text-base sm:text-lg"
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-amber text-white font-medium rounded-full hover:bg-amber-light transition-colors text-base sm:text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Meeting
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            {googleScholar && (
              <SocialLink href={googleScholar} label="Google Scholar" icon={
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5h3.6v.8C2.5 11 2 12 2 13.2v8.2c0 .4.1.7.3 1H0v1.1h7.3v-1H5.2a1.9 1.9 0 0 1-.3-1v-8.1c0-1.4.7-2.6 1.7-3.4v2.7L12 16.3l5.4-3.6V9.5H24L12 0z"/>
                </svg>
              } />
            )}
            {linkedin && (
              <SocialLink href={linkedin} label="LinkedIn" icon={
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              } />
            )}
            {twitter && (
              <SocialLink href={twitter} label="Twitter / X" icon={
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              } />
            )}
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

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2 border border-white/15 text-white/60 rounded-full text-sm hover:border-amber hover:text-amber transition-colors"
    >
      {icon}
      {label}
    </a>
  );
}
