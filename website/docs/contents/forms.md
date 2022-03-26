---
id: forms
title: Forms
description: Designing an effective form is not easy, to help you, the main elements like input, textarea, select, and checkbox have been designed to best adapt to your content.
keywords: [Forms, HTML, CSS, CSS Framework, minstyle.io]
---

Designing an effective form is not easy, to help you, the main elements like input, textarea, select, and checkbox have been designed to best adapt to your content.

### Basic usage​

**The input must necessarily be surrounded by the `.ms-form-group` tag.**

```html live
<div class="content_code">
	<form>
		<div class="row">
			<div class="col-sm">
				<div class="ms-form-group">
					<label for="Login">Login</label>
					<input type="text" placeholder="Login" id="Login"/>	
				</div>		
				<div class="ms-form-group">
					<label for="Mail">Mail</label>
					<input type="text" placeholder="Mail" id="Mail"/>	
				</div>
			</div>
			<div class="col-sm">
				<div class="ms-form-group">
					<label for="Password">Password</label>
					<input type="password" placeholder="Password" id="Password"/>
				</div>		
				<div class="ms-form-group">
					<label for="Password">Retype password</label>
					<input type="password" placeholder="Password" id="Password"/>
				</div>
			</div>
			<div><button class="ms-btn ms-primary ms-fullwidth">Register</button></div>
		</div>
	</form>
</div>
```

### Inputs

The inputs have the same design, whatever the type. Moreover, no class is necessary as they are nested in the `.ms-form-group` tag.

```html live
<div>
  <div class="ms-form-group">
    <label for="Email">Email</label>
    <input type="email" placeholder="email" id="Email" />
  </div>

  <div class="ms-form-group">
    <label for="Password">Password</label>
    <input type="password" placeholder="password" id="Password" />
  </div>
</div>
```

The inputs can also take a different color depending on the state of the inputs. It is also possible to add a message under the input with the classe `.ms-under-input`.

```html live
<div>
  <div class="ms-form-group">
    <label for="Email"><i class="far fa-envelope-open"></i> Email</label>
    <input type="email" class="ms-primary" id="Email" value="mail@minstyle.io"/>
    <span class="ms-under-input ms-text-primary">The email is valid.</span>
  </div>

  <div class="ms-form-group">
    <label for="Email"><i class="far fa-envelope-open"></i> Email</label>
    <input type="email" class="ms-secondary" id="Email" value="mail@minstyle.io"/>
    <span class="ms-under-input ms-text-secondary">The email is invalid.</span>
  </div>

  <div class="ms-form-group">
    <label for="Email"><i class="far fa-envelope-open"></i> Email</label>
    <input type="email" class="ms-action" id="Email" value="mail@minstyle.io"/>
    <span class="ms-under-input ms-text-action">Thanks...</span>
  </div>

  <div class="ms-form-group">
    <label for="Email"><i class="far fa-envelope-open"></i> Email</label>
    <input type="email" class="ms-action2" id="Email" value="mail@minstyle.io"/>
    <span class="ms-under-input ms-text-action2">Email already used.</span>
  </div>
</div>
```

If you don't want to use the whole width, you can use the `.ms-autowidth` class on inputs.

```html live
<div>
  <div class="ms-form-group">
    <label for="Email">Email</label>
    <input type="email" class="ms-autowidth" id="Email"/>
  </div>

  <div class="ms-form-group">
    <label for="Password">Password</label>
    <input type="password" class="ms-autowidth" id="Password" />
  </div>
</div>
```

### Select

The `select` also includes the traditional `input` formatting. It allows you to list a number of values and to select one of them.

```html live
<div class="ms-form-group">
	<label for="select">Select</label>
	<select id="select">
		<option value="0">Paris</option>
		<option value="1">New York</option>
		<option value="2">London</option>
		<option value="3">San fransico</option>
		<option value="4">L.A</option>
		<option value="5">Miami</option>
	</select>
</div>
```

### Textarea

The `textarea` also takes the form of traditional `inputs`. It allows you to enter a text that may include several lines.

```html live
<div class="ms-form-group">
	<label for="textarea">Message</label>
	<textarea id="textarea" placeholder="Textarea" rows="5"></textarea>
</div>
```

### Inline

You can display the element **on the same line** as the label with the class `.ms-form-group-inline` on the parent tag.

```html live
<div>
	<div class="ms-form-group-inline">
	<label for="Login">Login</label>
	<input type="text" placeholder="Login" id="Login" />
	</div>

	<div class="ms-form-group-inline">
	<label for="Password">Password</label>
	<input type="password" placeholder="Password" id="Password" />
	</div>

	<div class="ms-form-group-inline">
	<input type="checkbox" id="Checkbox" />
	<label for="Checkbox">Remember</label>
	</div>
</div>
```

---

### Sizes

Classes `.ms-small`, `.ms-medium` and `.ms-large` allow you to change the size of the input.

```html live
<div>
	<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="small..." id="Login" class="ms-small" />
	</div>

	<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="default..." id="Login" />
	</div>

	<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="medium..." id="Login" class="ms-medium" />
	</div>

	<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="large..." id="Login" class="ms-large" />
	</div>
</div>
```

---

### Rounded

The class `.ms-rounded` allows you to **round off the ends** of the inputs.

```html live
<div>
	<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="default..." id="Login" class="ms-rounded" />
	</div>

	<div class="ms-form-group">
	<label for="select">Select</label>
	<select id="select" class="ms-rounded">
		<option value="0">Paris</option>
		<option value="1">New York</option>
		<option value="2">London</option>
		<option value="3">San fransico</option>
		<option value="4">L.A</option>
		<option value="5">Miami</option>
	</select>
	</div>
</div>
```

### Disabled

You can disable an input with the `.ms-disabled` class and the `disabled` attribute.

```html live
<div class="ms-form-group">
  <label for="Text">Number</label>
  <input type="number" placeholder="disabled..." id="Text" disabled />
</div>
```

### Shadow

Finally, it is also possible to add a shadow on inputs with the helper class `.ms-box-shadow`.

```html live
<div class="ms-form-group">
	<label for="Mail">Mail</label>
	<input type="email" class="ms-box-shadow" placeholder="mail..." id="Mail" />
</div>
```