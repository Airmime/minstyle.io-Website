---
id: version-1.1.0-buttons
title: Buttons
original_id: buttons
---

Buttons or links dedicated to actions, are customizable, by colors, sizes and shapes.

## Basic usage

<div class="ms-browser">
    <div class="ms-tab-browser">
        <div class="ms-dot red"></div>
        <div class="ms-dot yellow"></div>
        <div class="ms-dot green"></div>
    </div>
    <div class="ms-content">
        <button class="ms-btn">default</button>
    </div>
</div>

```html
<button class="ms-btn">default</button>
```

To adapt your button to your content, **several colors** are available.

<button class="ms-btn ms-info">ms-info</button>
<button class="ms-btn ms-success">ms-success</button>
<button class="ms-btn ms-danger">ms-danger</button>
<button class="ms-btn ms-warning">ms-warning</button>

```html
<button class="ms-btn ms-info">ms-info</button>
<button class="ms-btn ms-success">ms-success</button>
<button class="ms-btn ms-danger">ms-danger</button>
<button class="ms-btn ms-warning">ms-warning</button>
```

The `.ms-btn` classe can be used on the `<button>` and also on the `<a>` or `<input>`.

``` html
<input type="submit" class="ms-success" value="Button">
```

> For more informations on the icons used, consult the dedicated [page](icons.md).

<button class="ms-btn ms-success"><i class="fas fa-mug-hot"></i> Coffee time !</button>

___

## Sizes

The buttons come in **different sizes** with the classes `.ms-small`, `.ms-medium` and `.ms-large`.

<button class="ms-btn ms-small">small</button>
<button class="ms-btn">default</button>
<button class="ms-btn ms-medium">medium</button>
<button class="ms-btn ms-large">large</button>

```html
<button class="ms-btn ms-small">small</button>
<button class="ms-btn">default</button>
<button class="ms-btn ms-medium">medium</button>
<button class="ms-btn ms-large">large</button>
```

It is possible to extend the button to **100% of the width** with the classe `.ms-fullwith`.

<button class="ms-btn ms-info ms-fullwidth">fullwidth</button>

```html
<button class="ms-btn ms-info ms-fullwidth">fullwidth</button>
```
___

## Outline

The class `.ms-outline-*` allows you to obtain a button **without background color**. 
The colors are identical to those used on the classe `.ms-btn`.

<button class="ms-btn ms-outline-danger">Button</button>
<button class="ms-btn ms-outline-success">Button</button>

```html
<button class="ms-btn ms-outline-danger">Button</button>
<button class="ms-btn ms-outline-success">Button</button>
```
___

## Rounded

You can also change the appearance of the buttons, by **changing their angles** with the `.ms-rounded` classe.

<button class="ms-btn ms-danger ms-rounded">Button</button>
<button class="ms-btn ms-outline-success ms-rounded">Button</button>

```html
<button class="ms-btn ms-danger ms-rounded">Button</button>
<button class="ms-btn ms-outline-success ms-rounded">Button</button>
```
___

## Shadow

To give more depth to your design, the `.ms-shadow` class allows you to add a **shadow** to the buttons.

<button class="ms-btn ms-shadow">Button</button>
<button class="ms-btn ms-success ms-shadow">Button</button>

```html
<button class="ms-btn ms-shadow">Button</button>
<button class="ms-btn ms-success ms-shadow">Button</button>
```
___

## Disabled

If you want to **disable a button** with the `disabled` attribute, it will have its opacity reduced by half. You can also use the `.ms-disabled` class on `<a>` to disable a link.

<button class="ms-btn" disabled>Button</button>
<button class="ms-btn ms-outline-warning" disabled>Button</button>

```html
<button class="ms-btn" disabled>Button</button>
<button class="ms-btn ms-outline-warning" disabled>Button</button>
```

