/**
* Copyright (c) 2017-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

const users = [
  {
    caption: 'Rémi MARION',
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  /* Infos */
  title: 'minstlye.io',
  tagline: 'Simple and light open source CSS framework, integrating a dark theme.',
  url: 'https://minstyle.io/', // Your website URL
  baseUrl: '/', 
  projectName: 'minstyle.io',
  
  /* Header */
  headerLinks: [
    {page: 'index', label: 'Home'},
    {doc: 'installation', label: 'Docs'},
    {blog: true, label: 'Blog'},
    {href: 'https://github.com/Airmime/minstyle.io', label: 'Contribute'},
    { languages: true },
  ],

  algolia: {
    apiKey: 'e35a97664bc9cd2ef9b3d3a74c4ed80e',
    indexName: 'minstyle',
  },
  
  users,

  gaTrackingId: 'UA-124609315-1',
  
  /* Images */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.ico',
  disableHeaderTitle: true,
  
  /* Colors */
  colors: {
    primaryColor: '#fa4d60',
    secondaryColor: '#f8f8f8',
  },
  
  /* Copyright */
  copyright: `Copyright © ${new Date().getFullYear()} - minstyle.io`,
  
  /* Theme for highlighting code */
  highlight: {
    theme: 'default'
  },
  usePrism: ['html'],
  
  /* Externals JS */
  scripts: ['https://buttons.github.io/buttons.js','https://kit.fontawesome.com/d35975edad.js','https://cdn.jsdelivr.net/npm/dark-mode-switcher@0.0.1/dist/dark.min.js'],
  
  /* Navigation */
  onPageNav: 'separate',
  
  /* Clean URL */
  cleanUrl: true,
  
  /* RS */
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  
  /* Externals CSS */
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/minstyle.io@1.1.0/css/minstyle.io.min.css',
  ]
};

module.exports = siteConfig;
