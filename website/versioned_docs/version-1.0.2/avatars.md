---
id: version-1.0.2-avatars
title: Avatars
original_id: avatars
---

The avatar component allows you to create a profile image, from a picture or text. Different sizes are available.

<div class="ms-avatar ms-small" style="display:inline-block;">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/60.jpg" alt="...">
</div>

<div class="ms-avatar" style="display:inline-block;">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/41.jpg" alt="...">
</div>

<div class="ms-avatar ms-medium" style="display:inline-block;">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/21.jpg" alt="...">
</div>

<div class="ms-avatar ms-large" style="display:inline-block;">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/54.jpg" alt="...">
</div>

```html
<div class="ms-avatar ms-small">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/60.jpg" alt="...">
</div>

<div class="ms-avatar">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/41.jpg" alt="...">
</div>

<div class="ms-avatar ms-medium">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/21.jpg" alt="...">
</div>

<div class="ms-avatar ms-large">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/54.jpg" alt="...">
</div>
```

It is also possible to add a link to the profile picture, with an `a` tag.

<div class="ms-avatar">
    <a href="#">
        <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/63.jpg" alt="...">
    </a>
</div>

```html
<div class="ms-avatar">
    <a href="#">
        <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/63.jpg" alt="...">
    </a>
</div>
```
___

## Text

For users who do not have a profile picture, it is possible to display the initials instead of the image. To do this, simply add these initials in a tag with the `ms-text` classe.

<div class="ms-avatar" style="display:inline-block;">
    <span class="ms-text">RM</span>
</div>

<div class="ms-avatar ms-medium" style="display:inline-block;">
    <span class="ms-text">RM</span>
</div>

```html
<div class="ms-avatar">
    <span class="ms-text">RM</span>
</div>

<div class="ms-avatar ms-medium">
    <span class="ms-text">RM</span>
</div>
```
___

## Status

The presence indicator is used to highlight the user's status. The `ms-status` classe allows you to add a small dot under the profile image, through different colors.

<div class="ms-avatar" style="display:inline-block;">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/89.jpg" alt="...">
    <span class="ms-status"></span>
</div>

<div class="ms-avatar" style="display:inline-block;">
    <span class="ms-text">AM</span>
    <span class="ms-status ms-success"></span>
</div>

<div class="ms-avatar" style="display:inline-block;">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/lego/0.jpg" alt="...">
    <span class="ms-status ms-error"></span>    
</div>

<div class="ms-avatar" style="display:inline-block;">
    <span class="ms-text">EM</span>
    <span class="ms-status ms-info"></span>
</div>

<div class="ms-avatar" style="display:inline-block;">
    <span class="ms-text">NI</span>
    <span class="ms-status ms-warning"></span>
</div>

```html
<div class="ms-avatar">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/89.jpg" alt="...">
    <span class="ms-status"></span>
</div>

<div class="ms-avatar">
    <span class="ms-text">AM</span>
    <span class="ms-status ms-success"></span>
</div>

<div class="ms-avatar">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/lego/0.jpg" alt="...">
    <span class="ms-status ms-error"></span>    
</div>

<div class="ms-avatar">
    <span class="ms-text">EM</span>
    <span class="ms-status ms-info"></span>
</div>

<div class="ms-avatar">
    <span class="ms-text">NI</span>
    <span class="ms-status ms-warning"></span>
</div>
```
___

## Shadow

Finally, to bring out the profile image, the `ms-shadow` classe allows you to add a shadow behind the avatar.

<div class="ms-avatar ms-shadow">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/3.jpg" alt="...">
    <span class="ms-status ms-success"></span>
</div>

```html
<div class="ms-avatar ms-shadow">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/3.jpg" alt="...">
    <span class="ms-status ms-success"></span>
</div>
```