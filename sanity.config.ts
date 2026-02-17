"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = "twgqgtz0";
const dataset = "production";
const apiVersion = "2024-01-01";

export default defineConfig({
  name: "soniya-gupta-rawal",
  title: "Soniya Gupta-Rawal Portfolio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
  },
});
