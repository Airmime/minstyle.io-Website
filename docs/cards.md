---
id: cards
title: Cards
---

The card component allows you to build a content container, from several elements such as an image, a title and text. The card is generally used with the responsive grid to adapt to the devices.

> Take a look at the [grid](grid.md) page to get all the necessary information.

<div class="container">
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card">
            <div class="ms-card-pic">
                <a href="#" target="_blank">
                    <img src="https://images.unsplash.com/photo-1460046205962-bd8fa3a96a35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="...">
                </a>
            </div>
            <div class="ms-card-title">
                <h2>Yosemite national park</h2>
                <span>California</span>
            </div>
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline">Read</button>
            </div>
        </div>
    </div>
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card">
            <div class="ms-card-title">
                <h2>Zion national park</h2>
                <span>Utah</span>
            </div>
            <div class="ms-card-pic">
                <a href="#" target="_blank">
                    <img src="https://images.unsplash.com/photo-1533953263536-c12fa38d0bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="...">
                </a>
            </div>
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline">Read</button>
            </div>
        </div>
    </div>
</div>

```html
<div class="container">
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card">
            <div class="ms-card-pic">
                <a href="#" target="_blank">
                    <img src="https://images.unsplash.com/photo-1460046205962-bd8fa3a96a35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="...">
                </a>
            </div>
            <div class="ms-card-title">
                <h2>Yosemite national park</h2>
                <span>California</span>
            </div>
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline">Read</button>
            </div>
        </div>
    </div>
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card">
            <div class="ms-card-title">
                <h2>Zion national park</h2>
                <span>Utah</span>
            </div>
            <div class="ms-card-pic">
                <a href="#" target="_blank">
                    <img src="https://images.unsplash.com/photo-1533953263536-c12fa38d0bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="...">
                </a>
            </div>
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline">Read</button>
            </div>
        </div>
    </div>
</div>
```

## Stuck on picture

You can add content stucked on the image with the `ms-card-pic-stick` classe, such as an icon or text.

> For more informations on the icons used, consult the dedicated [page](icons.md).

<div class="container">
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card">
            <div class="ms-card-title">
                <h2>Mont-blanc</h2>
                <span>France</span>
            </div>
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
            <div class="ms-card-pic">
                <a href="#" target="_blank">
                    <img src="https://images.unsplash.com/photo-1526915202413-5ddfb855b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="...">
                </a>
                <div class="ms-card-pic-stick ms-text-white"><b>123</b> <i class="fas fa-comment"></i></div>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline">Read</button>
            </div>
        </div>
    </div>
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card">
            <div class="ms-card-pic">
                <a href="#" target="_blank">
                    <img src="https://images.unsplash.com/photo-1524849954958-f4e5fa0d4c11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="...">
                </a>
                <div class="ms-card-pic-stick">
                    <span class="ms-text-gray"><b>15th Jan, 2019</b></span>
                </div>
            </div>
            <div class="ms-card-title">
                <h2>Aiguille du Midi</h2>
                <span>Chamonix, France</span>
            </div>
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline">Read</button>
            </div>
        </div>
    </div>
</div>

```html
<div class="container">
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card">
            <div class="ms-card-title">
                <h2>Mont-blanc</h2>
                <span>France</span>
            </div>
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
            <div class="ms-card-pic">
                <a href="#" target="_blank">
                    <img src="https://images.unsplash.com/photo-1526915202413-5ddfb855b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="...">
                </a>
                <div class="ms-card-pic-stick ms-text-white"><b>123</b> <i class="fas fa-comment"></i></div>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline">Read</button>
            </div>
        </div>
    </div>
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card">
            <div class="ms-card-pic">
                <a href="#" target="_blank">
                    <img src="https://images.unsplash.com/photo-1524849954958-f4e5fa0d4c11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="...">
                </a>
                <div class="ms-card-pic-stick">
                    <span class="ms-text-gray"><b>15th Jan, 2019</b></span>
                </div>
            </div>
            <div class="ms-card-title">
                <h2>Aiguille du Midi</h2>
                <span>Chamonix, France</span>
            </div>
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline">Read</button>
            </div>
        </div>
    </div>
</div>
```

