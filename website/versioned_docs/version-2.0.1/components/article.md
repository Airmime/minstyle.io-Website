---
id: article
title: Article
description: The article component allows you to design a news page, with several possible layouts and parameters.
keywords: [Article, News, HTML, CSS, CSS Framework, minstyle.io]
---

# Article

The article component allows you to design a news page, with several possible layouts and parameters.

> For more informations on the icons used, consult the dedicated [page](../contents/icons.md).

## Basic usage

An article is composed of several elements to be nested. First, the `.ms-article` tag must be at the root of the structure. 

Then, you can add several elements such as an image with the `.ms-article-picture` class, information about the article with the `.ms-article-infos` class, a list of tags/labels with the `.ms-list-label` class, a title and content with the `.ms-article-title` and `.ms-article-text` tags.

> For more informations about user element, consult the dedicated [page](user.md).

```html live
<div>
	<div class="ms-article">
		<div class="ms-article-picture">
			<img src="https://www.zupimages.net/up/22/08/uitq.png" alt="background" />
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
		<div class="ms-list-label">
			<ul>
				<li>
					<div class="ms-label ms-primary ms-rounded"><a href=""><i class="fab fa-twitter"></i></a></div>
					<div class="ms-label ms-primary ms-rounded"><a href=""><i class="fab fa-facebook-f"></i></a></div>
					<div class="ms-label ms-primary ms-rounded"><a href=""><i class="fab fa-linkedin-in"></i></a></div>
					<div class="ms-label ms-rounded"><a href=""><i class="fab fa-github-alt"></i></a></div>
				</li>
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
				<img class="ms-avatar-img" src="https://randomuser.me/api/portraits/women/68.jpg" alt="..."/>
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
```

## Picture

In order to illustrate your article, we can also add an image to the article with the `.ms-article-picture` tag. 
An image can contain a title with the `.ms-article-picture-title` class, and also an overlay, allowing to darken the image, with the `.ms-article-picture-overlay` class.

```html live
<div class="ms-article">
	<div class="ms-article-picture">
		<img src="https://www.zupimages.net/up/22/08/uitq.png" alt="background" />
		<div class="ms-article-picture-overlay"></div>
		<div class="ms-article-picture-title">
			<a href="">Lorem ipsum dolor sit amet adipisicing elit.</a>
		</div>
	</div>
</div>
```

## Informations

It is also possible to add information at the beginning of the article with the `.ms-article-infos` class.

```html live
<div class="ms-article">
	<div class="ms-article-infos">
		<ul>
			<li><i class="fas fa-user-circle"></i> Author <b>John Doe</b></li>
			<li><i class="fas fa-folder"></i> Category <b>IT</b></li>
			<li><i class="fas fa-clock"></i> Time <b>42 minutes later</b></li>
		</ul>
	</div>
</div>
```

## List of tags

It is possible to add a list of labels, which can identify the article on certain categories, with the class `.ms-list-label`.

```html live
<div class="ms-article">
	<div class="ms-list-label">
		<ul>
			<li>
				<div class="ms-label ms-primary ms-rounded"><a href=""><i class="fab fa-twitter"></i></a></div>
				<div class="ms-label ms-secondary ms-rounded"><a href=""><i class="fab fa-facebook-f"></i></a></div>
				<div class="ms-label ms-action ms-rounded"><a href=""><i class="fab fa-linkedin-in"></i></a></div>
				<div class="ms-label ms-rounded"><a href=""><i class="fab fa-github-alt"></i></a></div>
			</li>
		</ul>
	</div>
</div>
```

## Title and content

Finaly, we can add a title with `.ms-article-title`class, and content with `.ms-article-text`classe.

```html live
<div class="ms-article">
	<div class="ms-article-title">
		<a href="">Article's title</a>
	</div>
	<div class="ms-article-text">
		<p>
			Lorem, ipsum dolor sit amet consectetur...</p>
	</div>
</div>
```