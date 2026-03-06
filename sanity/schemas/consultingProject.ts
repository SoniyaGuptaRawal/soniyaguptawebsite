import { defineField, defineType } from "sanity";

export default defineType({
  name: "consultingProject",
  title: "Consulting Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 4,
      description: "Brief summary shown on the project card",
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Completed", value: "completed" },
          { title: "Upcoming", value: "upcoming" },
        ],
      },
    }),
    defineField({
      name: "client",
      title: "Client / Organization",
      type: "string",
      description: "The client or organization for this consulting project",
    }),
    defineField({
      name: "collaborators",
      title: "Collaborators",
      type: "string",
      description: "Key collaborators on this project",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
    defineField({
      name: "url",
      title: "Project URL",
      type: "url",
      description: "Optional link to more details",
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
    {
      title: "Date (Newest First)",
      name: "dateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "client", media: "image" },
  },
});
