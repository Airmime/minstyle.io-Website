---
id: button-group
title: Button Group
description: The class `.ms-btn-group` allows to group a set of buttons.
keywords: [Button Group, HTML, CSS, CSS Framework, minstyle.io]
---

# Button Group

The `.ms-btn-group` class allows to group a set of buttons.

### Basic usage

```jsx live
<div>
  <div class="ms-btn-group">
    <a class="ms-btn ms-primary">One</a>
    <a class="ms-btn">Two</a>
    <a class="ms-btn">Two</a>
    <a class="ms-btn">Two</a>
    <a class="ms-btn">Three</a>
  </div>
</div>
```

### Custom button

In order to redefine the appearance of the Button Group, all properties defined on the Button is element are accessible inside the `.ms-btn-group` tag.

> For more informations on buttons, consult the dedicated [page](button.md).

```jsx live
<div>
  <div class="ms-btn-group">
    <a class="ms-btn ms-action">One</a>
    <a class="ms-btn">Two</a>
    <a class="ms-btn">Two</a>
    <a class="ms-btn">Two</a>
    <a class="ms-btn ms-disabled">Three</a>
  </div>
  <br />

  <div class="ms-btn-group">
    <a class="ms-btn ms-outline ms-primary">One</a>
    <a class="ms-btn ms-outline ms-primary">Two</a>
    <a class="ms-btn ms-outline ms-primary">Two</a>
    <a class="ms-btn ms-outline ms-primary">Two</a>
    <a class="ms-btn ms-outline ms-primary">Three</a>
  </div>
  <br />

  <div class="ms-btn-group">
    <a class="ms-btn ms-underline ms-secondary">One</a>
    <a class="ms-btn ms-underline">Two</a>
    <a class="ms-btn ms-underline">Two</a>
    <a class="ms-btn ms-underline">Two</a>
    <a class="ms-btn ms-underline">Three</a>
  </div>
</div>
```

---

## Full width

It is also possible to extend the button group over the whole with the classe `.ms-fullwith`.

```jsx live
<div>
  <div class="ms-btn-group ms-fullwidth">
    <a class="ms-btn">One</a>
    <a class="ms-btn">Two</a>
    <a class="ms-btn">Two</a>
    <a class="ms-btn">Two</a>
    <a class="ms-btn">Three</a>
  </div>
</div>
```
