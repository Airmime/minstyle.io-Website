---
id: label
title: Label
description: Labels allow you to display highlighted text. These are available in different sizes, shapes and colors.
keywords: [Labels, HTML, CSS, CSS Framework, minstyle.io]
---

Labels allow you to display highlighted text. These are available in different sizes, shapes and colors.

## Basic usage

The `.ms-label` class allows you to set up a label.

```html live
<div class="ms-label">label</div>
```

To adapt your button to your content, several colors are available.

```html live
<div>
    <div class="ms-label ms-primary">label</div>
    <div class="ms-label ms-secondary">label</div>
    <div class="ms-label ms-action">label</div>
    <div class="ms-label ms-action2">label</div>
</div>
```

## Close

A cross can be added via the class `.ms-close`, it will be positioned on the top right corner.

```html live
<div class="ms-label ms-action2">label <span class="ms-close"></span></div>
```

## Sizes

In order to adapt the label to your content, it is possible to display them in different sizes with classes .ms-small, .ms-medium and .ms-large.

```html live
<div>
    <div class="ms-label ms-small">label</div>
    <div class="ms-label">label</div>
    <div class="ms-label ms-medium">label</div>
    <div class="ms-label ms-large">label</div>
</div>
```

## Light labels

Labels can also have a more discret background, using the `.ms-light` classe.

```html live
<div>
    <div class="ms-label ms-primary ms-light">label</div>
    <div class="ms-label ms-secondary ms-light">label</div>
    <div class="ms-label ms-action ms-light">label</div>
    <div class="ms-label ms-action2 ms-light">label</div>
</div>
```

## Border

Labels can get a border with the `.ms-border` class.

```html live
<div>
    <div class="ms-label ms-border ms-primary">label</div>
    <div class="ms-label ms-border ms-secondary">label</div>
    <div class="ms-label ms-border ms-action">label</div>
    <div class="ms-label ms-border ms-action2">label</div>
</div>
```

## Active Label

A label can be activated using the `.ms-label-active` classe.

```jsx live
<div>
    <div class="ms-label ms-label-active ms-primary">label</div>
    <div class="ms-label ms-label-active ms-secondary">label</div>
    <div class="ms-label ms-label-active ms-action">label</div>
    <div class="ms-label ms-label-active ms-action2">label</div>
</div>
```