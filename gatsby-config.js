module.exports = {
  siteMetadata: {
    title: `Ricardo De Leon`,
    description: `Este es mi sitio web, donde podras ver mi portafolio de proyectos y saber mas sobre mis habilidades y conocimientos.`,
    url: "https://www.ricardodeleon.net",
    image: "images/logos/icon-mini.svg",
    gitHubUsername: `@richidoes`,
    author: "@richidoes",
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
    DEV_SSR: true,
    FAST_REFRESH: true,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
