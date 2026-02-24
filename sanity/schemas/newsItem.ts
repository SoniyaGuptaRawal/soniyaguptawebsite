import { defineField, defineType } from "sanity";

export default defineType({
  name: "newsItem",
  title: "News & Insights",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      description: "Short description shown in the card",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "MMMM D, YYYY" },
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      options: {
        list: [
          { title: "Press", value: "press" },
          { title: "Award", value: "award" },
          { title: "Conference", value: "conference" },
          { title: "Research Update", value: "research" },
          { title: "Media", value: "media" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "url",
      title: "Link URL",
      type: "url",
      description: "Optional link to the full article or source",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Date (Newest First)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "date", media: "thumbnail" },
  },
});
