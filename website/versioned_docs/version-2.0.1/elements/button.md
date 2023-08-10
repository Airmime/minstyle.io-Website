---
id: button
title: Button
description: Buttons or links dedicated to actions, are customizable, by colors, sizes and shapes. 
keywords: [Button, HTML, CSS, CSS Framework, minstyle.io]
---

# Button

Buttons or links dedicated to actions, are customizable, by colors, sizes and shapes. The `.ms-btn` classe can be used on the `<button>` and also on the `<a>` or `<input>`.

> For more informations on the icons used, consult the dedicated [page](../contents/icons.md).

### Basic usage

```jsx live
<div>
  <input type="submit" value="Submit" />
  <a href="#" class="ms-btn">Link</a>
  <button class="ms-btn">Button</button>
</div>
```

To adapt your button to your content, **several colors** are available.

> Generate minstyle.io CSS with your custom colors.

```jsx live
<div>
  <button class="ms-btn">.ms-primary</button>
  <button class="ms-btn ms-primary"><i class="fa-solid fa-thumbs-up"></i> .ms-primary</button>
  <button class="ms-btn ms-secondary"><i class="fa-solid fa-building-circle-check"></i> .ms-secondary</button>
  <button class="ms-btn ms-action"><i class="fa-solid fa-calendar-check"></i> .ms-action</button>
  <button class="ms-btn ms-action2"><i class="fa-solid fa-file-circle-check"></i> .ms-action2</button>
</div>
```

### Sizes

The buttons come in **different sizes** with the classes `.ms-small`, `.ms-medium` and `.ms-large`.

```jsx live
<div>
  <button class="ms-btn ms-small">.ms-small</button>
  <button class="ms-btn">.ms-btn</button>
  <button class="ms-btn ms-medium">.ms-medium</button>
  <button class="ms-btn ms-large">.ms-large</button>
</div>
```

It is possible to extend the button to **100% of the width** with the classe `.ms-fullwith`.

```jsx live
<div>
  <button class="ms-btn ms-primary ms-fullwidth"><i class="fa-solid fa-maximize"></i> .ms-fullwidth</button>
</div>
```

### Outline

The class `.ms-outline` allows you to obtain a button **without background color**, but with a **border**.

```jsx live
<div>
  <button class="ms-btn ms-outline">.ms-outline</button>
  <button class="ms-btn ms-outline ms-primary">.ms-outline</button>
  <button class="ms-btn ms-outline ms-secondary">.ms-outline</button>
  <button class="ms-btn ms-outline ms-action">.ms-outline</button>
  <button class="ms-btn ms-outline ms-action2">.ms-outline</button>
</div>
```

### Underline

The class `.ms-underline` allows you to obtain a button **without background color**, but with a **bottom border**.

```jsx live
<div>
  <button class="ms-btn ms-underline">.ms-underline</button>
  <button class="ms-btn ms-underline ms-primary">.ms-underline</button>
  <button class="ms-btn ms-underline ms-secondary">.ms-underline</button>
  <button class="ms-btn ms-underline ms-action">.ms-underline</button>
  <button class="ms-btn ms-underline ms-action2">.ms-underline</button>
</div>
```

### Rounded

You can also change the appearance of the buttons, by **changing their angles** with the `.ms-rounded` classe.

```jsx live
<div>
  <button class="ms-btn ms-rounded"><i class="fa-solid fa-burger"></i> .ms-rounded</button>
  <button class="ms-btn ms-outline ms-rounded"><i class="fa-solid fa-burger"></i> .ms-rounded</button>
</div>
```

### Loading button

You can also **add a loader** to the button with the loading components.

```jsx live
<button class="ms-btn ms-primary">
	<div class="ms-loading ms-small ms-primary"></div> Loading
</button>
```

### Disabled

If you want to **disable a button** with the `disabled` attribute, it will have its opacity reduced by half. You can also use the `.ms-disabled` class on `<a>` to disable a link.

```jsx live
<div>
  <button class="ms-btn" disabled>
    Button
  </button>
  <button class="ms-btn ms-disabled">Button</button>
</div>
```

### Shadow

Finally, it is also possible to add a shadow with the helper class `.ms-box-shadow`.

```html live
<div>
  <button class="ms-btn ms-primary ms-rounded ms-box-shadow">.ms-rounded</button>
</div>
```