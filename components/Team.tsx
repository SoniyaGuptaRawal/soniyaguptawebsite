"use client";

import { urlFor } from "@/sanity/client";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface TeamMember {
  _id: string;
  name: string;
  photo: any;
  role: string;
  period: string;
  bio: string;
  currentAffiliation: string;
  isCurrent: boolean;
  linkedinUrl: string;
}

interface TeamProps {
  members: TeamMember[];
}

const defaultMembers: TeamMember[] = [];

export default function Team({ members }: TeamProps) {
  const displayMembers = members?.length > 0 ? members : defaultMembers;
  const current = displayMembers.filter((m) => m.isCurrent);
  const alumni = displayMembers.filter((m) => !m.isCurrent);

  return (
    <section id="team" className="py-24 md:py-32 bg-cream-dark/50 relative">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Research Team"
          subtitle="Current and former research assistants and collaborating students."
        />

        {/* Current members */}
        {current.length > 0 && (
          <div className="mb-16">
            <ScrollReveal>
              <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-amber mb-8">
                Current Team
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {current.map((member, i) => (
                <ScrollReveal key={member._id} delay={i * 0.05}>
                  <MemberCard member={member} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Alumni */}
        {alumni.length > 0 && (
          <div>
            <ScrollReveal>
              <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-slate-warm mb-8">
                Alumni
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {alumni.map((member, i) => (
                <ScrollReveal key={member._id} delay={i * 0.05}>
                  <MemberCard member={member} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-indigo-deep/5 hover:border-amber/20 transition-all duration-300">
      {/* Photo */}
      <div className="aspect-square bg-gradient-to-br from-indigo-deep/5 to-amber/5 relative overflow-hidden">
        {member.photo ? (
          <img
            src={urlFor(member.photo).width(240).height(240).url()}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12 text-indigo-deep/10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        )}
      </div>

      <div className="p-3">
        <h4 className="font-serif text-sm font-bold text-indigo-deep group-hover:text-amber transition-colors leading-tight">
          {member.name}
        </h4>
        <p className="text-xs text-amber font-medium mt-0.5">{member.role}</p>
        <p className="text-[11px] text-slate-light mt-0.5">{member.period}</p>

        {member.currentAffiliation && (
          <p className="text-[11px] text-slate-light mt-1 italic">
            Now: {member.currentAffiliation}
          </p>
        )}

        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-indigo-deep/50 hover:text-amber transition-colors mt-1"
          >
            LinkedIn
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
