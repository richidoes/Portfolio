import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, title, keywords, image, url, author }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const metaAuthor = author || site.siteMetadata.author;
  const metaUrl = url || site.siteMetadata.url;
  const metaImage = image || site.siteMetadata.image;
  const metaKeywords = keywords || [
    "ricardodeleon",
    "Ricardo De Leon",
    "ricardo de leon",
    "desarrollador frontend",
    "desarrollador web",
    "desarrollador aplicaciones moviles",
    "react",
    "react native",
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
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
          name: `github:creator`,
          content: metaAuthor,
        },
        {
          name: `github:title`,
          content: title,
        },
        {
          name: `github:description`,
          content: metaDescription,
        },
        {
          name: `github:image`,
          content: metaImage,
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

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
};

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
