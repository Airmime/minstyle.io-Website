---
id: dropdown
title: Dropdown
description: The dropdown allows you to merge a button with an icon (down arrow), and a list of links.
keywords: [Dropdown, HTML, CSS, CSS Framework, minstyle.io]
---

The dropdown allows you to merge a button with an icon (down arrow), and a list of links.

> For more informations on the icons used, consult the dedicated [page](../contents/icons.md).

> Take a look at the [button](../elements/button.md) page to get all the necessary information.

## Basic usage

The dropdown is largely based on the `.ms-btn` classe, so it is possible to use the styles applied to this class, this can be used to change the button colors.

```html live
<div>
    <div class="ms-dropdown">
        <button class="ms-btn ms-primary">
            Versions <i class="fas fa-sort-down"></i>
        </button>
        <div class="ms-dropdown-content">
            <ul class="ms-dropdown-content-list">
                <li><a href="">V0.X</a></li>
                <li><a href="">V1.X</a></li>
            </ul>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
```

```html live
<div>
    <div class="ms-dropdown">
        <button class="ms-btn ms-secondary ms-rounded">
            Versions <i class="fas fa-sort-down"></i>
        </button>
        <div class="ms-dropdown-content">
            <ul class="ms-dropdown-content-list">
                <li><a href="">V0.X</a></li>
                <li><a href="">V1.X</a></li>
            </ul>
        </div>
    </div>
    <div class="ms-dropdown">
        <button class="ms-btn ms-action ms-underline">
            Versions <i class="fas fa-sort-down"></i>
        </button>
        <div class="ms-dropdown-content">
            <ul class="ms-dropdown-content-list">
                <li><a href="">V0.X</a></li>
                <li><a href="">V1.X</a></li>
            </ul>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
```

## Sizes

It is also possible to change the dropdown size.

```html live
<div>
    <div class="ms-dropdown">
        <button class="ms-btn ms-action2 ms-outline ms-small">
            Versions <i class="fas fa-sort-down"></i>
        </button>
        <div class="ms-dropdown-content">
            <ul class="ms-dropdown-content-list">
                <li><a href="">V0.X</a></li>
                <li><a href="">V1.X</a></li>
            </ul>
        </div>
    </div>

    <div class="ms-dropdown">
        <button class="ms-btn ms-action2 ms-outline ms-medium">
            Versions <i class="fas fa-sort-down"></i>
        </button>
        <div class="ms-dropdown-content">
            <ul class="ms-dropdown-content-list">
                <li><a href="">V0.X</a></li>
                <li><a href="">V1.X</a></li>
            </ul>
        </div>
    </div>

    <div class="ms-dropdown">
        <button class="ms-btn ms-primary ms-outline ms-large">
            Versions <i class="fas fa-sort-down"></i>
        </button>
        <div class="ms-dropdown-content">
            <ul class="ms-dropdown-content-list">
                <li><a href="">V0.X</a></li>
                <li><a href="">V1.X</a></li>
            </ul>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
```
