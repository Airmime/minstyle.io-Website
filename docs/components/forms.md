## Forms

Designing an effective form is not easy, to help you, the main elements like **input**, **textarea**, **select**, and **checkbox** have been designed to best adapt to your content.

The input must necessarily be surrounded by the `.ms-form-group` tag. 

<div class="ms-form-group">
    <label for="Login">Login</label>
	<input type="text" placeholder="Login" id="Login">	
</div>
		
<div class="ms-form-group">
    <label for="Password">Password</label>
	<input type="password" placeholder="Password" id="Password">
</div>

<div class="ms-form-group-inline">
    <input type="checkbox" id="Checkbox">
    <label for="Checkbox">Remember</label>
</div>

<div><button class="ms-btn ms-success">Login</button></div>

```html
<div class="ms-form-group">
    <label for="Login">Login</label>
	<input type="text" placeholder="Login" id="Login">	
</div>
		
<div class="ms-form-group">
    <label for="Password">Password</label>
	<input type="password" placeholder="Password" id="Password">
</div>

<div class="ms-form-group-inline">
    <input type="checkbox" id="Checkbox">
    <label for="Checkbox">Remember</label>
</div>

<button class="ms-btn ms-success">Login</button>
```
___

## Input

<div class="ms-form-group">
    <label for="Email">Email</label>
	<input type="email" placeholder="email" id="Email">	
</div>

```html
<div class="ms-form-group">
    <label for="Email">Email</label>
	<input type="email" placeholder="email" id="Email">	
</div>
```

The inputs can also take a different color depending on the state of the inputs. It is also possible to add a message under the input with the classe `.ms-under-input`.

<div class="ms-form-group">
	<label for="Email"><i class="far fa-envelope-open"></i> Email</label>
	<input type="email" class="ms-success" id="Email" value="mail@minstyle.io">
	<span class="ms-under-input ms-text-success">The email is valid.</span>
</div>

<div class="ms-form-group">
	<label for="Email"><i class="far fa-envelope-open"></i> Email</label>
	<input type="email" class="ms-danger" id="Email" value="mail@minstyle.io">
	<span class="ms-under-input ms-text-danger">The email is invalid.</span>
</div>

<div class="ms-form-group">
	<label for="Email"><i class="far fa-envelope-open"></i> Email</label>
	<input type="email" class="ms-info" id="Email" value="mail@minstyle.io">
	<span class="ms-under-input ms-text-info">Thanks...</span>
</div>

<div class="ms-form-group">
	<label for="Email"><i class="far fa-envelope-open"></i> Email</label>
	<input type="email" class="ms-warning" id="Email" value="mail@minstyle.io">
	<span class="ms-under-input ms-text-warning">Email already used.</span>
</div>

```html
<div class="ms-form-group">
	<label for="Email"><i class="far fa-envelope-open"></i> Email</label>
	<input type="email" class="ms-success" id="Email" value="mail@minstyle.io">
	<span class="ms-under-input ms-text-success">The email is valid.</span>
</div>

<div class="ms-form-group">
	<label for="Email"><i class="far fa-envelope-open"></i> Email</label>
	<input type="email" class="ms-danger" id="Email" value="mail@minstyle.io">
	<span class="ms-under-input ms-text-danger">The email is invalid.</span>
</div>

<div class="ms-form-group">
	<label for="Email"><i class="far fa-envelope-open"></i> Email</label>
	<input type="email" class="ms-info" id="Email" value="mail@minstyle.io">
	<span class="ms-under-input ms-text-info">Thanks...</span>
</div>

<div class="ms-form-group">
	<label for="Email"><i class="far fa-envelope-open"></i> Email</label>
	<input type="email" class="ms-warning" id="Email" value="mail@minstyle.io">
	<span class="ms-under-input ms-text-warning">Email already used.</span>
</div>
```
___

## Select

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

```html
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
___

## Textarea

<div class="ms-form-group">
  <label for="textarea">Message</label>
  <textarea id="textarea" placeholder="Textarea" rows="5"></textarea>
</div>

```html
<div class="ms-form-group">
  <label for="textarea">Message</label>
  <textarea id="textarea" placeholder="Textarea" rows="5"></textarea>
</div>
```
___

## Checkbox

>Note that it is also possible to display an element on the same line as the label (see below).

<div class="ms-form-group">
    <label for="Checkbox">Remember</label>
    <input type="checkbox" id="Checkbox">
</div>

```html
<div class="ms-form-group">
    <label for="Checkbox">Remember</label>
    <input type="checkbox" id="Checkbox">
</div>
```
___

## Inline

You can display the element **on the same line** as the label with the class.ms-form-group-inline on the parent tag.

<div class="ms-form-group-inline">
    <label for="Login">Login</label>
	<input type="text" placeholder="Login" id="Login">	
</div>
		
<div class="ms-form-group-inline">
    <label for="Password">Password</label>
	<input type="password" placeholder="Password" id="Password">
</div>

<div class="ms-form-group-inline">
    <input type="checkbox" id="Checkbox">
    <label for="Checkbox">Remember</label>
</div>

<button class="ms-btn ms-info">Login</button>

```html
<div class="ms-form-group-inline">
    <label for="Login">Login</label>
	<input type="text" placeholder="Login" id="Login">	
</div>
		
<div class="ms-form-group-inline">
    <label for="Password">Password</label>
	<input type="password" placeholder="Password" id="Password">
</div>

<div class="ms-form-group-inline">
    <input type="checkbox" id="Checkbox">
    <label for="Checkbox">Remember</label>
</div>

<button class="ms-btn ms-info">Login</button>
```
___

## Sizes

Classes `.ms-small`, `.ms-medium` and `.ms-large` allow you to change the size of the input.

<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="small..." id="Login" class="ms-small">	
</div>

<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="default..." id="Login">	
</div>

<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="medium..." id="Login" class="ms-medium">	
</div>

<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="large..." id="Login" class="ms-large">	
</div>

```html
<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="small..." id="Login" class="ms-small">	
</div>

<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="default..." id="Login">	
</div>

<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="medium..." id="Login" class="ms-medium">	
</div>

<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="large..." id="Login" class="ms-large">	
</div>
```
___

## Rounded

To adapt the input to your content, you can use `.ms-rounded` class to **modify the angles**.

<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="default..." id="Login" class="ms-rounded">	
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

```html
<div class="ms-form-group">
	<label for="Login">Login</label>
	<input type="text" placeholder="default..." id="Login" class="ms-rounded">	
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
```

## Disabled

<div class="ms-form-group">
	<label for="Text">Number</label>
    <input type="number" placeholder="disabled..." id="Text" disabled>	
</div>

```html
<div class="ms-form-group">
	<label for="Text">Number</label>
    <input type="number" placeholder="disabled..." id="Text" disabled>	
</div>
```