# Forms

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

### Form input

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
___

### Form select

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

### Form textarea

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

### Form checkbox

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

### Inline forms

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