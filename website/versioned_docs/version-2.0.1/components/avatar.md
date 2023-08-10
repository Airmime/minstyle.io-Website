---
id: avatar
title: Avatar
description: The avatar component allows you to create a profile image, from a picture or text. It must be created from the `.ms-avatar` class.
keywords: [Avatar, User, HTML, CSS, CSS Framework, minstyle.io]
---

The avatar component allows you to create a profile image, from a picture or text. It must be created from the `.ms-avatar` class.

## Basic usage

```html live
<div class="ms-avatar">
    <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/41.jpg" alt="..."/>
</div>
```

It is possible to change the size of the avatars with the class `.ms-small`, `.ms-medium` and `.ms-large`.

```html live
<div>
    <div class="ms-avatar ms-small">
        <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/60.jpg" alt="..."/>
    </div>

    <div class="ms-avatar">
        <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/41.jpg" alt="..."/>
    </div>

    <div class="ms-avatar ms-medium">
        <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/21.jpg" alt="..."/>
    </div>

    <div class="ms-avatar ms-large">
        <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/54.jpg" alt="..."/>
    </div>
</div>
```

## Link

It is also possible to add a link to the profile picture, with an `a` tag.

```html live
<div class="ms-avatar">
    <a href="#">
        <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/63.jpg" alt="..."/>
    </a>
</div>
```

## Text

For users who do not have a profile picture, it is possible to display the initials instead of the image. To do this, simply add these initials in a tag with the `.ms-text` class.

```html live
<div>
    <div class="ms-avatar">
        <span class="ms-text">RM</span>
    </div>

    <div class="ms-avatar ms-medium">
        <span class="ms-text">RM</span>
    </div>
</div>
```
___

## Status

The presence indicator is used to highlight the user's status. The `.ms-status` class allows you to add a small dot under the profile image, through different colors. Three types of status are available, `.ms-on`, `.ms-off` and `.ms-out`.

```html live
<div>
    <div class="ms-avatar">
        <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/89.jpg" alt="..."/>
        <span class="ms-status"></span>
    </div>

    <div class="ms-avatar">
        <span class="ms-text">AM</span>
        <span class="ms-status ms-on"></span>
    </div>

    <div class="ms-avatar">
        <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/lego/0.jpg" alt="..."/>
        <span class="ms-status ms-off"></span>    
    </div>

    <div class="ms-avatar">
        <span class="ms-text">EM</span>
        <span class="ms-status ms-out"></span>
    </div>
</div>
```

## Shadow

Finally, it is also possible to add a shadow with the helper class `.ms-box-shadow`.

```html live
<div>
    <div class="ms-avatar ms-box-shadow">
        <span class="ms-text">AM</span>
        <span class="ms-status ms-on"></span>
    </div>
</div>
```