"use client";

import { urlFor } from "@/sanity/client";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface Collaborator {
  _id: string;
  name: string;
  institution: string;
  url: string;
  logo: any;
}

interface CollaboratorsProps {
  collaborators: Collaborator[];
}

const defaultCollaborators: Collaborator[] = [
  { _id: "c1", name: "Prof. Jaideep Prabhu", institution: "Cambridge Judge Business School", url: "", logo: null },
  { _id: "c2", name: "Prof. Ahmed Khwaja", institution: "Yale School of Management", url: "", logo: null },
  { _id: "c3", name: "Prof. Luisa Corrado", institution: "University of Cambridge / University of Rome", url: "", logo: null },
  { _id: "c4", name: "Paul Kattuman", institution: "Cambridge Judge Business School", url: "", logo: null },
  { _id: "c5", name: "Magda Hassan", institution: "Cambridge Judge Business School", url: "", logo: null },
  { _id: "c6", name: "Jarrod Vassello", institution: "Cambridge Judge Business School", url: "", logo: null },
  { _id: "c7", name: "Prof. Shaphali Gupta", institution: "MICA, India", url: "", logo: null },
  { _id: "c8", name: "Micromentor (Capital For Good)", institution: "Mentoring Platform Partner", url: "", logo: null },
  { _id: "c9", name: "Banas Dairy / Amul Cooperative", institution: "Industry Partner, India", url: "", logo: null },
  { _id: "c10", name: "Farmonaut", institution: "AgriTech Partner", url: "", logo: null },
];

export default function Collaborators({ collaborators }: CollaboratorsProps) {
  const displayCollabs = collaborators?.length > 0 ? collaborators : defaultCollaborators;

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Collaborators"
          subtitle="Research partners and collaborating scholars."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCollabs.map((collab, i) => (
            <ScrollReveal key={collab._id} delay={i * 0.08}>
              <a
                href={collab.url || "#"}
                target={collab.url ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-indigo-deep/5 hover:border-amber/20 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-deep/5 to-amber/5 flex items-center justify-center shrink-0 overflow-hidden">
                  {collab.logo ? (
                    <img
                      src={urlFor(collab.logo).width(56).height(56).url()}
                      alt={collab.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-serif text-lg font-bold text-indigo-deep/30">
                      {collab.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-indigo-deep group-hover:text-amber transition-colors">
                    {collab.name}
                  </h4>
                  <p className="text-sm text-slate-warm">{collab.institution}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
