---
id: version-1.1.0-installation
title: Installation
original_id: installation
---

## Get started

minstyle.io is a simple and light open source CSS framework. It integrates a set of pre-designed HTML elements, allowing the rapid and simple development of interfaces for all devices.

minstyle.io also includes support for **dark mode**, initially set on your OS. A script also allows you to manually change from one theme to another in a fraction of a second (try it, by clicking on the icon at the bottom right ;)). The working principle is detailed on the dedicated page.

>minstyle.io is entirely designed in CSS (SCSS), no javascript library is developed or required, except for switch in dark mode.

The architecture of the framework is based on the concatenation of classes. For example, the `ms-btn` classe allows to get the default design of a button, the `ms-success` classe allows to color the button green, and the `ms-rounded` classe allows to round the button angles 

## Installation

To install the CSS framework, you have 4 options.

#### Manually

The compiled sources are available for download. You just have to add the `<link>` in between your `head` tags.

<form action="https://github.com/Airmime/minstyle.io/blob/master/css/minstyle.io.css" style="display: inline-block;">
    <input type="submit" value="Download" class="ms-btn ms-success"/>
</form>

```html
<link rel="stylesheet" type="text/css" href="css/minstyle.io.css">
```

#### CDN

It is also possible to add the `link` tag, importing sources from a CDN.

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/minstyle.io@1.1.0/css/minstyle.io.css">
```

#### NPM

minstyle.io is also available under [npm](https://www.npmjs.com/package/minstyle.io).

```bash
npm i minstyle.io
```

#### Yarn

minstyle.io is also available under [yarn](https://yarnpkg.com/en/package/minstyle.io).

```bash
yarn add minstyle.io
```