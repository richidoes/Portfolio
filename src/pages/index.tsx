import React, { Suspense } from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/layout/Seo";

import AuthorSection from "../components/sections/AuthorSection";
const AboutSection = React.lazy(
  () => import("../components/sections/AboutSection")
);
const FooterSection = React.lazy(
  () => import("../components/sections/FooterSection")
);
const ProjectsSection = React.lazy(
  () => import("../components/sections/ProjectsSection")
);
const SkillsSection = React.lazy(
  () => import("../components/sections/SkillsSection")
);

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Ricardo De Leon - Desarrollo de aplicaciones web y moviles" />
      <AuthorSection />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <FooterSection />
      </Suspense>
    </Layout>
  );
};

export default IndexPage;
