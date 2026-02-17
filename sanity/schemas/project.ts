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
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
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
