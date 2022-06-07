// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenMARI 开源指标体系和效能提升指南',
  tagline: '实践数据驱动研发效能的先进方法论',
  url: 'https://www.openmari.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'merico-dev', // Usually your GitHub org/user name.
  projectName: 'OpenMARI', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/merico-dev/OpenMARI/tree/main/',
          editLocalizedFiles: true,
        },
        blog: {
          path: 'review',
          routeBasePath: 'review',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/merico-dev/OpenMARI/tree/main/',
          editLocalizedFiles: true,
          blogTitle: '研发效能评论',
          postsPerPage: 'ALL',
          blogSidebarTitle: '文章列表',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OpenMARI',
        logo: {
          alt: 'Website Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            label: '指南',
            position: 'left',
          },
          {to: 'review', label: '研发效能评论', position: 'left',
            items: [
              {to: 'review/tags', label: '标签'},
              {to: 'review/archive', label: '归档'}
            ],
          },
          {
            href: 'https://github.com/merico-dev/OpenMARI',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '指南',
            items: [
              {
                label: '简介',
                to: '/docs/intro',
              },
              {
                label: '指标体系',
                to: '/docs/metrics-sys',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/openmari/shared_invite/zt-18sdm37mq-WBYUhXWAGST6rZ~9jqj_Lg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mericodev',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '研发效能评论',
                to: '/review',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/merico-dev/OpenMARI',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Merico, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
