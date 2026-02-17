"use client";

import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface ResearchArea {
  _id: string;
  title: string;
  description: string;
  icon: string;
}

interface ResearchAreasProps {
  areas: ResearchArea[];
}

const defaultAreas: ResearchArea[] = [
  {
    _id: "1",
    title: "Marketing Strategy & Innovation",
    description:
      "Developing evidence-based marketing strategies for entrepreneurs in emerging markets, with focus on micro-entrepreneurs and the informal sector in India and Sub-Saharan Africa.",
    icon: "📊",
  },
  {
    _id: "2",
    title: "Entrepreneurship in Emerging Markets",
    description:
      "Studying micro-entrepreneurship, female entrepreneurship, and unorganized retail — understanding what drives business growth for underserved entrepreneurs.",
    icon: "🌍",
  },
  {
    _id: "3",
    title: "Econometric Modelling & Causal Inference",
    description:
      "Applying field experiments, regression kink design, and quasi-experimental methods to measure causal impacts of marketing interventions.",
    icon: "🔬",
  },
  {
    _id: "4",
    title: "Social Impact & Sustainability",
    description:
      "Evaluating frugal innovation, digital leapfrogging for agricultural productivity, climate resilience, and sustainable business practices in developing nations.",
    icon: "🌱",
  },
];

export default function ResearchAreas({ areas }: ResearchAreasProps) {
  const displayAreas = areas?.length > 0 ? areas : defaultAreas;

  return (
    <section id="research" className="py-24 md:py-32 bg-cream-dark/50 relative">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Research Areas"
          subtitle="Exploring critical marketing challenges at the intersection of data, strategy, and social impact."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayAreas.map((area, i) => (
            <ScrollReveal key={area._id} delay={i * 0.1}>
              <div className="group relative bg-white rounded-2xl p-8 h-full border border-indigo-deep/5 hover:border-amber/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber/5">
                <div className="text-4xl mb-5">{area.icon || "📌"}</div>
                <h3 className="font-serif text-xl font-bold text-indigo-deep mb-3 group-hover:text-amber transition-colors">
                  {area.title}
                </h3>
                <p className="text-slate-warm text-sm leading-relaxed">
                  {area.description}
                </p>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
