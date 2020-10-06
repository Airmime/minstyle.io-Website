---
id: version-1.1.0-progress-bars
title: Progress Bars
original_id: progress-bars
---

The progress bar allows you to display the progress of the completion of a task. This can be done in different ways, by changing the shape, size or color. 

> For browser compatibility reasons, we do not use the `<progress>` HTML element 

To constitute the loading bar, two HTML tags are required, one to define the background `.ms-progress`, and the other to fill the bar `.ms-progress-fill`.

<div class="ms-browser">
    <div class="ms-tab-browser">
        <div class="ms-dot red"></div>
        <div class="ms-dot yellow"></div>
        <div class="ms-dot green"></div>
    </div>
    <div class="ms-content">
        <div class="ms-progress">
            <div class="ms-progress-fill" style="width: 20%;">20%</div>
        </div>
    </div>
</div>

```html
<div class="ms-progress">
    <div class="ms-progress-fill" style="width: 20%;">20%</div>
</div>
```

Different **colours** are available for the progress bars.

<div class="ms-progress">
    <div class="ms-progress-fill ms-info" style="width: 30%;">30%</div>
</div>
		
<div class="ms-progress">
    <div class="ms-progress-fill ms-success" style="width: 40%;">40%</div>
</div>
		
<div class="ms-progress">
    <div class="ms-progress-fill ms-danger" style="width: 50%;">50%</div>
</div>
		
<div class="ms-progress">
	<div class="ms-progress-fill ms-warning" style="width: 60%;">60%</div>
</div>

```html
<div class="ms-progress">
    <div class="ms-progress-fill ms-info" style="width: 30%;">30%</div>
</div>
		
<div class="ms-progress">
    <div class="ms-progress-fill ms-success" style="width: 40%;">40%</div>
</div>
		
<div class="ms-progress">
    <div class="ms-progress-fill ms-danger" style="width: 50%;">50%</div>
</div>
		
<div class="ms-progress">
	<div class="ms-progress-fill ms-warning" style="width: 60%;">60%</div>
</div>
```

It is also possible to integrate **several colours into a single loading bar**.

<div class="ms-progress">
    <div class="ms-progress-fill ms-info" style="width: 33.3%;"></div>
    <div class="ms-progress-fill" style="width: 33.3%;"></div>
    <div class="ms-progress-fill ms-danger" style="width: 33.3%;"></div>
</div>

```html
<div class="ms-progress">
    <div class="ms-progress-fill ms-info" style="width: 33.3%;"></div>
    <div class="ms-progress-fill" style="width: 33.3%;"></div>
    <div class="ms-progress-fill ms-danger" style="width: 33.3%;"></div>
</div>
```
___

## Sizes

Progress bars can be generated with different sizes, with `.ms-medium` and `.ms-large` classes. The class must be integrated in the parent element.

<div class="ms-progress">
	<div class="ms-progress-fill ms-success" style="width: 20%;">default</div>
</div>
		
<div class="ms-progress ms-medium">
	<div class="ms-progress-fill ms-success" style="width: 20%;">medium</div>
</div>
		
<div class="ms-progress ms-large">
	<div class="ms-progress-fill ms-success" style="width: 20%;">large</div>
</div>

```html
<div class="ms-progress">
	<div class="ms-progress-fill ms-success" style="width: 20%;">default</div>
</div>
		
<div class="ms-progress ms-medium">
	<div class="ms-progress-fill ms-success" style="width: 20%;">medium</div>
</div>
		
<div class="ms-progress ms-large">
	<div class="ms-progress-fill ms-success" style="width: 20%;">large</div>
</div>
```