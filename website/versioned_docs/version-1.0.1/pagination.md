---
id: version-1.0.1-pagination
title: Pagination
original_id: pagination
---

The pagination component allows you to display number of pages, and to navigate between them. 

<div class="ms-pagination">
    <ul>
        <li><a href="#/components/pagination?id=pagination">Prev</a></li>
        <li><span>...</span></li>
        <li><a href="#/components/pagination?id=pagination">11</a></li>
        <li><a href="#/components/pagination?id=pagination">12</a></li>
        <li><a class="ms-active" href="#/components/pagination?id=pagination">13</a></li>
        <li><a href="#/components/pagination?id=pagination">14</a></li>
        <li><a href="#/components/pagination?id=pagination">15</a></li>
        <li><span>...</span></li>
        <li><a href="#/components/pagination?id=pagination" class="ms-disabled">Next</a></li>
    </ul>
</div>

```html
<div class="ms-pagination">
    <ul>
        <li><a href="#">Prev</a></li>
        <li><a href="#">11</a></li>
        <li><a href="#">12</a></li>
        <li><a href="#" class="ms-active">13</a></li>
        <li><a href="#">14</a></li>
        <li><a href="#">15</a></li>
        <li><a href="#" class="ms-disabled">Next</a></li>
    </ul>
</div>
```

> For more informations on the icons used, consult the dedicated [page](icons.md).

<div class="ms-pagination">
    <ul>
        <li><a href="#/components/pagination?id=pagination"><i class="fas fa-backward"></i></a></li>
        <li><a href="#/components/pagination?id=pagination">11</a></li>
        <li><a href="#/components/pagination?id=pagination">12</a></li>
        <li><a class="ms-active" href="#/components/pagination?id=pagination">13</a></li>
        <li><a href="#/components/pagination?id=pagination">14</a></li>
        <li><a href="#/components/pagination?id=pagination">15</a></li>
        <li><a href="#/components/pagination?id=pagination"><i class="fas fa-forward"></i></a></li>
    </ul>
</div>

```html
<ul>
    <li><a href="#/components/pagination?id=pagination"><i class="fas fa-backward"></i></a></li>
    ...
</ul>    
```

## Border

It is possible to **add a border** with the `ms-border` classe.

<div class="ms-pagination ms-border">
    <ul>
        <li><a href="#/components/pagination?id=Border">Prev</a></li>
        <li><span>...</span></li>
        <li><a href="#/components/pagination?id=Border">11</a></li>
        <li><a href="#/components/pagination?id=Border">12</a></li>
        <li><a href="#/components/pagination?id=Border" class="ms-active">13</a></li>
        <li><a href="#/components/pagination?id=Border">14</a></li>
        <li><a href="#/components/pagination?id=Border">15</a></li>
        <li><span>...</span></li>
        <li><a href="#/components/pagination?id=Border">Next</a></li>
    </ul>
</div>

```html
<div class="ms-pagination ms-border">
    ...
</div>
```