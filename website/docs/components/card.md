---
id: card
title: Card
description: The card component allows you to build a content your text, from several elements such as an image, a title and content. The card is generally used with the responsive grid to adapt to the devices.
keywords: [Card, HTML, CSS, CSS Framework, minstyle.io]
---

The card component allows you to build a content your text, from several elements such as an image, a title and content. The card is generally used with the responsive grid to adapt to the devices.

> Take a look at the [grid](../Layout/grid.md) page to get all the necessary information.

## Basic usage

```html live
<div class="ms-card">
    <div class="ms-card-title">
        <h2>Yosemite national park</h2>
    </div>
    <div class="ms-card-content">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            itaque maxime soluta hic? Iure reiciendis facere qui beatae
            quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet,
            rerum et!
        </p>
    </div>
    <div class="ms-card-btn">
        <button class="ms-btn ms-primary ms-outline">Read</button>
    </div>
</div>         
```

## Fill

It is possible to add a background with the class `.ms-fill`.

```html live
<div class="ms-card ms-fill">
    <div class="ms-card-title">
        <h2>Yosemite national park</h2>
    </div>
    <div class="ms-card-content">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            itaque maxime soluta hic? Iure reiciendis facere qui beatae
            quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet,
            rerum et!
        </p>
    </div>
    <div class="ms-card-btn">
        <button class="ms-btn ms-primary">Read</button>
    </div>
</div>
```

## Border

It is also possible to add a border with the `.ms-border` class.

```html live
<div class="ms-card ms-border">
    <div class="ms-card-title">
        <h2>Yosemite national park</h2>
    </div>
    <div class="ms-card-content">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            itaque maxime soluta hic? Iure reiciendis facere qui beatae
            quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet,
            rerum et!
        </p>
    </div>
    <div class="ms-card-btn">
        <button class="ms-btn ms-secondary">Read</button>
    </div>
</div>
```

## Picture

The card can contain an image, using the `.ms-card-pic` class.

```html live
<div class="ms-card">
    <div class="ms-card-title">
        <h2>Yosemite national park</h2>
        <span>California</span>
    </div>
    <div class="ms-card-pic">
        <a href="#" target="_blank">
            <img
                src="https://www.zupimages.net/up/22/08/uitq.png"
                alt="..."
            />
        </a>
    </div>
    <div class="ms-card-content">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            itaque maxime soluta hic? Iure reiciendis facere qui beatae
            quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet,
            rerum et!
        </p>
    </div>
    <div class="ms-card-btn">
        <button class="ms-btn ms-primary ms-action ms-underline">Read</button>
    </div>
</div>
```

You can add content **stucked on the image** with the `.ms-card-pic-stick` classe, such as an icon or text.

```html live
<div class="ms-card">
    <div class="ms-card-title">
        <h2>Yosemite national park</h2>
        <span>California</span>
    </div>
    <div class="ms-card-pic">
        <a href="#" target="_blank">
            <img
                src="https://www.zupimages.net/up/22/08/uitq.png"
                alt="..."
            />
        </a>
        <div class="ms-card-pic-stick ms-text-white">
            <b>123</b> <i class="fas fa-comment"></i>
        </div>
    </div>
    <div class="ms-card-content">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            itaque maxime soluta hic? Iure reiciendis facere qui beatae
            quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet,
            rerum et!
        </p>
    </div>
    <div class="ms-card-btn">
        <button class="ms-btn ms-primary ms-action2">Read</button>
    </div>
</div>
```

## Horizontally

The card can also be displayed horizontally with the `.ms-inline` class.

```html live
<div class="ms-card ms-border ms-inline">
    <div class="row">
        <div class="ms-card-pic col-md-3">
            <a href="#" target="_blank">
                <img
                    src="https://www.zupimages.net/up/22/08/kl57.png"
                    alt="..."
                />
            </a>
        </div>
        <div class="col-md-7">
            <div class="ms-card-title">
                <h2>Yosemite national park</h2>
                <span>California</span>
            </div>
            <div class="ms-card-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                    itaque maxime soluta hic? Iure reiciendis facere qui beatae
                    quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet,
                    rerum et!
                </p>
            </div>
        </div>
        <div class="ms-card-btn col-md-2">
            <button class="ms-btn ms-fullwidth ms-outline ms-primary">Read</button>
        </div>
    </div>
</div>
```

## Section

In order to delimit spaces within the card, it is possible to add one or more sections with `.ms-section` and `.ms-section-bloc` classes.

```html live
<div class="ms-card ms-border">
    <div class="ms-card-title">
        <h2>Yosemite national park</h2>
        <span>Alaska</span>
    </div>
    <div class="ms-card-pic">
        <a href="#" target="_blank">
            <img
                src="https://www.zupimages.net/up/22/08/uitq.png"
                alt="..."
            />
        </a>
    </div>
    <div class="ms-card-content">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing...
        </p>
    </div>
    <div class="ms-section">
        <div class="ms-section-bloc">
            <p>
                <b>Section 1</b><br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
            </p>
        </div>
        <div class="ms-section-bloc">
            <p>
                <b>Section 2</b><br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
            </p>
        </div>
    </div>
    <div class="ms-card-btn">
        <button class="ms-btn ms-outline ms-secondary">Button</button>
    </div>
</div>
```