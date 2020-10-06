---
id: version-1.1.0-breadcrumbs
title: Breadcrumb
original_id: breadcrumbs
---

Breadcrumbs `ms-breadcrumb` allow you to view the current page, within the hierarchy, by adding a separator.

## Basic usage

<div class="ms-browser">
    <div class="ms-tab-browser">
        <div class="ms-dot red"></div>
        <div class="ms-dot yellow"></div>
        <div class="ms-dot green"></div>
    </div>
    <div class="ms-content">
        <div class="ms-breadcrumb">
            <ul>
                <li>Home</li>
                <li>Buttons</li>
                <li><a href="#">Colors</a></li>
            </ul>
        </div>
    </div>
</div>

```html
<div class="ms-breadcrumb">
    <ul>
        <li>Home</li>
        <li>Buttons</li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>
```

## Position

The position of links is adjustable with the classes `ms-text-center` and `ms-text-right`. By default, the links are on the left.

<div class="ms-breadcrumb">
    <ul class="ms-text-center">
        <li>Home</li>
        <li>Buttons</li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>

<div class="ms-breadcrumb">
    <ul class="ms-text-right">
        <li>Home</li>
        <li>Buttons</li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>

```html
<div class="ms-breadcrumb">
    <ul class="ms-text-center">
        <li>Home</li>
        <li>Buttons</li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>

<div class="ms-breadcrumb">
    <ul class="ms-text-right">
        <li>Home</li>
        <li>Buttons</li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>
```

## Background

It is also possible to **add a background** with the `ms-background` classe.

<div class="ms-breadcrumb ms-background">
    <ul>
        <li>Home</li>
        <li>Buttons</li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>

```html
<div class="ms-breadcrumb ms-background">
    <ul>
        <li>Home</li>
        <li>Buttons</li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>
```

## Border

If you do not want use a background, but you want to distinguish your breadcrumb, 
it is possible to **add a border** with the `ms-border` classe.

<div class="ms-breadcrumb ms-border">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Buttons</a></li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>

```html
<div class="ms-breadcrumb ms-border">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Buttons</a></li>
        <li><a href="#">Colors</a></li>
    </ul>
</div>
```