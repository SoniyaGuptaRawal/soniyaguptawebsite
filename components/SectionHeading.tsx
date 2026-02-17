import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-4 mb-4">
        <div className="section-divider" />
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-deep tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-slate-warm text-lg md:text-xl max-w-2xl ml-[76px]">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
