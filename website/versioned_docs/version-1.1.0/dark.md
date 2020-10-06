---
id: version-1.1.0-dark
title: Dark Theme
original_id: dark
---

## Dark Theme

minstyle.io integrates the management of the dark mode. **Each HTML element is designed to be displayed in both light and dark mode**.

In order to allow users to control the display mode, the [dark-mode-switcher](https://github.com/Airmime/dark-mode-switcher) package has been developed to fully integrate with minstyle. This package proposes a javascript injecting on the web page a fixed button, allowing to change mode, as it is the case on the whole minstlyle.io website.

>The default mode will be the one set on the user's system. If the display mode is changed, a cookie is placed on the browser to store this information.

>The [dark-mode-switcher](https://github.com/Airmime/dark-mode-switcher) is optional, you can develop your own script modifying the `<html>` tag.

## How it works

First, the script will inject on your web page an HTML structure, allowing to display a fixed button. It will allow the user to change the Dark/Light display mode.

By default, the theme displayed will be the one set on the operating system. Nevertheless, if the user wishes to change the display mode, a cookie will be created in order to keep this choice.

Changing the display mode changes the data-theme attribute of the `<html>` tag like that :

```html
<html lang="en"> <!-- For light mode. same as : <html lang="en" data-theme="light"> -->
<html lang="en" data-theme="dark"> <!-- For dark mode. -->
```

## Installation

To install the dark mode switcher, you have 4 options.

#### Manually

The compiled sources are available for download. You just have to add the `<link>` between your `head` tags.

<form action="https://github.com/Airmime/dark-mode-switcher" style="display: inline-block;">
    <input type="submit" value="Download" class="ms-btn ms-success"/>
</form>

```html
<script type="text/javascript" src="dark.min.js"></script>
```

#### CDN

It is also possible to add the `link` tag, importing sources from a CDN.

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/dark-mode-switcher@0.0.1/dist/dark.min.js"></script>
```

#### NPM

The dark-mode-switcher is also available under [npm](https://www.npmjs.com/package/dark-mode-switcher).

```bash
npm i dark-mode-switcher
```

#### Yarn

The dark-mode-switcher is also available under [yarn](https://yarnpkg.com/package/dark-mode-switcher).

```bash
yarn add dark-mode-switcher
```