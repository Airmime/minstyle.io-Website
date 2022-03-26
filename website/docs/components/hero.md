---
id: Hero
Title: Hero
description: A hero is a large HTML container composed of several elements, often displayed at the beginning of the page in order to attract the user's attention.
keywords: [Hero, HTML, CSS, CSS Framework, minstyle.io]
---

A hero is a large HTML container composed of several elements, often displayed at the beginning of the page in order to attract the user's attention.

## Basic usage

A Hero can contain different elements like a title `.ms-hero-title`, a subtitle `.ms-hero-subtitle`, various content `.ms-hero-content` or a background `.ms-hero-background`.

```html live
<div class="ms-hero">
    <div class="ms-hero-body">
        <h1 class="ms-hero-title">Hero</h1>
		<div class="ms-hero-subtitle">
			<h3>This is hero.</h3>
		</div>
		<div class="ms-hero-content">
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fugiat
				nemo atque maiores at labore dolor expedita cupiditate aut. Numquam
				voluptatum repellat sequi accusantium enim eaque sunt quis natus
				illo.<br />
			</p>
			<div class="ms-btn">Documentation</div>
    	</div>
    </div>
</div>
```

## Colors

The background color can also be changed.

```html live
<div>
    <div class="ms-hero ms-primary">
        <div class="ms-hero-body">
            <h1 class="ms-hero-title">Hero</h1>
            <p class="ms-hero-subtitle">This is Hero.</p>
        </div>
    </div>
    
    <div class="ms-hero ms-secondary">
        <div class="ms-hero-body">
            <h1 class="ms-hero-title">Hero</h1>
            <p class="ms-hero-subtitle">This is Hero.</p>
        </div>
    </div>

    <div class="ms-hero ms-action">
        <div class="ms-hero-body">
            <h1 class="ms-hero-title">Hero</h1>
            <p class="ms-hero-subtitle">This is Hero.</p>
        </div>
    </div>

    <div class="ms-hero ms-action2">
        <div class="ms-hero-body">
            <h1 class="ms-hero-title">Hero</h1>
            <p class="ms-hero-subtitle">This is Hero.</p>
        </div>
    </div>
</div>
```

## Size

Several sizes are also available. The `.ms-half-screen` class allows to take half of the screen, and the `.ms-full-screen` class the whole screen.

```html live
<div>
    <div class="ms-hero ms-primary ms-small">
        <div class="ms-hero-body">
            <h1 class="ms-hero-title">.ms-small Hero</h1>
            <p class="ms-hero-subtitle">This is Hero.</p>
        </div>
    </div>
    
    <div class="ms-hero ms-secondary ms-medium">
        <div class="ms-hero-body">
            <h1 class="ms-hero-title">.ms-medium Hero</h1>
            <p class="ms-hero-subtitle">This is Hero.</p>
        </div>
    </div>

    <div class="ms-hero ms-action ms-large">
        <div class="ms-hero-body">
            <h1 class="ms-hero-title">.ms-large Hero</h1>
            <p class="ms-hero-subtitle">This is Hero.</p>
        </div>
    </div>

    <div class="ms-hero ms-action2 ms-half-screen">
        <div class="ms-hero-body">
            <h1 class="ms-hero-title">.ms-half-screen Hero</h1>
            <p class="ms-hero-subtitle">This is Hero.</p>
        </div>
    </div>

    <div class="ms-hero ms-primary ms-full-screen">
        <div class="ms-hero-body">
            <h1 class="ms-hero-title">.ms-full-screen Hero</h1>
            <p class="ms-hero-subtitle">This is Hero.</p>
        </div>
    </div>
</div>
```

## Body Position

The position of the content can be centered with the `.ms-center` class.

```html live
<div class="ms-hero">
    <div class="ms-hero-body ms-center">
        <h1 class="ms-hero-title">Hero</h1>
		<div class="ms-hero-subtitle">
			<h3>This is hero.</h3>
		</div>
		<div class="ms-hero-content">
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic fugiat
				nemo atque maiores at labore dolor expedita cupiditate aut. Numquam
				voluptatum repellat sequi accusantium enim eaque sunt quis natus
				illo.<br />
			</p>
			<div class="ms-btn">Documentation</div>
    	</div>
    </div>
</div>
```

## Background and Cover

Finally, it is possible to add a background image with the `.ms-hero-background` class, and also add a cover with the `.ms-hero-cover` class.

```html live
<div class="ms-hero ms-medium ms-action2">
    <div class="ms-hero-background">
        <img
            src="https://images.unsplash.com/photo-1640798629665-cb874ae363d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
            alt=""
        />
        <div class="ms-hero-cover"></div>
    </div>
    <div class="ms-hero-body ms-center">
        <h1 class="ms-hero-title">Hero</h1>
        <p class="ms-hero-subtitle">This is Hero.</p>
    </div>
</div>
```