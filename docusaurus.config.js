// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
require('dotenv').config(); //TODO: move to elsewhere, does not belong in config
const paths = require('./docusaurus.paths.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KERIDoc',
  tagline:
    'KERI Suite Documentation',

  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: paths.url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: paths.baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WebOfTrust', // Usually your GitHub org/user name.
  projectName: 'keridoc', // Usually your repo name.

  onBrokenLinks: 'warn',//'ignore' | 'log' | 'warn' | 'throw'
  onBrokenMarkdownLinks: 'warn',//'ignore' | 'log' | 'warn' | 'throw'

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/WebOfTrust/keridoc/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  // puts scripts in the head of the page
  scripts: [
    /**
     * BEGIN CHATBASE
     */
    // {
    //   //TODO: find out how to set path properly
    //   src: 'https://weboftrust.github.io/keridoc/js/chatbaseConfig.js'
    // },
    // {
    //   src: 'https://www.chatbase.co/embed.min.js',
    //   id: "gEyyxwGeZbnMxnrWTzhkV",
    //   defer: true
    // },
    /**
     * END CHATBASE
     */

    // add Popper.js via CDN
    {
      src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js',
    }
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'KERIDoc Logo',
          src: 'img/logo-keri-symbol.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro/intro',
            position: 'left',
            label: 'Enter documentation',
          },
          {
            type: 'doc',
            docId: 'how-we-did/keridoc/cheat-sheet-writing-page',
            position: 'left',
            label: 'For contributors to this website',
          },
          {
            href: '/feedback',
            label: 'Feedback',
            position: 'left',
          },
          {
            to: 'https://weboftrust.github.io/keridoc/slack/html/',
            label: 'Slack history',
            target: '_self',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'intro/intro',
            position: 'right',
            label: 'KERIDoc',
          },
          {
            href: 'https://weboftrust.github.io/WOT-terms/',
            label: 'KERIGlos',
            position: 'right',
          },
          {
            href: 'https://weboftrust.github.io/kerisse/',
            label: 'KERISSE',
            position: 'right',
          },
          {
            href: 'https://github.com/weboftrust/keridoc',
            label: 'GitHub repo',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'General',
            items: [
              {
                label: 'Enter Documentation',
                to: '/docs/intro/intro',
              }
            ],
          },
          {
            title: 'KERI Suite',
            items: [
              {
                label: 'KERIDoc',
                to: '/docs/intro/intro',
              },
              {
                label: 'KERIGlos',
                href: 'https://weboftrust.github.io/WOT-terms/',
              },
              {
                label: 'KERISSE',
                href: 'https://weboftrust.github.io/kerisse/',
              },
            ],
          },
          {
            title: 'Important resources',
            items: [
              {
                label: 'KERI for Muggles',
                href: 'https://docs.google.com/presentation/d/1lpzYcPrIox9V4hERtn4Kcf7uq01OVU9u3PuVm1aYzR0/edit#slide=id.ga411be7e84_0_0',
              },
              {
                label: 'KERI Resources',
                href: 'https://keri.one/keri-resources/',
              },
              {
                label: 'KERI Whitepaper',
                href: 'https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/weboftrust/keridoc',
              },
              {
                label: 'Kerific Browser Extension',
                href: 'https://chromewebstore.google.com/detail/kerific/ckbmkbbmnfbeecfmoiohobcdmopekgmp',
              }
            ]
          }

        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Web Of Trust.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // options here
        hashed: true,
        highlightSearchTermsOnTargetPage: true
      },
    ],
  ],
  clientModules: [
    require.resolve('./clientModules/showLevels'),
    require.resolve('./clientModules/insertVideo'),
    require.resolve('./clientModules/insertSubtitles'),
    require.resolve('./clientModules/dynamicTables'),
    require.resolve('./clientModules/elementGoFullScreen'),
    require.resolve('./clientModules/horizontalScrollHint'),
    require.resolve('./clientModules/showDefinitionsPopUpOnClick'),
    require.resolve('./clientModules/writeChanges'),
    require.resolve('./clientModules/addDataTypes'),
    require.resolve('./clientModules/showGPTsummary'),
    require.resolve('./clientModules/imageFullSize'),
    require.resolve('./clientModules/upvoteSearchResult'),
    require.resolve('./clientModules/findMentalModelMatches'),
    require.resolve('./clientModules/fetchFormsColumnFromWotTerms'),
    require.resolve('./clientModules/addUiToSidebar'),
    require.resolve('./clientModules/createLinkToWikiPage'),
    require.resolve('./clientModules/fetchCommitHash')
  ],
};

export default config;
