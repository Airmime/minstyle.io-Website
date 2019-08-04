## Dropdown

The `.ms-dropdown` classe allows you to merge a [button](components/buttons.md) with an icon (down arrow) through the `.ms-btn classe`, and a list of links.

> For more informations on the icons used, consult the dedicated [page](content/icons.md).

<div class="ms-dropdown">
    <button class="ms-btn">Versions <i class="fas fa-sort-down"></i></button>
    <div class="ms-dropdown-content">
        <ul class="ms-dropdown-content-list">
            <li><a href="">V0.X</a></li>
            <li><a href="">V1.X</a></li>
            <li><a href="">V2.X</a></li>
        </ul>
    </div>
</div>

```html
<div class="ms-dropdown">
    <button class="ms-btn">Versions <i class="fas fa-sort-down"></i></button>
    <div class="ms-dropdown-content">
        <ul class="ms-dropdown-content-list">
            <li><a href="">V0.X</a></li>
            <li><a href="">V1.X</a></li>
            <li><a href="">V2.X</a></li>
        </ul>
    </div>
</div>
```

The dropdown is largely based on the `ms-btn` classe, so it is possible to use the styles applied to this class, this can be used to change the [button](components/buttons.md) colors.

<div class="ms-dropdown">
    <button class="ms-btn ms-success">Versions <i class="fas fa-sort-down"></i></button>
    <div class="ms-dropdown-content">
        <ul class="ms-dropdown-content-list">
            <li><a href="">V0.X</a></li>
            <li><a href="">V1.X</a></li>
            <li><a href="">V2.X</a></li>
        </ul>
    </div>
</div>

<div class="ms-dropdown">
    <button class="ms-btn ms-outline-danger">Versions <i class="fas fa-sort-down"></i></button>
    <div class="ms-dropdown-content">
        <ul class="ms-dropdown-content-list">
            <li><a href="">V0.X</a></li>
            <li><a href="">V1.X</a></li>
            <li><a href="">V2.X</a></li>
        </ul>
    </div>
</div>

```html
<div class="ms-dropdown">
    <button class="ms-btn ms-success">Versions <i class="fas fa-sort-down"></i></button>
    <div class="ms-dropdown-content">
        <ul class="ms-dropdown-content-list">
            <li><a href="">V0.X</a></li>
            <li><a href="">V1.X</a></li>
            <li><a href="">V2.X</a></li>
        </ul>
    </div>
</div>
<div class="ms-dropdown">
    <button class="ms-btn ms-outline-danger">Versions <i class="fas fa-sort-down"></i></button>
    <div class="ms-dropdown-content">
        <ul class="ms-dropdown-content-list">
            <li><a href="">V0.X</a></li>
            <li><a href="">V1.X</a></li>
            <li><a href="">V2.X</a></li>
        </ul>
    </div>
</div>
```

It is also possible to change the dropdown size, from the [button](components/buttons.md) classes.

<div class="ms-dropdown">
    <button class="ms-btn ms-info ms-large">Versions <i class="fas fa-sort-down"></i></button>
    <div class="ms-dropdown-content">
        <ul class="ms-dropdown-content-list">
            <li><a href="">V0.X</a></li>
            <li><a href="">V1.X</a></li>
            <li><a href="">V2.X</a></li>
        </ul>
    </div>
</div>

```html
<div class="ms-dropdown">
    <button class="ms-btn ms-info ms-large">Versions <i class="fas fa-sort-down"></i></button>
    <div class="ms-dropdown-content">
        <ul class="ms-dropdown-content-list">
            <li><a href="">V0.X</a></li>
            <li><a href="">V1.X</a></li>
            <li><a href="">V2.X</a></li>
        </ul>
    </div>
</div>
```