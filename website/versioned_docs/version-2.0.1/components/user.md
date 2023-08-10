---
id: user
title: User
description: The user component formats a user card, with an avatar, user informations, and content like a button.
keywords: [User, HTML, CSS, CSS Framework, minstyle.io]
---

The user component formats a user card, with an avatar, user informations, and content like a button. It is also possible to attach an element, possibly a link with an icon, to the top right of the card.

> For more informations about avatar, consult the dedicated [page](avatar.md).

> For more informations on the icons used, consult the dedicated [page](../contents/icons.md).

> For more informations about grid, consult the dedicated [page](../Layout/grid.md).

## Basic usage

The component has the parent class `.ms-user`. The user information must be contained in the class `.ms-user-info` and the content in the class `.ms-user-content`.

```html live
<div class="ms-user">
    <div class="ms-avatar ms-large">
        <img
            class="ms-avatar-img"
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="..."
        />
        <span class="ms-status ms-on"></span>
    </div>
    <div class="ms-user-info">
        <p>
            <b>John Doe</b><br />
            <i>Software Engineer</i><br />
            <a  class="ms-btn ms-small ms-outline ms-primary" ><i class="fab fa-github fa-lg"></i></a>
            <a  class="ms-btn ms-small ms-outline ms-primary"><i class="fab fa-twitter fa-lg"></i></a>
        </p>
    </div>
    <div class="ms-user-content">
        <button class="ms-btn ms-fullwidth">Message</button>
    </div>
    <div class="ms-user-pined">
        <a ><i class="fas fa-cog fa-lg"></i></a>
    </div>
</div>
```

## Fill

It is possible to add a background with the class .ms-fill.

```html live
<div class="ms-user ms-fill">
    <div class="ms-avatar ms-large">
        <img
            class="ms-avatar-img"
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="..."
        />
        <span class="ms-status ms-on"></span>
    </div>
    <div class="ms-user-info">
        <p>
            <b>John Doe</b><br />
            <i>Software Engineer</i><br />
            <a class="ms-btn ms-small ms-secondary" ><i class="fab fa-github fa-lg"></i></a>
            <a class="ms-btn ms-small ms-secondary"><i class="fab fa-twitter fa-lg"></i></a>
        </p>
    </div>
    <div class="ms-user-content">
        <button class="ms-btn ms-secondary ms-outline ms-fullwidth">Message</button>
    </div>
    <div class="ms-user-pined">
        <a ><i class="fas fa-cog fa-lg"></i></a>
    </div>
</div>
```

## Border

It is also possible to add a border with the .ms-border class.

```html live
<div class="ms-user ms-border">
    <div class="ms-avatar ms-large">
        <img
            class="ms-avatar-img"
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="..."
        />
        <span class="ms-status ms-on"></span>
    </div>
    <div class="ms-user-info">
        <p>
            <b>John Doe</b><br />
            <i>Software Engineer</i><br />
            <a  class="ms-btn ms-small ms-outline ms-primary" ><i class="fab fa-github fa-lg"></i></a>
            <a  class="ms-btn ms-small ms-outline ms-primary"><i class="fab fa-twitter fa-lg"></i></a>
        </p>
    </div>
    <div class="ms-user-content">
        <button class="ms-btn ms-fullwidth">Message</button>
    </div>
    <div class="ms-user-pined">
        <a ><i class="fas fa-cog fa-lg"></i></a>
    </div>
</div>
```

## Compact

The user component can also be compacted  with the `.ms-compact` class.

```html live
<div class="ms-user ms-compact">
    <div class="ms-avatar">
        <img
            class="ms-avatar-img"
            src="https://randomuser.me/api/portraits/men/91.jpg"
            alt="..."
        />
    </div>
    <div class="ms-user-info">
        <p>
            <b>John Doe</b><br />
            <i>Software Engineer</i>
        </p>
    </div>
    <div class="ms-user-content">
        <button class="ms-btn ms-action">
            Message
        </button>
    </div>
</div>
```