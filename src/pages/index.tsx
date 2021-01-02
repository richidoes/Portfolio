import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/layout/Seo";
import AboutSection from "../components/sections/AboutSection";
import AuthorSection from "../components/sections/AuthorSection";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <AuthorSection />
      <AboutSection />
    </Layout>
  );
};

export default IndexPage;
