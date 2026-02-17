import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member / Research Assistant",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: "e.g., Research Assistant, PhD Student",
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
      description: "e.g., 2023–Present, 2021–2022",
    }),
    defineField({
      name: "bio",
      title: "Short Bio",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "currentAffiliation",
      title: "Current Affiliation",
      type: "string",
      description: "Where they are now (if alumni)",
    }),
    defineField({
      name: "isCurrent",
      title: "Currently Active",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
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
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
