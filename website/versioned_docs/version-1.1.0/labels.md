---
id: version-1.1.0-labels
title: Labels
original_id: labels
---

Labels allow you to display highlighted text. These are available in different sizes, shapes and colors.

<div class="ms-browser">
    <div class="ms-tab-browser">
        <div class="ms-dot red"></div>
        <div class="ms-dot yellow"></div>
        <div class="ms-dot green"></div>
    </div>
    <div class="ms-content">
        This is a <span class="ms-label">label</span>
    </div>
</div>

```html
<span class="ms-label">label</span>
```

To display a status, you can also **change the color** of the label.

<span class="ms-label ms-info">label</span>
<span class="ms-label ms-success">label</span>
<span class="ms-label ms-danger">label</span>
<span class="ms-label ms-warning">label</span>

```html
<span class="ms-label ms-info">label</span>
<span class="ms-label ms-success">label</span>
<span class="ms-label ms-danger">label</span>
<span class="ms-label ms-warning">label</span>
```

___

## Light labels

Labels can also have a more discret background, using the `ms-outline-**` classe.

<span class="ms-label ms-outline-info">label</span>
<span class="ms-label ms-outline-success">label</span>
<span class="ms-label ms-outline-danger">label</span>
<span class="ms-label ms-outline-warning">label</span>

```html
<span class="ms-label ms-outline-info">label</span>
<span class="ms-label ms-outline-success">label</span>
<span class="ms-label ms-outline-danger">label</span>
<span class="ms-label ms-outline-warning">label</span>
```

___

## Sizes

The classes `ms-small`, `ms-medium` and `ms-large` allow you to modify the size of the label.

<span class="ms-label ms-small ms-outline-info">small</span>
<span class="ms-label">default</span>
<span class="ms-label ms-medium ms-success">medium</span>
<span class="ms-label ms-large ms-outline-danger">large</span>

```html
<span class="ms-label ms-small ms-outline-info">small</span>
<span class="ms-label">default</span>
<span class="ms-label ms-medium ms-success">medium</span>
<span class="ms-label ms-large ms-outline-danger">large</span>
```
___

## Rounded

Add the `ms-rounded` class to have rounded labels.

<span class="ms-label ms-outline-success ms-rounded">rounded</span>
<span class="ms-label ms-info ms-rounded">rounded</span>

```html
<span class="ms-label ms-outline-success ms-rounded">rounded</span>
<span class="ms-label ms-info ms-rounded">rounded</span>
```