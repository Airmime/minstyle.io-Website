---
id: version-1.1.0-grid
title: Grid
original_id: grid
---

Today, it is difficult to find a responsive grid as complete and efficient as the one proposed by [boostrap](https://getbootstrap.com). minstyle.io therefore integrates the bootstrap grid (V5). The complete documentation is [available here](https://getbootstrap.com/docs/4.5/layout/grid/).

## How it works

Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

```html
<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
```

The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent `.container`.

<a class="ms-btn ms-info" href="https://getbootstrap.com/docs/4.5/layout/grid/#how-it-works">See more</a>

## Grid options

While Bootstrap uses ems or rems for defining most sizes, pxs are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size.

See how aspects of the Bootstrap grid system work across multiple devices with a handy table.

<table class="ms-table ms-striped ms-bordered">
    <thead>
        <tr>
            <th></th>
            <th class="ms-text-center">Extra small<br/> <576px </th>
            <th class="ms-text-center">Small<br/> ≥576px</th>
            <th class="ms-text-center">Medium<br/> ≥768px</th>
            <th class="ms-text-center">Large<br/> ≥992px</th>
            <th class="ms-text-center">Extra<br/> large ≥1200px</th>
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
        </tr>
        <tr>
            <td>Class prefix</td>
            <td><code>.col-</code></td>
            <td><code>.col-sm--</code></td>
            <td><code>.col-md-</code></td>
            <td><code>.col-lg-</code></td>
            <td><code>.col-xl-</code></td>
        </tr>
        <tr>
            <td># of columns</td>
            <td colspan="5">12</td>
        </tr>
        <tr>
            <td>Gutter width</td>
            <td colspan="5">30px (15px on each side of a column)</td>
        </tr>
        <tr>
            <td>Nestable</td>
            <td colspan="5">Yes</td>
        </tr>
        <tr>
            <td>Column ordering</td>
            <td colspan="5">Yes</td>
        </tr>
    </tbody>
</table>

## Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like `.col-sm-6`.

<a class="ms-btn ms-info" href="https://getbootstrap.com/docs/4.5/layout/grid/#auto-layout-columns">See more</a>

## Responsive classes

Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

<a class="ms-btn ms-info" href="https://getbootstrap.com/docs/4.5/layout/grid/#responsive-classes">See more</a>

## Alignment
Use flexbox alignment utilities to vertically and horizontally align columns. Internet Explorer 10-11 do not support vertical alignment of flex items when the flex container has a min-height as shown below.

<a class="ms-btn ms-info" href="https://getbootstrap.com/docs/4.5/layout/grid/#alignment">See more</a>

## Reordering

Use .order- classes for controlling the visual order of your content. These classes are responsive, so you can set the order by breakpoint (e.g., `.order-1.order-md-2`). Includes support for 1 through 12 across all five grid tiers.

<a class="ms-btn ms-info" href="https://getbootstrap.com/docs/4.5/layout/grid/#reordering">See more</a>

## Nesting

To nest your content with the default grid, add a new .row and set of `.col-sm-*` columns within an existing `.col-sm-*` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

<a class="ms-btn ms-info" href="https://getbootstrap.com/docs/4.5/layout/grid/#nesting">See more</a>
