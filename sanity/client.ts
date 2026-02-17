import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "./env";

const hasConfig = !!projectId && projectId !== "your_project_id_here";

export const client = createClient({
  projectId: hasConfig ? projectId : "placeholder",
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = createImageUrlBuilder({ projectId: hasConfig ? projectId : "placeholder", dataset });

export function urlFor(source: any) {
  return builder.image(source);
}

export { hasConfig };
