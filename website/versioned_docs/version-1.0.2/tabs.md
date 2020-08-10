---
id: version-1.0.2-tabs
title: Tabs
original_id: tabs
---

The tab component allows you to display a simple menu, containing several tabs. Different shapes and colours are available.

<div class="ms-tab">
    <ul style="padding:0;">
        <li><a href="#" class="ms-active" style="color: inherit; font-weight:normal;">Soccer</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Basket-ball</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Golf</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">VTT</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Baseball</a></li>
    </ul>
</div>

```html
<div class="ms-tab">
    <ul>
        <li><a href="#" class="ms-active">Soccer</a></li>
        <li><a href="#">Basket-ball</a></li>
        <li><a href="#">Golf</a></li>
        <li><a href="#">VTT</a></li>
        <li><a href="#">Baseball</a></li>
    </ul>
</div>
```

Different **colors are available**. These change the color of the active tab as well as the color of the hover.

<div class="ms-tab ms-info">
    <ul style="padding:0;">
        <li><a href="#" style="color: inherit; font-weight:normal;">Soccer</a></li>
        <li><a href="#" class="ms-active" style="color: inherit; font-weight:normal;">Basket-ball</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Golf</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">VTT</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Baseball</a></li>
    </ul>
</div>

<div class="ms-tab ms-success">
    <ul style="padding:0;">
        <li><a href="#" style="color: inherit; font-weight:normal;">Soccer</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Basket-ball</a></li>
        <li><a href="#" class="ms-active" style="color: inherit; font-weight:normal;">Golf</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">VTT</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Baseball</a></li>
    </ul>
</div>

<div class="ms-tab ms-error">
    <ul style="padding:0;">
        <li><a href="#" style="color: inherit; font-weight:normal;">Soccer</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Basket-ball</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Golf</a></li>
        <li><a href="#" class="ms-active" style="color: inherit; font-weight:normal;">VTT</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Baseball</a></li>
    </ul>
</div>

<div class="ms-tab ms-warning">
    <ul style="padding:0;">
        <li><a href="#" style="color: inherit; font-weight:normal;">Soccer</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Basket-ball</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Golf</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">VTT</a></li>
        <li><a href="#" class="ms-active"  style="color: inherit; font-weight:normal;">Baseball</a></li>
    </ul>
</div>

```html
<div class="ms-tab ms-info">
    ...
</div>

<div class="ms-tab ms-success">
    ...
</div>

<div class="ms-tab ms-error">
    ...
</div>

<div class="ms-tab ms-warning">
    ...
</div>
```

___

## Full width

The classe `ms-fullwidth` allows you to take the **entire width** of the container.

> For more informations on the icons used, consult the dedicated [page](icons.md).

<div class="ms-tab ms-fullwidth ms-info">
    <ul style="padding:0;">
        <li><a href="#" style="color: inherit; font-weight:normal;"><i class="fas fa-igloo"></i> Home</a></li>
        <li><a href="#" class="ms-active" style="color: inherit; font-weight:normal;"><i class="far fa-file-word"></i> Doc</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;"><i class="far fa-envelope"></i> Contact</a></li>
    </ul>
</div>

```html
<div class="ms-tab ms-fullwidth ms-info">
    <ul>
        <li><a href="#"><i class="fas fa-igloo"></i> Home</a></li>
        <li><a href="#" class="ms-active"><i class="far fa-file-word"></i> Doc</a></li>
        <li><a href="#"><i class="far fa-envelope"></i> Contact</a></li>
    </ul>
</div>
```
___

## Logo

To customize the tabs with your logo, the `.ms-logo` classe allows you to **display an image**.

<div class="ms-tab ms-error">
    <ul style="padding:0;">
        <li class="ms-logo"><a href="#"><img src="_media/logo2.png" alt="Logo"></a></li>
        <li><a href="#" class="ms-active" style="color: inherit; font-weight:normal;">Soccer</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Basket-ball</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Golf</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">VTT</a></li>
        <li><a href="#" style="color: inherit; font-weight:normal;">Baseball</a></li>
    </ul>
</div>

```html
<div class="ms-tab ms-error">
    <ul>
        <li class="ms-logo"><a href="#"><img src="_media/logo2.png" alt="Logo"></a></li>
        <li><a href="#" class="ms-active">Soccer</a></li>
        <li><a href="#">Basket-ball</a></li>
        <li><a href="#">Golf</a></li>
        <li><a href="#">VTT</a></li>
        <li><a href="#">Baseball</a></li>
    </ul>
</div>
```