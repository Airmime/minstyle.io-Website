---
id: alert
title: Alert
description: Alerts allow you to display a contextual message about your users actions. These are available in several shapes, colors and sizes.
keywords: [Alert, HTML, CSS, CSS Framework, minstyle.io]
---

Alerts allow you to display a contextual message about your users actions. These are available in several shapes, colors and sizes.

> For more informations on the icons used, consult the dedicated [page](../contents/icons.md).

## Basic usage

An alert simply contains a root tag with the class `.ms-alert`, and a paragraph.

```html live
<div class="ms-alert">
    <p>
        <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
    </p>
</div>
```

To adapt your button to your content, **several colors** are available.

```html live
<div>
    <div class="ms-alert ms-primary">
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
    <div class="ms-alert ms-secondary">
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
    <div class="ms-alert ms-action">
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
    <div class="ms-alert ms-action2">
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
</div>
```

## Close

A cross can be added via the class `.ms-close`, it will be positioned on the top right corner.

```html live
<div class="ms-alert">
    <span class="ms-close"></span>
    <p>
        <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
    </p>
</div>
```

## Sizes

In order to adapt the alerts to your content, it is possible to display them in different sizes with classes  `.ms-small`, `.ms-medium` and `.ms-large`.

```html live
<div>
    <div class="ms-alert ms-small">
        <span class="ms-close"></span>
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
    <div class="ms-alert">
        <span class="ms-close"></span>
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
    <div class="ms-alert ms-medium">
        <span class="ms-close"></span>
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
    <div class="ms-alert ms-large">
        <span class="ms-close"></span>
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
</div>
```

It is possible to extend the alert to 100% of the width with the classe `.ms-fullwith`.

```html live
<div class="ms-alert ms-action ms-fullwidth">
    <span class="ms-close"></span>
    <p>
        <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
    </p>
</div>
```

## Light alerts

Alerts can also have a more discret background, using the `.ms-light` classe.

```html live
<div>
    <div class="ms-alert ms-light">
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
    <div class="ms-alert ms-light ms-primary">
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
    <div class="ms-alert ms-light ms-secondary">
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
    <div class="ms-alert ms-light ms-action">
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
    <div class="ms-alert ms-light ms-action2">
        <p>
            <i class="fas fa-cookie-bite"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremqueassumenda quibusdam.
        </p>
    </div>
</div>
```