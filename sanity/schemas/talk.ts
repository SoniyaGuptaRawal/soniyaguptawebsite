import { defineField, defineType } from "sanity";

export default defineType({
  name: "talk",
  title: "Talk / Presentation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "event",
      title: "Event / Conference",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "slidesUrl",
      title: "Slides URL",
      type: "url",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
  ],
  orderings: [
    {
      title: "Date (Newest)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "event", date: "date" },
    prepare({ title, subtitle, date }) {
      return {
        title,
        subtitle: `${subtitle || ""} — ${date || ""}`,
      };
    },
  },
});
