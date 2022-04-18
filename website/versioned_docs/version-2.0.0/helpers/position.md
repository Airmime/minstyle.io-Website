---
id: position
title: Position
description: Position helpers allow you to modify the position of HTML elements via CSS class.
keywords: [Position, Helper, HTML, CSS, CSS Framework, minstyle.io]
---

Position helpers allow you to modify the position of HTML elements via CSS class.

## Center div

The `.ms-div-center` class allows to center an HTML element.

```html
<div>
    <div class="ms-div-center">.ms-div-center</div>
</div>
```

## Text position

The `.ms-text-***` class allows to change the position of the text.

```html live
<div>
    <div class="ms-alert ms-border ms-fullwidth ms-text-left">.ms-text-left</div>
    <div class="ms-alert ms-border ms-fullwidth ms-text-center">.ms-text-center</div>
    <div class="ms-alert ms-border ms-fullwidth ms-text-right">.ms-text-right</div>
</div>
```

## Float

The `.ms-float-***` class allows to change a block's float.

```html
<div>
    <div class="ms-alert ms-border ms-float-left">float: left;</div>
    <div class="ms-alert ms-border ms-float-right">float: right;</div>
    <div class="ms-alert ms-border ms-float-clear">clear: both;</div>
</div>
```

## Block position

The `.ms-posision-***` class allows to change the position of the text.

```html
<div>
    <div class="ms-posision-relative">position: relative;</div>
    <div class="ms-posision-absolute">position: absolute;</div>
    <div class="ms-posision-fixed">position: fixed;</div>
    <div class="ms-posision-sticky">position: sticky;</div>
</div>
```

It is also possible to refine the location of the absolute position.

```html
<div>
    <div class="ms-posision-absolute-top">.ms-posision-absolute-top</div><!-- absolute position with top:0 -->
    <div class="ms-posision-absolute-bottom">.ms-posision-absolute-bottom</div><!-- absolute position with bottom:0 -->
    <div class="ms-posision-absolute-left">.ms-posision-absolute-left</div><!-- absolute position with left:0 -->
    <div class="ms-posision-absolute-right">.ms-posision-absolute-right</div><!-- absolute position with right:0 -->
    <div class="ms-posision-absolute-right-top">.ms-posision-absolute-right-top</div><!-- absolute position with right:0 and top:0 -->
    <div class="ms-posision-absolute-right-bottom">.ms-posision-absolute-right-bottom</div><!-- absolute position with right:0 and bottom:0 -->
    <div class="ms-posision-absolute-left-top">.ms-posision-absolute-left-top</div><!-- absolute position with left:0 and top:0 -->
    <div class="ms-posision-absolute-left-bottom">.ms-posision-absolute-left-bottom</div><!-- absolute position with left:0 and bottom:0 -->
</div>
```

The same function exists for the fixed position.

```html
<div>
    <div class="ms-posision-fixed-top">.ms-posision-fixed-top</div><!-- fixed position with top:0 -->
    <div class="ms-posision-fixed-bottom">.ms-posision-fixed-bottom</div><!-- fixed position with bottom:0 -->
    <div class="ms-posision-fixed-left">.ms-posision-fixed-left</div><!-- fixed position with left:0 -->
    <div class="ms-posision-fixed-right">.ms-posision-fixed-right</div><!-- fixed position with right:0 -->
    <div class="ms-posision-fixed-right-top">.ms-posision-fixed-right-top</div><!-- fixed position with right:0 and top:0 -->
    <div class="ms-posision-fixed-right-bottom">.ms-posision-fixed-right-bottom</div><!-- fixed position with right:0 and bottom:0 -->
    <div class="ms-posision-fixed-left-top">.ms-posision-fixed-left-top</div><!-- fixed position with left:0 and top:0 -->
    <div class="ms-posision-fixed-left-bottom">.ms-posision-fixed-left-bottom</div><!-- fixed position with left:0 and bottom:0 -->
</div>
```