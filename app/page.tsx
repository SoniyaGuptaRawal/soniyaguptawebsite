import { client, hasConfig } from "@/sanity/client";
import { fetchOgImage } from "@/lib/fetchOgImage";
import {
  profileQuery,
  publicationsQuery,
  projectsQuery,
  talksQuery,
  teamQuery,
  collaboratorsQuery,
  raApplicationQuery,
  newsQuery,
  awardsQuery,
  consultingProjectsQuery,
} from "@/lib/queries";

import Navbar from "@/components/Navbar";

import About from "@/components/About";
import Publications from "@/components/Publications";
import ProjectsPreview from "@/components/ProjectsPreview";
import ConsultingProjects from "@/components/ConsultingProjects";
import NewsInsights from "@/components/NewsInsights";
import Talks from "@/components/Talks";
import Awards from "@/components/Awards";
import Collaborators from "@/components/Collaborators";
import RAApplication from "@/components/RAApplication";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const revalidate = 0;

async function getData() {
  if (!hasConfig) {
    return {
      profile: null,
      publications: [],
      projects: [],
      consultingProjects: [],
      news: [],
      talks: [],
      team: [],
      awards: [],
      collaborators: [],
      raApplication: null,
    };
  }

  const [profile, publications, projects, consultingProjects, news, talks, team, awards, collaborators, raApplication] =
    await Promise.all([
      client.fetch(profileQuery).catch(() => null),
      client.fetch(publicationsQuery).catch(() => []),
      client.fetch(projectsQuery).catch(() => []),
      client.fetch(consultingProjectsQuery).catch(() => []),
      client.fetch(newsQuery).catch(() => []),
      client.fetch(talksQuery).catch(() => []),
      client.fetch(teamQuery).catch(() => []),
      client.fetch(awardsQuery).catch(() => []),
      client.fetch(collaboratorsQuery).catch(() => []),
      client.fetch(raApplicationQuery).catch(() => null),
    ]);

  return { profile, publications, projects, consultingProjects, news, talks, team, awards, collaborators, raApplication };
}

export default async function Home() {
  const { profile, publications, projects, consultingProjects, news, talks, team, awards, collaborators, raApplication } =
    await getData();

  // Resolve OG images for news items that have a URL but no uploaded thumbnail
  const newsWithImages = news?.length
    ? await Promise.all(
        news.map(async (item: any) => ({
          ...item,
          ogImage: item.thumbnail ? null : item.url ? await fetchOgImage(item.url) : null,
        }))
      )
    : [];

  return (
    <main>
      <Navbar />
      <About
        name={profile?.name || "Soniya Gupta-Rawal"}
        title={profile?.title || "PhD Candidate, Management Studies (Marketing)"}
        institution={profile?.institution || "Cambridge Judge Business School, University of Cambridge"}
        bio={profile?.bio}
        photo={profile?.photo}
        cvFile={profile?.cvFile}
        email={profile?.email || "sg2001@jbs.cam.ac.uk"}
        googleScholar={profile?.googleScholar || ""}
        linkedin={profile?.linkedin || ""}
        twitter={profile?.twitter || ""}
        orcid={profile?.orcid || ""}
      />
      <Publications publications={publications} />
      <ProjectsPreview projects={projects} />
      <ConsultingProjects projects={consultingProjects} />
      <NewsInsights items={newsWithImages} />
      <Talks talks={talks} />
      <Awards awards={awards} />
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
