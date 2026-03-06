import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSection",
  title: "Site Sections (Display Order)",
  type: "document",
  description: "Drag to reorder sections on the homepage and navbar. Create one entry per section.",
  fields: [
    defineField({
      name: "key",
      title: "Section",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "About", value: "about" },
          { title: "Publications", value: "publications" },
          { title: "Research Projects & Team", value: "projects" },
          { title: "News & Insights", value: "news" },
          { title: "Conferences", value: "talks" },
          { title: "Awards & Recognition", value: "awards" },
          { title: "Collaborators", value: "collaborators" },
          { title: "Teaching", value: "teaching" },
          { title: "Apply", value: "apply" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "key", order: "order" },
    prepare({ title, order }) {
      const labels: Record<string, string> = {
        about: "About",
        publications: "Publications",
        projects: "Research Projects & Team",
        news: "News & Insights",
        talks: "Conferences",
        awards: "Awards & Recognition",
        collaborators: "Collaborators",
        teaching: "Teaching",
        apply: "Apply",
      };
      return { title: labels[title] || title, subtitle: `Order: ${order}` };
    },
  },
});
