---
id: pagination
title: Pagination
description: The pagination component allows you to display number of pages, and to navigate between them.
keywords: [Pagination, HTML, CSS, CSS Framework, minstyle.io]
---

The pagination component allows you to display number of pages, and to navigate between them.

## Basic usage

The pagination component is accessible via the `.ms-pagination` class. It is composed of a bullet list, containing links.

```html live
<div class="ms-pagination">
    <ul>
        <li><a href="#">Prev</a></li>
        <li><a href="#">11</a></li>
        <li><a href="#">12</a></li>
        <li><a href="#" class="ms-active">13</a></li>
        <li><a href="#">14</a></li>
        <li><a href="#">15</a></li>
        <li><a href="#" class="ms-disabled">Next</a></li>
    </ul>
</div>
```

A link can be disabled with the `.ms-disabled` class.

## Border

It is possible to add a border around the pagination component with the `.ms-border` class.

```html live
<div class="ms-pagination ms-border">
    <ul>
        <li><a href="#">Prev</a></li>
        <li><a href="#">11</a></li>
        <li><a href="#">12</a></li>
        <li><a href="#" class="ms-active">13</a></li>
        <li><a href="#">14</a></li>
        <li><a href="#">15</a></li>
        <li><a href="#" class="ms-disabled">Next</a></li>
    </ul>
</div>
```