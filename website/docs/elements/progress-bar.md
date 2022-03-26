---
id: progress-bar
title: Progress Bar
description: The progress bar allows you to display the progress of the completion of a task. This can be done in different ways, by changing the shape, size or color.
keywords: [Progress Bar, HTML, CSS, CSS Framework, minstyle.io]
---

The progress bar allows you to display the progress of the completion of a task. This can be done in different ways, by changing the shape, size or color. 

> For browser compatibility reasons, we do not use the `<progress>` HTML element 

## Basic usage

To constitute the loading bar, two HTML tags are required, one to define the background `.ms-progress`, and the other to fill the bar `.ms-progress-fill`.

<div class="ms-progress">
    <div class="ms-progress-fill thirty-percent" >30%</div>
</div>

```html
<div class="ms-progress">
    <div class="ms-progress-fill" style="width: 30%">30%</div>
</div>
```

Different colours are available for the progress bars.

<div class="ms-progress">
    <div class="ms-progress-fill thirty-percent ms-primary" >30%</div>
</div>

<div class="ms-progress">
    <div class="ms-progress-fill thirty-percent ms-secondary" >30%</div>
</div>

<div class="ms-progress">
    <div class="ms-progress-fill thirty-percent ms-action" >30%</div>
</div>

<div class="ms-progress">
    <div class="ms-progress-fill thirty-percent ms-action2" >30%</div>
</div>

```html
<div class="ms-progress">
    <div class="ms-progress-fill ms-primary" style="width: 30%">30%</div>
</div>

<div class="ms-progress">
    <div class="ms-progress-fill ms-secondary" style="width: 30%">30%</div>
</div>

<div class="ms-progress">
    <div class="ms-progress-fill ms-action" style="width: 30%">30%</div>
</div>

<div class="ms-progress">
    <div class="ms-progress-fill ms-action2" style="width: 30%">30%</div>
</div>
```

It is also possible to integrate several colours into a single loading bar.

<div class="ms-progress">
    <div class="ms-progress-fill thirty-percent ms-secondary" >30%</div>
    <div class="ms-progress-fill thirty-percent ms-action" >30%</div>
</div>

```html
<div class="ms-progress">
    <div class="ms-progress-fill ms-secondary" style="width: 30%">30%</div>
    <div class="ms-progress-fill ms-action" style="width: 30%">30%</div>
</div>
```

## Sizes

Progress bars can be generated with different sizes, with `.ms-medium` and `.ms-large` classes. The class must be integrated in the `.ms-progress` parent element.

<div class="ms-progress">
    <div class="ms-progress-fill thirty-percent ms-primary" >default</div>
</div>

<div class="ms-progress ms-medium">
    <div class="ms-progress-fill thirty-percent ms-action" >medium</div>
</div>

<div class="ms-progress ms-large">
    <div class="ms-progress-fill thirty-percent ms-action2" >large</div>
</div>

```html
<div class="ms-progress">
    <div class="ms-progress-fill ms-primary" style="width: 30%">default</div>
</div>

<div class="ms-progress ms-medium">
    <div class="ms-progress-fill ms-action" style="width: 30%">medium</div>
</div>

<div class="ms-progress ms-large">
    <div class="ms-progress-fill ms-action2" style="width: 30%">large</div>
</div>
```

## Light progress-bars

The bars of progression can be finer with the class `.ms-light`.

<div class="ms-progress ms-light">
    <div class="ms-progress-fill thirty-percent ms-primary" >default</div>
</div>

<div class="ms-progress ms-light">
    <div class="ms-progress-fill thirty-percent ms-action" >medium</div>
</div>

```html
<div class="ms-progress ms-light">
    <div class="ms-progress-fill ms-primary" style="width: 30%"></div>
</div>

<div class="ms-progress ms-light">
    <div class="ms-progress-fill ms-action" style="width: 30%"></div>
</div>
```