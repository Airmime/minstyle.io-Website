---
id: browser
title: Browser
description: In order to put in situation your content, minstyle.io allows you to build an HTML browser. You just have to insert your html in the `.ms-content` tag.
keywords: [Browser, HTML, CSS, CSS Framework, minstyle.io]
---

In order to put in situation your content, minstyle.io allows you to build an HTML browser. You just have to insert your html in the `.ms-content` tag.

## Basic usage

```html live
<div class="ms-browser">
    <div class="ms-tab-browser">
        <div class="ms-dots">
            <div class="ms-dot red"></div>
            <div class="ms-dot yellow"></div>
            <div class="ms-dot green"></div>
        </div>
    </div>
    <div class="ms-content">
        My content.
    </div>
</div>
```

## URL bar

It is possible to add a URL bar to the browser with the class `.ms-uri`.

```html live
<div class="ms-browser">
    <div class="ms-tab-browser">
        <div class="ms-dots">
            <div class="ms-dot red"></div>
            <div class="ms-dot yellow"></div>
            <div class="ms-dot green"></div>
        </div>
        <div class="ms-uri">minstyle.io</div>
    </div>
    <div class="ms-content">
        My content.
    </div>
</div>
```