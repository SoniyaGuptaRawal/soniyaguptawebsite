"use client";

import { urlFor } from "@/sanity/client";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface ConsultingProject {
  _id: string;
  title: string;
  description?: string;
  image?: any;
  status?: string;
  client?: string;
  collaborators?: string;
  startDate?: string;
  endDate?: string;
  url?: string;
}

interface ConsultingProjectsProps {
  projects: ConsultingProject[];
}

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  completed: "bg-slate-100 text-slate-600",
  upcoming: "bg-amber/10 text-amber",
};

export default function ConsultingProjects({ projects }: ConsultingProjectsProps) {
  if (!projects?.length) return null;

  return (
    <section id="consulting" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Consulting Projects"
          subtitle="Applied research and strategic consulting engagements."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project._id} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-indigo-deep/5 hover:border-amber/20 transition-all duration-300 hover:shadow-lg hover:shadow-amber/5 h-full flex flex-col">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col">
                    <CardContent project={project} />
                  </a>
                ) : (
                  <div className="flex-1 flex flex-col">
                    <CardContent project={project} />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardContent({ project }: { project: ConsultingProject }) {
  return (
    <>
      <div className="aspect-[16/9] bg-gradient-to-br from-indigo-deep/5 to-amber/5 relative overflow-hidden">
        {project.image ? (
          <img
            src={urlFor(project.image).width(400).height(225).url()}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full dot-grid flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          {project.status && (
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[project.status] || statusColors.active}`}>
              {project.status}
            </span>
          )}
          {project.startDate && (
            <span className="text-xs text-slate-warm">
              {project.startDate}{project.endDate ? ` — ${project.endDate}` : " — Present"}
            </span>
          )}
        </div>
        <h3 className="font-serif text-lg font-bold text-indigo-deep mb-2 group-hover:text-amber transition-colors">
          {project.title}
        </h3>
        {project.description && (
          <p className="text-slate-warm text-sm leading-relaxed flex-1 line-clamp-3">
            {project.description}
          </p>
        )}
        {project.client && (
          <p className="text-xs text-slate-light mt-4 pt-4 border-t border-indigo-deep/5">
            Client: {project.client}
          </p>
        )}
        {project.collaborators && (
          <p className="text-xs text-slate-light mt-2">
            Collaborators: {project.collaborators}
          </p>
        )}
      </div>
    </>
  );
}
