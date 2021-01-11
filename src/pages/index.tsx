import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/layout/Seo";
import AboutSection from "../components/sections/AboutSection";
import AuthorSection from "../components/sections/AuthorSection";
import SkillsSection from "../components/sections/SkillsSection";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <AuthorSection />
      <AboutSection />
      <SkillsSection />
    </Layout>
  );
};

export default IndexPage;
