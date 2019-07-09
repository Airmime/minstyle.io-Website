## Icons

The development of icons specific to minstyle.io is currently underway. For the moment, we recommend and use [fontawesome.com](https://fontawesome.com).

## How to use

After registration, copy your kit's code into the `<head>` of each template or page in your project where you want to use Font Awesome. Not sure how to do that or need more guidance? We've got an example file to show you exactly where to reference your kit.

```html
<script src="https://kit.fontawesome.com/my-kit.js"></script>
```

## Exemples

Font Awesome is designed to be used with inline elements and we recommend sticking with a consistent HTML element to reference them by in your project. We like the `<i>` tag for brevity and for the fact that most folks are using `<em></em>` for emphasized/italicized semantic text these days. If that’s not your cup of tea, using a `<span>` is more semantically correct.

```html
<i class="fas fa-camera"></i> <!-- this icon's 1) style prefix == fas and 2) icon name == camera -->
<i class="fas fa-camera"></i> <!-- using an <i> element to reference the icon -->
<span class="fas fa-camera"></span> <!-- using a <span> element to reference the icon -->
```