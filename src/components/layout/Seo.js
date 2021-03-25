import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

function SEO({ description, title, keywords, image, url, author }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata?.title;
  const metaAuthor = author || site.siteMetadata.author;
  const metaUrl = url || site.siteMetadata.siteUrl;
  const metaImage = image || site.siteMetadata.image;
  const metaKeywords = keywords || [
    "react developer",
    "react native developer",
    "front-end developer",
    "frontend developer",
    "web developer",
    "desarrollador web",
    "desarrollador frontend",
    "ricardodeleon",
    "Ricardo De Leon",
    "ricardo de leon",
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={metaTitle}
      titleTemplate={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: metaImage,
        },
        {
          name: `og:url`,
          content: metaUrl,
        },
        {
          name: `github:card`,
          content: `summary_large_image`,
        },
        {
          name: `github:site`,
          content: title,
        },
        {
          name: `github:creator`,
          content: metaAuthor,
        },
        {
          name: `github:title`,
          content: title,
        },
      ].concat(
        metaKeywords && metaKeywords.lenth > 0
          ? {
              name: `keywords`,
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    />
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
};

export default SEO;
