import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Research Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 4,
      description: "Brief summary shown on project cards",
    }),
    defineField({
      name: "body",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
      description: "Detailed project description for the project page",
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
      name: "collaborators",
      title: "Collaborators",
      type: "string",
      description: "Key collaborators on this project",
    }),
    defineField({
      name: "dataPartners",
      title: "Data Partners",
      type: "array",
      description: "Organisations or institutions providing data for this project",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "url", title: "URL", type: "url", description: "Optional link (e.g. partner website or LinkedIn)" }),
          ],
          preview: { select: { title: "name", subtitle: "url" } },
        },
      ],
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
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "status" },
  },
});
