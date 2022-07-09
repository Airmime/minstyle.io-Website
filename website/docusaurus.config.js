// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "minstyle.io",
  tagline: "Simple and light open source CSS framework, integrating dark mode and Customizer.",
  url: "https://minstyle.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Airmime",
  projectName: "minstyle.io",

  scripts: ["https://kit.fontawesome.com/b4c81a9e33.js","https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleAnalytics: {
          trackingID: 'UA-124609315-1',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          versions: {
            current: {
              label: "2.0.1",
            },
          },
        },
        theme: {
          customCss: [
            require.resolve("./src/css/minstyle.io.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
      },
    ],
  ],

  themes: ["@docusaurus/theme-live-codeblock"],

  themeConfig: {
    metadata: [{name: 'keywords', content: 'CSS Framework, CSS, Framework, minstyle.io, Dark Mode, Dark Theme, Custom, Customizable'}],
    navbar: {
      title: "",
      logo: {
        alt: "minstyle.io Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "left",
        },
        {
          type: "doc",
          docId: "about",
          position: "right",
          label: "Doc",
        },
        {
          href: "https://github.com/Airmime/minstyle.io",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://generator.minstyle.io",
          class: "generator-link",
          label: "Customize minstyle.io",
          position: "right",
        },
      ],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
