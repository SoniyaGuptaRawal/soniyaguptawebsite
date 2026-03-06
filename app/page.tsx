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
  siteSectionsQuery,
} from "@/lib/queries";

import Navbar from "@/components/Navbar";

import About from "@/components/About";
import Publications from "@/components/Publications";
import ProjectsPreview from "@/components/ProjectsPreview";
import NewsInsights from "@/components/NewsInsights";
import Talks from "@/components/Talks";
import Awards from "@/components/Awards";
import Collaborators from "@/components/Collaborators";
import RAApplication from "@/components/RAApplication";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const revalidate = 0;

const defaultOrder = ["about", "publications", "projects", "news", "talks", "awards", "collaborators", "apply"];

const navConfig: Record<string, { label: string; href: string }> = {
  about: { label: "About", href: "#about" },
  publications: { label: "Publications", href: "#publications" },
  projects: { label: "Research Projects & Team", href: "/research" },
  news: { label: "News & Insights", href: "#news" },
  talks: { label: "Conferences", href: "#talks" },
  awards: { label: "Awards", href: "#awards" },
  teaching: { label: "Teaching", href: "/teaching" },
  apply: { label: "Apply", href: "#apply" },
};

async function getData() {
  if (!hasConfig) {
    return {
      profile: null,
      publications: [],
      projects: [],
      news: [],
      talks: [],
      team: [],
      awards: [],
      collaborators: [],
      raApplication: null,
      sectionOrder: defaultOrder,
    };
  }

  const [profile, publications, projects, news, talks, team, awards, collaborators, raApplication, rawSections] =
    await Promise.all([
      client.fetch(profileQuery).catch(() => null),
      client.fetch(publicationsQuery).catch(() => []),
      client.fetch(projectsQuery).catch(() => []),
      client.fetch(newsQuery).catch(() => []),
      client.fetch(talksQuery).catch(() => []),
      client.fetch(teamQuery).catch(() => []),
      client.fetch(awardsQuery).catch(() => []),
      client.fetch(collaboratorsQuery).catch(() => []),
      client.fetch(raApplicationQuery).catch(() => null),
      client.fetch(siteSectionsQuery).catch(() => []),
    ]);

  const sectionOrder: string[] = rawSections?.length > 0
    ? rawSections.map((s: { key: string }) => s.key)
    : defaultOrder;

  return { profile, publications, projects, news, talks, team, awards, collaborators, raApplication, sectionOrder };
}

export default async function Home() {
  const { profile, publications, projects, news, talks, team, awards, collaborators, raApplication, sectionOrder } =
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

  // Build nav links in section order
  const navLinks = sectionOrder
    .filter((key) => navConfig[key])
    .map((key) => navConfig[key]);

  // Section components keyed by section key
  const sectionComponents: Record<string, React.ReactNode> = {
    about: (
      <About
        key="about"
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
    ),
    publications: <Publications key="publications" publications={publications} />,
    projects: <ProjectsPreview key="projects" projects={projects} />,
    news: <NewsInsights key="news" items={newsWithImages} />,
    talks: <Talks key="talks" talks={talks} />,
    awards: <Awards key="awards" awards={awards} />,
    collaborators: <Collaborators key="collaborators" collaborators={collaborators} />,
    apply: <RAApplication key="apply" data={raApplication} />,
  };

  // Ensure any missing keys still render
  const orderedKeys = [...sectionOrder];
  for (const key of defaultOrder) {
    if (!orderedKeys.includes(key)) orderedKeys.push(key);
  }

  return (
    <main>
      <Navbar navLinks={navLinks} />
      {orderedKeys.map((key) => sectionComponents[key] || null)}
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
