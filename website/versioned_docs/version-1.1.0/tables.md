---
id: version-1.1.0-tables
title: Tables
original_id: tables
---

The table element allows to display set of datas, through rows, cells and headers.

## Basic usage

<div class="ms-browser">
    <div class="ms-tab-browser">
        <div class="ms_col ms_col--1-of-3">
            <div class="ms-dot red"></div>
            <div class="ms-dot yellow"></div>
            <div class="ms-dot green"></div>
        </div>
    </div>
    <div class="ms-content">
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
    </div>
</div>

```html
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
___

## Striped

The `.ms-striped` classe allow you to striped your table.

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

```html
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
___

## Bordered

The `.ms-bordered` classe allow you to bordered your table.

<table class="ms-table ms-bordered ms-striped">
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

```html
<table class="ms-table ms-striped ms-bordered">
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