import { groq } from "next-sanity";

export const profileQuery = groq`*[_type == "profile"][0]{
  name,
  title,
  institution,
  tagline,
  bio,
  photo,
  cvFile,
  email,
  googleScholar,
  twitter,
  linkedin,
  orcid
}`;

export const researchAreasQuery = groq`*[_type == "researchArea"] | order(order asc){
  _id,
  title,
  description,
  icon,
  order
}`;

export const publicationsQuery = groq`*[_type == "publication"] | order(year desc, title asc){
  _id,
  title,
  authors,
  year,
  type,
  journal,
  abstract,
  doi,
  pdfUrl,
  featured
}`;

export const projectsQuery = groq`*[_type == "project"] | order(startDate desc){
  _id,
  title,
  slug,
  description,
  image,
  status,
  collaborators,
  startDate,
  endDate,
  url
}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  body,
  image,
  status,
  collaborators,
  startDate,
  endDate,
  url
}`;

export const talksQuery = groq`*[_type == "talk"] | order(date desc){
  _id,
  title,
  event,
  date,
  location,
  slidesUrl,
  videoUrl,
  description
}`;

export const teamQuery = groq`*[_type == "teamMember"] | order(order asc){
  _id,
  name,
  photo,
  role,
  period,
  bio,
  currentAffiliation,
  isCurrent,
  linkedinUrl,
  order
}`;

export const collaboratorsQuery = groq`*[_type == "collaborator"]{
  _id,
  name,
  institution,
  url,
  logo
}`;

export const raApplicationQuery = groq`*[_type == "raApplication" && isActive == true][0]{
  _id,
  heading,
  introduction,
  position,
  languages,
  location,
  duration,
  commitment,
  startDate,
  projectDetailsUrl,
  applicationFormUrl,
  submissionTimeline,
  reviewTimeline,
  isActive
}`;

export const teachingQuery = groq`*[_type == "teaching"] | order(order asc){
  _id,
  title,
  role,
  course,
  professor,
  institution,
  period,
  description,
  order
}`;
