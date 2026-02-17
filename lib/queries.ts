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
  description,
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
