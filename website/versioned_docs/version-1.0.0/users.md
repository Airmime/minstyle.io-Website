---
id: version-1.0.0-users
title: Users
original_id: users
---

The user component formats a user card, with an avatar, user informations, and content like a button. It is also possible to attach an element, possibly a link with an icon, to the top right of the card.

> For more informations about avatar, consult the dedicated [page](avatars.md).

> For more informations on the icons used, consult the dedicated [page](icons.md).

<div class="ms_col ms_col--2-of-5">
    <div class="ms-user">
        <div class="ms-avatar ms-large">
            <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/65.jpg" alt="...">
            <span class="ms-status ms-success"></span>
        </div>
        <div class="ms-user-info">
            <p style="margin:0; line-height:1.3;">
                <b>John Doe</b><br/>
                <i>Software Engineer</i><br/>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </p>
        </div>
        <div class="ms-user-content">
            <button class="ms-btn ms-fullwidth">Message</button>
        </div>
        <div class="ms-user-pined">
            <a href="#"><i class="fas fa-cog"></i></a>
        </div>
    </div>
</div>

```html
<div class="ms_col ms_col--2-of-5">
    <div class="ms-user">
        <div class="ms-avatar ms-large">
            <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/65.jpg" alt="...">
            <span class="ms-status ms-success"></span>
        </div>
        <div class="ms-user-info">
            <p>
                <b>John Doe</b><br/>
                <i>Software Engineer</i><br/>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </p>
        </div>
        <div class="ms-user-content">
            <button class="ms-btn ms-fullwidth">Message</button>
        </div>
        <div class="ms-user-pined">
            <a href="#"><i class="fas fa-cog"></i></a>
        </div>
    </div>
</div>
```
___

## Compact

A more compact display is also possible with the `ms-compact` classe.

<div class="ms_col ms_col--2-of-5">
    <div class="ms-user ms-compact">
        <div class="ms-avatar">
            <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/91.jpg" alt="...">
            <span class="ms-status ms-error"></span>
        </div>
        <div class="ms-user-info">
            <p style="margin:0; line-height:1.3;">
                <b>John Doe</b><br/>
                <i>Software Engineer</i>
            </p>
        </div>
        <div class="ms-user-content">
            <button class="ms-btn ms-info ms-fullwidth"><i class="fas fa-user-plus"></i> Add</button>
        </div>
        <div class="ms-user-pined">
            <i class="fas fa-ellipsis-v"></i>
        </div>
    </div>
</div>

```html
<div class="ms_col ms_col--2-of-5">
    <div class="ms-user ms-compact">
        <div class="ms-avatar">
            <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/men/91.jpg" alt="...">
            <span class="ms-status ms-error"></span>
        </div>
        <div class="ms-user-info">
            <p>
                <b>John Doe</b><br/>
                <i>Software Engineer</i>
            </p>
        </div>
        <div class="ms-user-content">
            <button class="ms-btn ms-info ms-fullwidth"><i class="fas fa-user-plus"></i> Add</button>
        </div>
        <div class="ms-user-pined">
            <i class="fas fa-ellipsis-v"></i>
        </div>
    </div>
</div>
```
___

## Borderless

It is also possible to remove the border on user cards by adding the `ms-borderless` classe.

<div class="ms_col ms_col--2-of-5">
    <div class="ms-user ms-compact ms-borderless">
        <div class="ms-avatar">
            <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/68.jpg" alt="...">
            <span class="ms-status ms-warning"></span>
        </div>
        <div class="ms-user-info">
            <p style="margin:0; line-height:1.3;">
                <b>John Doe</b><br/>
                <i>Software Engineer</i><br/>
            </p>
        </div>
        <div class="ms-user-content">
            <button class="ms-btn ms-warning"><i class="fas fa-phone"></i> Call</button><br/><br/>
            <span class="ms-text-gray ms-text-justify"><cite>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</cite></span>
        </div>
        <div class="ms-user-pined">
            <i class="fas fa-trash-alt"></i>
        </div>
    </div>
</div>

```html
<div class="ms_col ms_col--2-of-5">
    <div class="ms-user ms-compact ms-borderless">
        <div class="ms-avatar">
            <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/68.jpg" alt="...">
            <span class="ms-status ms-warning"></span>
        </div>
        <div class="ms-user-info">
            <p>
                <b>John Doe</b><br/>
                <i>Software Engineer</i><br/>
            </p>
        </div>
        <div class="ms-user-content">
            <button class="ms-btn ms-warning"><i class="fas fa-phone"></i> Call</button><br/><br/>
            <span class="ms-text-gray ms-text-justify"><cite>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</cite></span>
        </div>
        <div class="ms-user-pined">
            <i class="fas fa-trash-alt"></i>
        </div>
    </div>
</div>
```