## Alerts

Alerts `.ms-alert` allow you to **display a contextual message** about your users' actions. They are available in several **shapes**, **colours** and **sizes**.

<div class="ms-alert">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

```html
<div class="ms-alert">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>
```

As with all components, **different colours** are available. 

<div class="ms-alert ms-info">
    <b>.ms-info :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-success">
    <b>.ms-success :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-danger">
    <b>.ms-danger :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-warning">
    <b>.ms-warning :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

```html
<div class="ms-alert ms-info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-success">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-danger">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-warning">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>
```

> You can integrate icons in your alerts, for more informations, consult the icons [page](content/icons.md).

<div class="ms-alert ms-danger">
    <i class="fas fa-exclamation-triangle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

___

## Sizes

In order to adapt the alerts to your content, it is possible to display them in different sizes  with classes `ms-medium` and `ms-large`.

<div class="ms-alert">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-medium">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-large">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

___

## Light alerts

Alerts can also have a more **discreet background**, using the `ms-outline-**` tag.

<div class="ms-alert ms-outline-info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-outline-danger">
    <span class="ms-close"></span>
    <i class="fas fa-exclamation-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-outline-success">
    <span class="ms-close"></span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-outline-warning">
    <i class="fas fa-exclamation-triangle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

```html
<div class="ms-alert ms-outline-info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-outline-danger">
    <span class="ms-close"></span>
    <i class="fas fa-exclamation-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-outline-success">
    <span class="ms-close"></span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>

<div class="ms-alert ms-outline-warning">
    <i class="fas fa-exclamation-triangle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit...
</div>
```

___

## Content

The `.ms-content` classe allows you to write alerts containing a header composed of a title and text, as well as content placed under the header.

<div class="ms-alert ms-content ms-outline-danger">
    <span class="ms-close"></span>
    <h3>Title</h3>
    <p>
        <i>Lorem ipsum dolor sit amet consectetur adipisicing elit...</i>
    </p>
    <hr style="border: none;">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit pariatur assumenda obcaecati voluptates dolor nobis, quasi eveniet hic alias ipsam facere illo dicta sequi. Voluptatibus sunt animi numquam magni eaque?
    </p>
</div>

<div class="ms-alert ms-content ms-success">
    <h3>Title</h3>
    <p>
        <i>Lorem ipsum dolor sit amet consectetur adipisicing elit...</i>
    </p>
    <hr style="border: none;">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit pariatur assumenda obcaecati voluptates dolor nobis, quasi eveniet hic alias ipsam facere illo dicta sequi. Voluptatibus sunt animi numquam magni eaque?
    </p>
</div>

```html
<div class="ms-alert ms-content ms-outline-danger">
    <span class="ms-close"></span>
    <h3>Title</h3>
    <p>
        <i>Lorem ipsum dolor sit amet consectetur adipisicing elit...</i>
    </p>
    <hr style="border: none;">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit pariatur assumenda obcaecati voluptates dolor nobis, quasi eveniet hic alias ipsam facere illo dicta sequi. Voluptatibus sunt animi numquam magni eaque?
    </p>
</div>

<div class="ms-alert ms-content ms-success">
    <h3>Title</h3>
    <p>
        <i>Lorem ipsum dolor sit amet consectetur adipisicing elit...</i>
    </p>
    <hr style="border: none;">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit pariatur assumenda obcaecati voluptates dolor nobis, quasi eveniet hic alias ipsam facere illo dicta sequi. Voluptatibus sunt animi numquam magni eaque?
    </p>
</div>
```