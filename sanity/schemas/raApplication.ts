import { defineField, defineType } from "sanity";

export default defineType({
  name: "raApplication",
  title: "RA Application",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      initialValue: "Research Apprenticeship Program",
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "position",
      title: "Position Title",
      type: "string",
      initialValue: "Research Apprentice",
    }),
    defineField({
      name: "languages",
      title: "Languages Required",
      type: "string",
      initialValue: "Proficiency in English is essential.",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Remote (Work from Home)",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      initialValue:
        "4 to 6 months (Minimum 4 months' work is mandatory for Completion Certificate)",
    }),
    defineField({
      name: "commitment",
      title: "Commitment",
      type: "string",
      initialValue:
        "Minimum of 4 hours per week, with a 30-minute weekly meeting update call (Voluntary Position)",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "string",
      initialValue: "Rolling basis",
    }),
    defineField({
      name: "projectDetailsUrl",
      title: "Project Details & Assignments URL",
      type: "url",
    }),
    defineField({
      name: "applicationFormUrl",
      title: "Application Interest Form URL",
      type: "url",
    }),
    defineField({
      name: "submissionTimeline",
      title: "Assignment Submission Timeline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "reviewTimeline",
      title: "Review Timeline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "isActive",
      title: "Show on Website",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "heading" },
  },
});
