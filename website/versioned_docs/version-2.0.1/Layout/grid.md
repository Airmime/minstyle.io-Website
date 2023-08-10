---
id: grid
title: Grid
description: minstyle.io grid.
keywords: [Grid, HTML, CSS, CSS Framework, minstyle.io]
---

Today, it is difficult to find a responsive grid as complete and efficient as the one proposed by [boostrap](https://getbootstrap.com). minstyle.io therefore integrates the bootstrap grid (V5). The complete documentation is [available here](https://getbootstrap.com/docs/5.1/layout/grid/).

## How it works

Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

```html live
<div class="container">
  <div class="row">
    <div class="col-sm ms-bg-purple">One of three columns</div>
    <div class="col-sm">One of three columns</div>
    <div class="col-sm ms-bg-red">One of three columns</div>
  </div>
</div>
```

The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent `.container`.

## Grid options

While Bootstrap uses ems or rems for defining most sizes, pxs are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size.

See how aspects of the Bootstrap grid system work across multiple devices with a handy table.

<table class="ms-table ms-striped ms-bordered">
    <thead>
        <tr>
            <th></th>
            <th class="ms-text-center">xs<br/> ≤ 576px </th>
            <th class="ms-text-center">sm<br/> ≥ 576px</th>
            <th class="ms-text-center">md<br/> ≥ 768px</th>
            <th class="ms-text-center">lg<br/> ≥ 992px</th>
            <th class="ms-text-center">xl<br/> large ≥ 1200px</th>
            <th class="ms-text-center">xll<br/> large ≥ 1400px</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Max container width</td>
            <td>None (auto)</td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
            <td>1320px</td>
        </tr>
        <tr>
            <td>Class prefix</td>
            <td><code>.col-</code></td>
            <td><code>.col-sm--</code></td>
            <td><code>.col-md-</code></td>
            <td><code>.col-lg-</code></td>
            <td><code>.col-xl-</code></td>
            <td><code>.col-xll-</code></td>
        </tr>
        <tr>
            <td># of columns</td>
            <td colspan="6">12</td>
        </tr>
        <tr>
            <td>Gutter width</td>
            <td colspan="6">1.5rem (.75rem on left and right)</td>
        </tr>
        <tr>
            <td>Custom gutters</td>
            <td colspan="6"><a href="https://getbootstrap.com/docs/5.1/layout/gutters/" target="_blank">Yes</a></td>
        </tr>
        <tr>
            <td>Nestable</td>
            <td colspan="6"><a href="https://getbootstrap.com/docs/5.1/layout/grid/#nesting" target="_blank">Yes</a></td>
        </tr>
        <tr>
            <td>Column ordering</td>
            <td colspan="6"><a href="https://getbootstrap.com/docs/5.1/layout/columns/#reordering" target="_blank">Yes</a></td>
        </tr>
    </tbody>
</table>

## Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like `.col-sm-6`.

<a class="ms-btn ms-info" href="https://getbootstrap.com/docs/5.1/layout/grid/#auto-layout-columns">See more</a>

## Responsive classes

Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

<a class="ms-btn ms-info" href="https://getbootstrap.com/docs/5.1/layout/grid/#responsive-classes">See more</a>

## Nesting

To nest your content with the default grid, add a new `.row` and set of `.col-sm-*` columns within an existing `.col-sm-*` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

<a class="ms-btn ms-info" href="https://getbootstrap.com/docs/5.1/layout/grid/#nesting">See more</a>