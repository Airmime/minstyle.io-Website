---
id: breadcrumb
title: Breadcrumb
description: Breadcrumbs ms-breadcrumb allow you to view the current page, within the hierarchy, by adding a separator.
keywords: [Breadcrumbs, HTML, CSS, CSS Framework, minstyle.io]
---

Breadcrumbs `.ms-breadcrumb` allow you to view the current page, within the hierarchy, by adding a separator.

## Basic usage

```html live
<div class="ms-breadcrumb">
    <ul>
        <li>Home</li>
        <li>Buttons</li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>
```

## Background

It is also possible to **add a background** with the `.ms-background` classe.

```html live
<div class="ms-breadcrumb ms-background">
    <ul>
        <li>Home</li>
        <li>Buttons</li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>
```

## Border

If you do not want use a background, but you want to distinguish your breadcrumb, it is possible to **add a border** with the `.ms-border` classe.

```html live
<div class="ms-breadcrumb ms-border">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Buttons</a></li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>
```

## Shadow

Finally, it is also possible to add a shadow with the helper class `.ms-box-shadow`.

```html live
<div class="ms-breadcrumb ms-box-shadow">
    <ul>
        <li>Home</li>
        <li>Buttons</li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>
```