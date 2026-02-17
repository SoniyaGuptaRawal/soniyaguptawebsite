import { defineField, defineType } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Academic Title",
      type: "string",
      description: "e.g., Assistant Professor of Marketing",
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 2,
      description: "Short tagline displayed in the hero section",
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "photo",
      title: "Profile Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "cvFile",
      title: "CV (PDF)",
      type: "file",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "googleScholar",
      title: "Google Scholar URL",
      type: "url",
    }),
    defineField({
      name: "twitter",
      title: "Twitter/X URL",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "orcid",
      title: "ORCID URL",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "title" },
  },
});
