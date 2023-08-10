---
id: menu
title: Menu
description: A basic element of a web page, the menu allows you to orient your users within your applications.
keywords: [Menu, HTML, CSS, CSS Framework, minstyle.io]
---

A basic element of a web page, the menu allows you to orient your users within your applications. In order to support all devices, the menu is responsive. Thus, when the screen size becomes less than 768px, a hamburger <i class="fas fa-bars"></i> (if you use fontawesome.com, or your icon) takes place to hide the links.

> For more informations on the icons used, consult the dedicated [page](../contents/icons.md).

## Basic usage

```html live
<div class="ms-menu">
    <div class="ms-menu-logo">
        <img src="https://minstyle.io/img/logo.png" />
    </div>
    <nav class="ms-menu-link">
        <input type="checkbox" id="ms-menu-toggle" />
        <label for="ms-menu-toggle" class="ms-menu-icon"
            ><i class="fa fa-bars"></i
        ></label>
        <ul>
            <li><a href="">Link 1</a></li>
            <li><a href="">Link 2</a></li>
            <li><a href="">Link 3</a></li>
            <li><input type="text" placeholder="search" name="" id="" /></li>
        </ul>
    </nav>
</div>
```
