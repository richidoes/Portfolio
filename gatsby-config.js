const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.ricardodeleon.net",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `Ricardo De Leon - Frontend Developer`,
    description: `Frontend Developer portfolio, you can see my projects and know more about my skills and knowledge.`,
    siteUrl,
    image: `images/logos/icon-mini.svg`,
    gitHubUsername: `@richidoes`,
    author: `@richidoes`,
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
    DEV_SSR: true,
    FAST_REFRESH: true,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.ricardodeleon.net`,
      },
    },
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
};
