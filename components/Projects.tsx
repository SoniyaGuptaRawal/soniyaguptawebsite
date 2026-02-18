"use client";

import { urlFor } from "@/sanity/client";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface Project {
  _id: string;
  title: string;
  slug?: { current: string };
  description: string;
  image: any;
  status: string;
  collaborators: string;
  startDate: string;
  endDate: string;
  url: string;
}

interface ProjectsProps {
  projects: Project[];
}

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  completed: "bg-slate-100 text-slate-600",
  upcoming: "bg-amber/10 text-amber",
};

const defaultProjects: Project[] = [
  {
    _id: "1",
    title: "Mentor Matching: Impact of Customized Mentoring on Entrepreneurs",
    description:
      "In collaboration with Micromentor (Capital For Good), this University of Cambridge-backed project develops a two-sided matching framework to customize business mentoring based on mentee and mentor characteristics. Using econometric modelling and machine learning, we aim to maximize successful matches and drive evidence-based improvements in the Micromentor platform's matching algorithm.",
    image: null,
    status: "active",
    collaborators: "Prof. Jaideep Prabhu, Prof. Ahmed Khwaja",
    startDate: "2022",
    endDate: "",
    url: "",
  },
  {
    _id: "2",
    title: "Banas Dairy: Strengthening Rural Retail through Umang Malls",
    description:
      "Partnering with Banas Dairy — India's largest dairy cooperative and a key contributor to Amul — to research sales performance, consumer behaviour, and marketing strategies for the Umang Mall rural retail model. The initiative covers 35+ stores in rural areas following a circular economy model, offering branded products to rural consumers.",
    image: null,
    status: "active",
    collaborators: "Prof. Jaideep Prabhu",
    startDate: "2025",
    endDate: "",
    url: "",
  },
  {
    _id: "3",
    title: "Shattering the Invisible Chains: Women Entrepreneurs in Egypt",
    description:
      "Investigating how age and gender influence buyer dependency in micro-enterprises in Egypt. Using scenario-based field experiments, this study identifies effective interventions — including negotiation training, alternative supplier information, and networking opportunities — to reduce supplier dependency and improve business performance for women entrepreneurs.",
    image: null,
    status: "active",
    collaborators: "Prof. Jaideep Prabhu, Magda Hassan, Jarrod Vassello",
    startDate: "2024",
    endDate: "",
    url: "",
  },
  {
    _id: "4",
    title: "The Frugal Space Race: ISRO Satellite Project",
    description:
      "Investigating the role of frugal innovation in India's space programme (Chandrayaan, Mangalyaan), emphasizing how constraint-led innovation has made India globally competitive. Gathering comparative data on 17,000+ global satellite launches (US, Russia, China, etc.) to benchmark India's performance on cost-effectiveness and policy implications.",
    image: null,
    status: "active",
    collaborators: "Prof. Jaideep Prabhu, Paul Kattuman, Luisa Corrado",
    startDate: "2022",
    endDate: "",
    url: "",
  },
  {
    _id: "5",
    title: "Farmonaut: AI-Powered Satellite Advisories for Farmers",
    description:
      "Evaluating the causal impact of Farmonaut's AI-powered satellite-based agricultural advisories on farmer productivity. Comparing WhatsApp-based alerts versus the JEEVN AI web portal, using remote sensing data (NDVI, SAVI), Regression Kink Design, and quasi-experimental techniques across 900+ farms.",
    image: null,
    status: "active",
    collaborators: "Paul Kattuman, Luisa Corrado, Prof. Jaideep Prabhu",
    startDate: "2023",
    endDate: "",
    url: "",
  },
];

export default function Projects({ projects }: ProjectsProps) {
  const displayProjects = projects?.length > 0 ? projects : defaultProjects;

  return (
    <section id="projects" className="py-24 md:py-32 bg-cream-dark/50 relative">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Research Projects"
          subtitle="Active and recent research initiatives across emerging markets."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, i) => (
            <ScrollReveal key={project._id} delay={i * 0.1}>
              <a href={project.slug?.current ? `/research/${project.slug.current}` : "#"} className="group bg-white rounded-2xl overflow-hidden border border-indigo-deep/5 hover:border-amber/20 transition-all duration-300 hover:shadow-lg hover:shadow-amber/5 h-full flex flex-col block">
                {/* Image area */}
                <div className="aspect-[16/9] bg-gradient-to-br from-indigo-deep/5 to-amber/5 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={urlFor(project.image).width(600).height(340).url()}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full dot-grid flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-amber/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        statusColors[project.status] || statusColors.active
                      }`}
                    >
                      {project.status || "Active"}
                    </span>
                    {project.startDate && (
                      <span className="text-xs text-slate-warm">
                        {project.startDate}{project.endDate ? ` — ${project.endDate}` : " — Present"}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-indigo-deep mb-2 group-hover:text-amber transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-warm text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {project.collaborators && (
                    <p className="text-xs text-slate-light mt-4 pt-4 border-t border-indigo-deep/5">
                      Collaborators: {project.collaborators}
                    </p>
                  )}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
