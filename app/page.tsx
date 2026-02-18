import { client, hasConfig } from "@/sanity/client";
import {
  profileQuery,
  researchAreasQuery,
  publicationsQuery,
  projectsQuery,
  talksQuery,
  teamQuery,
  collaboratorsQuery,
  raApplicationQuery,
} from "@/lib/queries";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchAreas from "@/components/ResearchAreas";
import Publications from "@/components/Publications";
import ProjectsPreview from "@/components/ProjectsPreview";
import Talks from "@/components/Talks";
import Collaborators from "@/components/Collaborators";
import RAApplication from "@/components/RAApplication";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const revalidate = 0;

async function getData() {
  if (!hasConfig) {
    return {
      profile: null,
      researchAreas: [],
      publications: [],
      projects: [],
      talks: [],
      team: [],
      collaborators: [],
      raApplication: null,
    };
  }

  const [profile, researchAreas, publications, projects, talks, team, collaborators, raApplication] =
    await Promise.all([
      client.fetch(profileQuery).catch(() => null),
      client.fetch(researchAreasQuery).catch(() => []),
      client.fetch(publicationsQuery).catch(() => []),
      client.fetch(projectsQuery).catch(() => []),
      client.fetch(talksQuery).catch(() => []),
      client.fetch(teamQuery).catch(() => []),
      client.fetch(collaboratorsQuery).catch(() => []),
      client.fetch(raApplicationQuery).catch(() => null),
    ]);

  return { profile, researchAreas, publications, projects, talks, team, collaborators, raApplication };
}

export default async function Home() {
  const { profile, researchAreas, publications, projects, talks, team, collaborators, raApplication } =
    await getData();

  return (
    <main>
      <Navbar />
      <Hero
        name={profile?.name || "Soniya Gupta-Rawal"}
        title={profile?.title || "PhD Candidate, Management Studies (Marketing)"}
        institution={profile?.institution || "Cambridge Judge Business School, University of Cambridge"}
        tagline={
          profile?.tagline ||
          "Finding potential in percentages. Identifying narratives behind numbers for business strategy and marketing insights."
        }
      />
      <About
        bio={profile?.bio}
        photo={profile?.photo}
        cvFile={profile?.cvFile}
        email={profile?.email || "sg2001@jbs.cam.ac.uk"}
        googleScholar={profile?.googleScholar || ""}
        linkedin={profile?.linkedin || ""}
        twitter={profile?.twitter || ""}
        orcid={profile?.orcid || ""}
      />
      <ResearchAreas areas={researchAreas} />
      <Publications publications={publications} />
      <ProjectsPreview projects={projects} />
      <Talks talks={talks} />
      <Collaborators collaborators={collaborators} />
      <RAApplication data={raApplication} />
      <Contact
        email={profile?.email || "sg2001@jbs.cam.ac.uk"}
        institution={profile?.institution || "Cambridge Judge Business School, University of Cambridge"}
        googleScholar={profile?.googleScholar || ""}
        linkedin={profile?.linkedin || ""}
        twitter={profile?.twitter || ""}
      />
      <Footer />
    </main>
  );
}
