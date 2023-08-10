---
title : Installation
id : installation
description: Get started with minstyle.io.
keywords: [Installation, Get started, doc, documentation, HTML, CSS, CSS Framework, minstyle.io]
---

# Installation

The sources code are available for download in the [GitHub repository](https://github.com/Airmime/minstyle.io). To integrate it in your project, you just need to add the following tag between your `<head>` tags, after downloading the `.css` file.

```html
<link rel="stylesheet" href="css/minstyle.io.min.css">
```

> The `/dist/css/minstyle.io.min.css` file is a compressed version of the framework, it will be faster to load.


The `/dist/css` folder contains all compiled CSS files. If you want to modify the framework sources, the `/css/scss` folder contains all the SASS files. The `/css/scss/minstyle.io.scss` file contains the variables (colors, shape, etc...) used on the whole framework.

## jsdelivr

For greater simplicity, you could add the `link` tag, importing sources from a CDN.

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/minstyle.io@2.0.1/dist/css/minstyle.io.min.css">
```

## npm

minstyle.io is also available under [npm](https://www.npmjs.com/package/minstyle.io).

```bash
npm i minstyle.io
```

## Yarn

minstyle.io is also available under [yarn](https://yarnpkg.com/en/package/minstyle.io).

```bash
yarn add minstyle.io
```

## Dark mode

minstyle.io integrates the management of the dark mode. Read how to install [dark-mode-switcher](https://github.com/Airmime/dark-mode-switcher) on this [page](../Layout/dark.md).