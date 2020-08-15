---
id: version-1.1.0-articles
title: Articles
original_id: articles
---

The article component allows you to design a news page, with several possible layouts and parameters.

## Basic usage

> For more informations about user element, consult the dedicated [page](users.md).

<div class="ms-browser">
    <div class="ms-tab-browser">
        <div class="ms_col ms_col--1-of-3">
            <div class="ms-dot red"></div>
            <div class="ms-dot yellow"></div>
            <div class="ms-dot green"></div>
        </div>
    </div>
    <div class="ms-content">
        <div class="ms_col ms_col--5-of-5">
            <div class="ms-article">
                <div class="ms-article-picture">
                    <img src="https://images.unsplash.com/photo-1578165219176-ece04edbd053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="background">
                    <div class="ms-article-picture-overlay"></div>
                    <div class="ms-article-picture-title">
                        <a href="">Lorem ipsum dolor sit amet adipisicing elit.</a>
                    </div>
                </div>
                <div class="ms-article-infos">
                    <ul>
                        <li><i class="fas fa-user-circle"></i> Author <b>John Doe</b></li>
                        <li><i class="fas fa-folder"></i> Category <b>IT</b></li>
                        <li><i class="fas fa-clock"></i> Time <b>42 minutes later</b></li>
                    </ul>
                </div>
                <div class="ms-article-title">
                    <a href="">Article's title</a>
                </div>
                <div class="ms-article-text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nulla libero sint repudiandae amet sed in magnam nam aliquid inventore natus non labore ipsam, quam enim dolorum! Labore, dolorum ratione
                        Lorem ipsum dolor sit <b>amet consectetur</b> adipisicing elit. Explicabo, 
                        hic velit sed ea quod sunt quam dicta beatae quia optio deserunt ex quae repellendus eaque cum, sapiente veniam mollitia ipsa.
                        <blockquote class="ms-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        </blockquote>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, 
                        hic velit sed ea quod sunt <a href="">quam dicta beatae</a> quia optio deserunt ex quae repellendus eaque cum, sapiente veniam mollitia ipsa.
                        <h3>Second title</h3>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nulla libero sint repudiandae amet sed in magnam nam aliquid inventore natus non labore ipsam, quam enim dolorum! Labore, dolorum ratione!
                    </p>
                </div>
                <div class="ms-user ms-compact ms-borderless">
                    <div class="ms-avatar">
                        <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/68.jpg" alt="...">
                    </div>
                    <div class="ms-user-info">
                        <p>
                            <b>John Doe</b><br/>
                            <i>Software Engineer</i><br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

``` html
<div class="ms-article">
    <div class="ms-article-picture">
        <img src="https://images.unsplash.com/photo-1578165219176-ece04edbd053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="background">
        <div class="ms-article-picture-overlay"></div>
        <div class="ms-article-picture-title">
            <a href="">Lorem ipsum dolor sit amet adipisicing elit.</a>
        </div>
    </div>
    <div class="ms-article-infos">
        <ul>
            <li><i class="fas fa-user-circle"></i> Author <b>John Doe</b></li>
            <li><i class="fas fa-folder"></i> Category <b>IT</b></li>
            <li><i class="fas fa-clock"></i> Time <b>42 minutes later</b></li>
        </ul>
    </div>
    <div class="ms-article-title">
        <a href="">Article's title</a>
    </div>
    <div class="ms-article-text">
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nulla libero sint repudiandae amet sed in magnam nam aliquid inventore natus non labore ipsam, quam enim dolorum! Labore, dolorum ratione
            Lorem ipsum dolor sit <b>amet consectetur</b> adipisicing elit. Explicabo, 
            hic velit sed ea quod sunt quam dicta beatae quia optio deserunt ex quae repellendus eaque cum, sapiente veniam mollitia ipsa.
            <blockquote class="ms-blockquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </blockquote>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, 
            hic velit sed ea quod sunt <a href="">quam dicta beatae</a> quia optio deserunt ex quae repellendus eaque cum, sapiente veniam mollitia ipsa.
            <h3>Second title</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nulla libero sint repudiandae amet sed in magnam nam aliquid inventore natus non labore ipsam, quam enim dolorum! Labore, dolorum ratione!
        </p>
    </div>
    <div class="ms-user ms-compact ms-borderless">
        <div class="ms-avatar">
            <img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/68.jpg" alt="...">
        </div>
        <div class="ms-user-info">
            <p>
                <b>John Doe</b><br/>
                <i>Software Engineer</i><br/>
            </p>
        </div>
    </div>
</div>
```

## Title and content

To start, we can add a **title** `ms-article-title` and **content** `ms-article-text` to the article. A quotation can be added.

