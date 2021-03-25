import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/layout/Seo";

import AuthorSection from "../components/sections/AuthorSection";
import AboutSection from "../components/sections/AboutSection";
import FooterSection from "../components/sections/FooterSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Ricardo De Leon - Frontend Developer" />
      <AuthorSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </Layout>
  );
};

export default IndexPage;
