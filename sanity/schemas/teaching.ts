import { defineField, defineType } from "sanity";

export default defineType({
  name: "teaching",
  title: "Teaching",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Course / Role Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Teaching Assistant", value: "ta" },
          { title: "Course Coordinator", value: "coordinator" },
          { title: "Undergraduate Supervisor", value: "supervisor" },
          { title: "Mentor / Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "course",
      title: "Course Name",
      type: "string",
      description: "e.g., MBA14: Managing Innovation Strategically",
    }),
    defineField({
      name: "professor",
      title: "Professor(s)",
      type: "string",
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      initialValue: "University of Cambridge",
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
      description: "e.g., 2024–2026",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
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
    select: { title: "title", subtitle: "period" },
  },
});
