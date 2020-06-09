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
  tagline: 'Simple and light open source CSS framework',
  url: 'https://minstyle.io/', // Your website URL
  baseUrl: '/', 
  projectName: 'minstyle.io',
  
  /* Header */
  headerLinks: [
    {page: 'index', label: 'Home'},
    {doc: 'installation', label: 'Docs'},
    {href: 'https://github.com/Airmime/minstyle.io', label: 'Contribute'},
    { languages: true },
  ],
  
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
  scripts: ['https://buttons.github.io/buttons.js','https://kit.fontawesome.com/d35975edad.js'],
  
  /* Navigation */
  onPageNav: 'separate',
  
  /* Clean URL */
  cleanUrl: true,
  
  /* RS */
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  
  /* Externals CSS */
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/minstyle.io@1.0.2/css/minstyle.io.css',
  ]
};

module.exports = siteConfig;