## Border

It is also possible to add a border to the card with the `ms-border` classe.

<div class="container">
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card ms-border">
            <div class="ms-card-title">
                <h2>Cervin</h2>
                <span>France</span>
            </div>
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline-warning">Button</button>
            </div>
        </div>
    </div>
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card ms-border">
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet <mark>consectetur adipisicing elit</mark>. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
        </div>
    </div>
</div>

```html
<div class="container">
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card ms-border">
            <div class="ms-card-title">
                <h2>Cervin</h2>
                <span>France</span>
            </div>
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline-warning">Button</button>
            </div>
        </div>
    </div>
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card ms-border">
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet <mark>consectetur adipisicing elit</mark>. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
        </div>
    </div>
</div>
```

## Section

In order to delimit spaces within the card, it is possible to add one or more sections with `ms-section` and `ms-section-bloc` classes.

<div class="container">
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card">
            <div class="ms-card-title">
                <a href="#">Denali National Park</a>
                <span>Alaska</span>
            </div>
            <div class="ms-card-pic">
                <a href="#" target="_blank">
                    <img src="https://images.unsplash.com/photo-1515369902974-1ee693ba6ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="...">
                </a>
            </div>
            <div class="ms-card-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                </p>
            </div>
            <div class="ms-section">
                <div class="ms-section-bloc">
                    <p style="margin: 0;">
                        <b>Section 1</b><br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
                <div class="ms-section-bloc">
                    <p style="margin: 0;">
                        <b>Section 2</b><br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline-success">Button</button>
            </div>
        </div>
    </div>
    <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
        <div class="ms-card ms-border">
            <div class="ms-card-title">
                <h2>Everglades national park</h2>
                <span>Floride</span>
            </div>
            <div class="ms-section">
                <div class="ms-section-bloc">
                    <p style="margin: 0;">
                        <b>Section 1</b><br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
                <div class="ms-section-bloc">
                    <p style="margin: 0;">
                        <b>Section 2</b><br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
            </div>
            <div class="ms-card-btn">
                <button class="ms-btn ms-outline-info">Button</button>
            </div>
        </div>
    </div>
</div>

```html
<div class="container">
        <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
            <div class="ms-card">
                <div class="ms-card-title">
                    <a href="#">Denali National Park</a>
                    <span>Alaska</span>
                </div>
                <div class="ms-card-pic">
                    <a href="#" target="_blank">
                        <img src="https://images.unsplash.com/photo-1515369902974-1ee693ba6ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="...">
                    </a>
                </div>
                <div class="ms-card-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque maxime soluta hic? Iure reiciendis facere qui beatae quasi repellendus, nemo incidunt quod! Quae sed odit illo. Amet, rerum et!
                    </p>
                </div>
                <div class="ms-section">
                    <div class="ms-section-bloc">
                        <p>
                            <b>Section 1</b><br/>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                        </p>
                    </div>
                    <div class="ms-section-bloc">
                        <p>
                            <b>Section 2</b><br/>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                        </p>
                    </div>
                </div>
                <div class="ms-card-btn">
                    <button class="ms-btn ms-outline-success">Button</button>
                </div>
            </div>
        </div>
        <div class="ms_col--3-of-6 ms_col--m-4-of-4 ms_col">
            <div class="ms-card ms-border">
                <div class="ms-card-title">
                    <h2>Everglades national park</h2>
                    <span>Floride</span>
                </div>
                <div class="ms-section">
                    <div class="ms-section-bloc">
                        <p>
                            <b>Section 1</b><br/>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                        </p>
                    </div>
                    <div class="ms-section-bloc">
                        <p>
                            <b>Section 2</b><br/>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                        </p>
                    </div>
                </div>
                <div class="ms-card-btn">
                    <button class="ms-btn ms-outline-info">Button</button>
                </div>
            </div>
        </div>
    </div>
```