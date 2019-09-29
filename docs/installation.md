---
id: installation
title: Installation
---

minstyle.io is a simple and light open source CSS framework. It integrates a set of pre-designed HTML elements, allowing the rapid and simple development of interfaces for all devices.

>minstyle.io is entirely designed in CSS (SCSS), no javascript library is developed or required.

The architecture of the framework is based on the concatenation of classes. For example, the `ms-btn` classe allows to get the default design of a button, the `ms-success` classe allows to color the button green, and the `ms-rounded` classe allows to round the button angles 

## Installation

To install the CSS framework, you have 4 options.

#### Manually

The compiled sources are available for download. You just have to add the `<link>` in between your `head` tags.

<form action="https://github.com/Airmime/minstyle.io/blob/master/css/minstyle.io.css" style="display: inline-block;">
    <input type="submit" value="Download" class="ms-btn ms-success"/>
</form>

#### CDN

It is also possible to add the `link` tag, importing sources from a CDN.

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/minstyle.io@1.0.0/css/minstyle.io.css">
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