---
id: version-1.1.0-menu
title: Menu
original_id: menu
---

A basic element of a web page, the menu allows you to orient your users within your applications. In order to support all devices, the menu is responsive. Thus, when the screen size becomes less than 768px, a hamburger <i class="fas fa-bars"></i> (if you use fontawesome.com, or your icon) takes place to hide the links.

## Basic usage

> For more informations on the icons used, consult the dedicated [page](icons.md).

<div class="ms-browser">
    <div class="ms-tab-browser">
        <div class="ms-dot red"></div>
        <div class="ms-dot yellow"></div>
        <div class="ms-dot green"></div>
    </div>
    <div class="ms-content">
        <div class="ms-menu">
            <div class="ms-menu-logo">
                <p>MinStyle.io</p>
            </div>
            <nav class="ms-menu-link">
                <input type="checkbox" id="ms-menu-toggle">
                <label for="ms-menu-toggle" class="ms-menu-icon"><i class="fa fa-bars"></i></label>
                <ul>
                    <a href=""><li>Home</li></a>
                    <a href="#"><li>Link 1</li></a>
                    <a href="#"><li>Link 2</li></a>
                    <a href="#"><li>Link 3</li></a>
                    <a href="#"><li>Link 4</li></a>
                </ul>
            </nav>
        </div>
    </div>
</div>

```html
<div class="ms-menu">
    <div class="ms-menu-logo">
        <p>MinStyle.io</p>
    </div>
    <nav class="ms-menu-link">
        <input type="checkbox" id="ms-menu-toggle">
        <label for="ms-menu-toggle" class="ms-menu-icon"><i class="fa fa-bars"></i></label>
        <ul>
            <a href=""><li>Home</li></a>
            <a href="#"><li>Link 1</li></a>
            <a href="#"><li>Link 2</li></a>
            <a href="#"><li>Link 3</li></a>
            <a href="#"><li>Link 4</li></a>
        </ul>
    </nav>
</div>
```

___

## Colors

It is possible to customize the color of the menu with the classes `.ms-info`, `.ms-success`, `.ms-danger` and `.ms-warning`.

<div class="ms-menu ms-info">
    <div class="ms-menu-logo">
        <p>MinStyle.io</p>
    </div>
    <nav class="ms-menu-link">
        <input type="checkbox" id="ms-menu-toggle">
        <label for="ms-menu-toggle" class="ms-menu-icon"><i class="fa fa-bars"></i></label>
        <ul>
            <a href=""><li>Home</li></a>
            <a href="#"><li>Link 1</li></a>
            <a href="#"><li>Link 2</li></a>
            <a href="#"><li>Link 3</li></a>
            <a href="#"><li>Link 4</li></a>
        </ul>
    </nav>
</div>

<br/>

<div class="ms-menu ms-success">
    <div class="ms-menu-logo">
        <p>MinStyle.io</p>
    </div>
    <nav class="ms-menu-link">
        <input type="checkbox" id="ms-menu-toggle">
        <label for="ms-menu-toggle" class="ms-menu-icon"><i class="fa fa-bars"></i></label>
        <ul>
            <a href=""><li>Home</li></a>
            <a href="#"><li>Link 1</li></a>
            <a href="#"><li>Link 2</li></a>
            <a href="#"><li>Link 3</li></a>
            <a href="#"><li>Link 4</li></a>
        </ul>
    </nav>
</div>

<br/>

<div class="ms-menu ms-danger">
    <div class="ms-menu-logo">
        <p>MinStyle.io</p>
    </div>
    <nav class="ms-menu-link">
        <input type="checkbox" id="ms-menu-toggle">
        <label for="ms-menu-toggle" class="ms-menu-icon"><i class="fa fa-bars"></i></label>
        <ul>
            <a href=""><li>Home</li></a>
            <a href="#"><li>Link 1</li></a>
            <a href="#"><li>Link 2</li></a>
            <a href="#"><li>Link 3</li></a>
            <a href="#"><li>Link 4</li></a>
        </ul>
    </nav>
</div>

<br/>

<div class="ms-menu ms-warning">
    <div class="ms-menu-logo">
        <p>MinStyle.io</p>
    </div>
    <nav class="ms-menu-link">
        <input type="checkbox" id="ms-menu-toggle">
        <label for="ms-menu-toggle" class="ms-menu-icon"><i class="fa fa-bars"></i></label>
        <ul>
            <a href=""><li>Home</li></a>
            <a href="#"><li>Link 1</li></a>
            <a href="#"><li>Link 2</li></a>
            <a href="#"><li>Link 3</li></a>
            <a href="#"><li>Link 4</li></a>
        </ul>
    </nav>
</div>

```html
<div class="ms-menu ms-info">
    ....
</div>

<div class="ms-menu ms-success">
    ....
</div>

<div class="ms-menu ms-danger">
    ....
</div>

<div class="ms-menu ms-warning">
    ....
</div>
```

## Logo

It is also possible to insert your logo in the menu, it will be automatically resized.

<div class="ms-menu">
    <div class="ms-menu-logo">
        <img src="/img/logo.png"/>
    </div>
    <nav class="ms-menu-link">
        <input type="checkbox" id="ms-menu-toggle">
        <label for="ms-menu-toggle" class="ms-menu-icon"><i class="fa fa-bars"></i></label>
        <ul>
            <a href=""><li>Home</li></a>
            <a href="#"><li>Link 1</li></a>
            <a href="#"><li>Link 2</li></a>
            <a href="#"><li>Link 3</li></a>
            <a href="#"><li>Link 4</li></a>
        </ul>
    </nav>
</div>

```html
<div class="ms-menu">
    <div class="ms-menu-logo">
        <img src="/img/logo.png"/>
    </div>
    <nav class="ms-menu-link">
        <input type="checkbox" id="ms-menu-toggle">
        <label for="ms-menu-toggle" class="ms-menu-icon"><i class="fa fa-bars"></i></label>
        <ul>
            <a href=""><li>Home</li></a>
            <a href="#"><li>Link 1</li></a>
            <a href="#"><li>Link 2</li></a>
            <a href="#"><li>Link 3</li></a>
            <a href="#"><li>Link 4</li></a>
        </ul>
    </nav>
</div>
```