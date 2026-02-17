import { defineField, defineType } from "sanity";

export default defineType({
  name: "collaborator",
  title: "Collaborator",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "logo",
      title: "Photo / Logo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "institution", media: "logo" },
  },
});
