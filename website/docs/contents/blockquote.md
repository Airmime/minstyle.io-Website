---
id: blockquote
title: Blockquote
description: Blockquote could be use with `blockquote` element or `.ms-blockquote` class.
keywords: [Blockquote, HTML, CSS, CSS Framework, minstyle.io]
---

Blockquote could be use with `blockquote` element or `.ms-blockquote` class.

> For more informations on the icons used, consult the dedicated [page](../contents/icons.md).

### Basic usage​​

```html live
<div>
    <blockquote>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
	</blockquote>

    <div class="ms-blockquote">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
	</div>
</div>
```

You can also **change the color** of the quote.

```html live
<div>
    <blockquote class="ms-primary">
		<p><i class="fa-solid fa-triangle-exclamation"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <i>Jhon Doe</i>
	</blockquote>

    <blockquote class="ms-secondary">
		<p><i class="fa-solid fa-triangle-exclamation"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <i>Jhon Doe</i>
	</blockquote>
    
    <blockquote class="ms-action">
		<p><i class="fa-solid fa-triangle-exclamation"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <i>Jhon Doe</i>
	</blockquote>

    <blockquote class="ms-action2">
		<p><i class="fa-solid fa-triangle-exclamation"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <i>Jhon Doe</i>
	</blockquote>
</div>
```

### Shadow

Finally, it is also possible to add a shadow with the helper class `.ms-box-shadow`.

```html live
<div>
	<blockquote class="ms-primary ms-box-shadow">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
		<i>Jhon Doe</i>
	</blockquote>
</div>
```

