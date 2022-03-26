---
id: flexbox
title: Flexbox
description: Different classes can accompany you in the layout of flexbox CSS.
keywords: [Flexbox, Helper, HTML, CSS, CSS Framework, minstyle.io]
---

Different classes can accompany you in the layout of flexbox CSS.

> Understand flexible containers in a few minutes -> [css-tricks.com/flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Display

First, the `.ms-display-flex` class allows you to define a flexible container.

```html
<div class="ms-display-flex">display: flex;</div>
```

## Flex direction

The class `.ms-flex-direction-***` is used to define the direction in which the flexible elements are placed in the flexbox.

```html
<div class="ms-flex-direction-row">flex-direction: row;</div>
<div class="ms-flex-direction-row-reverse">flex-direction: row-reverse;</div>
<div class="ms-flex-direction-column">flex-direction: column;</div>
<div class="ms-flex-direction-column-reverse">flex-direction: column-reverse;</div>
```

## Flex wrap

The position of the elements on a line can be modified with the class `.ms-flex-wrap-***`.

```html
<div class="ms-flex-wrap-nowrap">flex-wrap: nowrap;</div>
<div class="ms-flex-wrap-wrap">flex-wrap: rwrap;</div>
<div class="ms-flex-wrap-reverse">flex-wrap: reverse;</div>
```

## Justify content

The `.ms-flex-justify-***` class allows to define the alignment of the elements on the flex container.

```html
<div class="ms-flex-justify-start">justify-content: flex-start;</div>
<div class="ms-flex-justify-end">justify-content: flex-end;</div>
<div class="ms-flex-justify-center">justify-content: center;</div>
<div class="ms-flex-justify-between">justify-content: space-between;</div>
<div class="ms-flex-justify-around">justify-content: space-around;</div>
<div class="ms-flex-justify-evenly">justify-content: space-evenly;</div>
<div class="ms-flex-justify-left">justify-content: left;</div>
<div class="ms-flex-justify-right">justify-content: right;</div>
```

## Align items

The `.ms-flex-align-items-***` class defines the default behavior for the arrangement of flex elements along the cross axis on the flex container.

```html
<div class="ms-flex-align-items-start">align-items: flex-start;</div>
<div class="ms-flex-align-items-end">align-items: flex-end;</div>
<div class="ms-flex-align-items-center">align-items: center;</div>
<div class="ms-flex-align-items-baseline">align-items: baseline;</div>
<div class="ms-flex-align-items-stretch">align-items: stretch;</div>
```

## Align content

The `.ms-flex-align-content-***` class allows to align the lines of a flex container when there is an extra space in the cross axis.

```html
<div class="ms-flex-align-content-start">align-content: flex-start;</div>
<div class="ms-flex-align-content-end">align-content: flex-end;</div>
<div class="ms-flex-align-content-center">align-content: center;</div>
<div class="ms-flex-align-content-between">align-content: space-between;</div>
<div class="ms-flex-align-content-around">align-content: space-around;</div>
<div class="ms-flex-align-content-stretch">align-content: stretch;</div>
```

## Order items

The `ms-flex-item-***` class allows to define the order of the elements. **The class increments from 0 to 12.**

```html
<div class="ms-flex-item-0">order: 0;</div>
...
<div class="ms-flex-item-6">order: 6;</div>
...
<div class="ms-flex-item-12">order: 12;</div>
```

## Flex grow

The `.ms-flex-grow-***` class controls the order in which the elements appear in the flex container. **The class increments from 0 to 12.**

```html
<div class="ms-flex-grow-0">flex-grow: 0;</div>
...
<div class="ms-flex-grow-6">flex-grow: 6;</div>
...
<div class="ms-flex-grow-12">flex-grow: 12;</div>
```

## Flex shrink

The `.ms-flex-shrink-***` class defines the ability of a flexible element to shrink if necessary. **The class increments from -12 to 12.**

```html
<div class="ms-flex-shrink-min-12">flex-shrink: -12;</div>
...
<div class="ms-flex-shrink-min-6">flex-shrink: -6;</div>
...
<div class="ms-flex-shrink-0">flex-shrink: 0;</div>
...
<div class="ms-flex-shrink-6">flex-shrink: 6;</div>
...
<div class="ms-flex-shrink-12">flex-shrink: 12;</div>
```

## Flex basis

The `.ms-flex-basis-***` class defines the default size of an element before the remaining space is distributed.

```html
<div class="ms-flex-basis-auto">flex-basis: auto;</div>
<div class="ms-flex-basis-0">flex-basis: 0;</div>
```

## Align self

The `.ms-flex-align-self-***` class allows you to override the default alignment (or the one specified by align-items) for individual flex elements.

```html
<div class="ms-flex-align-self-auto">align-self: auto;</div>
<div class="ms-flex-align-self-start">align-self: flex-start;</div>
<div class="ms-flex-align-self-end">align-self: flex-end;</div>
<div class="ms-flex-align-self-center">align-self: center;</div>
<div class="ms-flex-align-self-baseline">align-self: baseline;</div>
<div class="ms-flex-align-self-stretch">align-self: stretch;</div>
```