> For more informations about blockquote element, consult the dedicated [blockquote](typography.md#blockquote).

<div class="ms-article">
    <div class="ms-article-title">
        <a href="">Article's title</a>
    </div>
    <div class="ms-article-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore magnam ipsam iure quos, alias, maiores reprehenderit temporibus illum culpa nobis itaque ut sed aut in aliquid rem, commodi officiis.
        <blockquote class="ms-blockquote ms-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </blockquote>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore magnam ipsam iure quos, alias, maiores reprehenderit temporibus illum culpa nobis itaque ut sed aut in aliquid rem, commodi officiis.
    </div>
</div>

``` html
<div class="ms-article">
    <div class="ms-article-title">
        <a href="">Article's title</a>
    </div>
    <div class="ms-article-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore magnam ipsam iure quos, alias, maiores reprehenderit temporibus illum culpa nobis itaque ut sed aut in aliquid rem, commodi officiis.
        <blockquote class="ms-blockquote ms-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </blockquote>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore magnam ipsam iure quos, alias, maiores reprehenderit temporibus illum culpa nobis itaque ut sed aut in aliquid rem, commodi officiis.
    </div>
</div>
```

## Picture

In order to illustrate your article, we can also **add an image** to the article with the `ms-article-picture` tag.

<div class="ms-article">
    <div class="ms-article-picture">
        <img src="https://images.unsplash.com/photo-1578165219176-ece04edbd053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="background">
    </div>
    <div class="ms-article-title">
        <a href="">Article's title</a>
    </div>
    <div class="ms-article-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore magnam ipsam iure quos, alias, maiores reprehenderit temporibus illum culpa nobis itaque ut sed aut in aliquid rem, commodi officiis.
    </div>
</div>

``` html
<div class="ms-article">
    <div class="ms-article-picture">
        <img src="https://images.unsplash.com/photo-1578165219176-ece04edbd053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="background">
    </div>
    <div class="ms-article-title">
        <a href="">Article's title</a>
    </div>
    <div class="ms-article-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore magnam ipsam iure quos, alias, maiores reprehenderit temporibus illum culpa nobis itaque ut sed aut in aliquid rem, commodi officiis.
    </div>
</div>
```

## Title on the picture

It is possible to **insert the title of the article on the image** with the class `ms-article-picture-overlay` and `ms-article-picture-title`.

<div class="ms-article">
    <div class="ms-article-picture">
        <img src="https://images.unsplash.com/photo-1578165219176-ece04edbd053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="background">
        <div class="ms-article-picture-overlay"></div>
        <div class="ms-article-picture-title">
            <a href="">Lorem ipsum dolor sit amet adipisicing elit.</a>
        </div>
    </div>
    <div class="ms-article-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore magnam ipsam iure quos, alias, maiores reprehenderit temporibus illum culpa nobis itaque ut sed aut in aliquid rem, commodi officiis.
    </div>
</div>

``` html
<div class="ms-article">
    <div class="ms-article-picture">
        <img src="https://images.unsplash.com/photo-1578165219176-ece04edbd053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="background">
        <div class="ms-article-picture-overlay"></div>
        <div class="ms-article-picture-title">
            <a href="">Lorem ipsum dolor sit amet adipisicing elit.</a>
        </div>
    </div>
    <div class="ms-article-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore magnam ipsam iure quos, alias, maiores reprehenderit temporibus illum culpa nobis itaque ut sed aut in aliquid rem, commodi officiis.
    </div>
</div>
```

## Informations 

It is also possible to add information at the beginning of the article with the `ms-article-infos` class.

> For more informations on the icons used, consult the dedicated [page](icons.md).

<div class="ms-article">
    <div class="ms-article-picture">
        <img src="https://images.unsplash.com/photo-1578165219176-ece04edbd053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="background">
        <div class="ms-article-picture-overlay"></div>
        <div class="ms-article-picture-title">
            <a href="">Lorem ipsum dolor sit amet adipisicing elit.</a>
        </div>
    </div>
    <div class="ms-article-infos">
        <ul>
            <li><i class="fas fa-user-circle"></i> Author <b>John Doe</b></li>
            <li><i class="fas fa-folder"></i> Category <b>IT</b></li>
            <li><i class="fas fa-clock"></i> Time <b>42 minutes later</b></li>
        </ul>
    </div>
    <div class="ms-article-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore magnam ipsam iure quos, alias, maiores reprehenderit temporibus illum culpa nobis itaque ut sed aut in aliquid rem, commodi officiis.
    </div>
</div>

``` html
<div class="ms-article">
    <div class="ms-article-picture">
        <img src="https://images.unsplash.com/photo-1578165219176-ece04edbd053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="background">
        <div class="ms-article-picture-overlay"></div>
        <div class="ms-article-picture-title">
            <a href="">Lorem ipsum dolor sit amet adipisicing elit.</a>
        </div>
    </div>
    <div class="ms-article-infos">
        <ul>
            <li><i class="fas fa-user-circle"></i> Author <b>John Doe</b></li>
            <li><i class="fas fa-folder"></i> Category <b>IT</b></li>
            <li><i class="fas fa-clock"></i> Time <b>42 minutes later</b></li>
        </ul>
    </div>
    <div class="ms-article-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem inventore magnam ipsam iure quos, alias, maiores reprehenderit temporibus illum culpa nobis itaque ut sed aut in aliquid rem, commodi officiis.
    </div>
</div>
```