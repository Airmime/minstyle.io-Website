---
id: table
title: Table
description: The table element allows to display set of datas, through rows, cells and headers. The `.ms-table` class is used to format the table.
keywords: [Table, HTML, CSS, CSS Framework, minstyle.io]
---

The table element allows to display set of datas, through rows, cells and headers. The `.ms-table` class is used to format the table.

### Basic usage​


```html live
<table class="ms-table">
    <thead>
        <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Point(s)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>FC Barcelona</td>
            <td>98</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Real Madrid</td>
            <td>87</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Atletico Madrid</td>
            <td>80</td>
        </tr>
    </tbody>
</table>
```

### Striped

For ease of reading, the `.ms-striped` classe allow you to striped the rows on your table.

```html live
<table class="ms-table ms-striped">
    <thead>
        <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Point(s)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>FC Barcelona</td>
            <td>98</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Real Madrid</td>
            <td>87</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Atletico Madrid</td>
            <td>80</td>
        </tr>
    </tbody>
</table>
```

### Border

The `.ms-border` classe allow you to bordered your table.

```html live
<table class="ms-table ms-striped ms-border">
    <thead>
        <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Point(s)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>FC Barcelona</td>
            <td>98</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Real Madrid</td>
            <td>87</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Atletico Madrid</td>
            <td>80</td>
        </tr>
    </tbody>
</table>
```