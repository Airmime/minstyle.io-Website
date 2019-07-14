## Grid

Layout include **grid** allows to design a responsive interface, for mobile, tablet or PC. We using [Toast Framework](https://github.com/daneden/Toast).

## Quick-start

Using Toast is easy. To use the grid, you'll need a wrap, for this purpose it is necessary to use `.container` classe. Then, you can add columns with the `.ms_col` and `ms_col--[col-number]-of-[group-number]` classes. `[col-number]` determines the number of columns to be displayed, and `[group-number]` the total number of columns that can be displayed on the line (2, 3, 4, 5, 6, 8, or 12).

<div class="container">
    <div class="ms_col ms_col--12-of-12" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>ms_col ms_col--12-of-12</code>
    </div><br/><br/>
    <div class="ms_col ms_col--3-of-4" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>ms_col ms_col--3-of-4</code>
    </div><br/><br/>
    <div class="ms_col ms_col--1-of-2" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>ms_col ms_col--1-of-2</code>
    </div><br/><br/>
    <div class="ms_col ms_col--1-of-3" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>ms_col ms_col--1-of-3</code>
    </div><br/><br/>
    <div class="ms_col ms_col--2-of-12" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>2--12...</code>
    </div><br/><br/>
    <div class="ms_col ms_col--1-of-12" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>1...</code>
    </div>
</div>

```html
<div class="container">
    <div class="ms_col ms_col--12-of-12">...</div>
    <div class="ms_col ms_col--3-of-3">...</div>
    <div class="ms_col ms_col--1-of-2">...</div>
    <div class="ms_col ms_col--1-of-3">...</div>
    <div class="ms_col ms_col--2-of-12">...</div>
    <div class="ms_col ms_col--1-of-12">...</div>
</div>
```

Samples content :

<div class="container">
    <div class="ms_col ms_col--3-of-12" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>3-of-12...</code>
    </div>
    <div class="ms_col ms_col--9-of-12" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>9-of-12...</code>
    </div>
</div>

```html
<div class="container">
    <div class="ms_col ms_col--3-of-12">...</div>
    <div class="ms_col ms_col--9-of-12">...</div>
</div>
```

<div class="container">
    <div class="ms_col ms_col--1-of-3" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>1-of-3...</code>
    </div>
    <div class="ms_col ms_col--1-of-3" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>1-of-3...</code>
    </div>
    <div class="ms_col ms_col--1-of-3" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>1-of-3...</code>
    </div>
</div>

```html
<div class="container">
    <div class="ms_col ms_col--1-of-3">...</div>
    <div class="ms_col ms_col--1-of-3">...</div>
    <div class="ms_col ms_col--1-of-3">...</div>
</div>
```

<div class="container">
    <div class="ms_col ms_col--1-of-4" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>1-of-4...</code>
    </div>
    <div class="ms_col ms_col--1-of-4" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>1-of-4...</code>
    </div>
    <div class="ms_col ms_col--1-of-2" style="background-color:#fdf0f0;background-clip:content-box;height:30px;line-height:25px;text-align:center;">
      <code>1-of-2...</code>
    </div>
</div>

```html
<div class="container">
    <div class="ms_col ms_col--1-of-4">...</div>
    <div class="ms_col ms_col--1-of-4">...</div>
    <div class="ms_col ms_col--1-of-2">...</div>
</div>
```