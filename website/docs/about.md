---
sidebar_position: 1
id: about
Title: About
description: Welcome to the minstyle.io documentation!
keywords: [About, HTML, CSS, CSS Framework, minstyle.io]
---

# About

Welcome to the minstyle.io documentation!

minstyle.io is a **simple and light open source CSS framework**. It integrates a set of pre-designed HTML elements, allowing the rapid and simple development of interfaces for all devices.

>minstyle.io is entirely designed in CSS (SCSS), no javascript library is developed or required.

The **architecture of the framework is based on the concatenation of classes**. For example, the `ms-btn` classe allows to get the default design of a button, the `ms-success` classe allows to color the button green, and the `ms-rounded` classe allows to round the button angles 

The framework is based on 4 colors: primary `.ms-primary` and secondary `ms-secondary` being the main colors of the design.
The action colors, `.ms-action` and `.ms-action2`, allow you to highlight the elements calling for an action, or define a complementary color to the first two. See [this page](Layout/colors.md) for more information.

Since V2, it is possible to customize the 4 colors via the framework generator. See [this page](Layout/generator.md) for more information.

<a href="https://generator.minstyle.io/" class="generator-link" target="_blank">Go to minstyle.io-generator -></a><br/><br/>

Each component of the framework is compatible with the dark mode. A [dedicated page](Layout/dark.md) explains how it works.

In order to be more readable, the documentation is divided into several large themes, each representing a particular aspect of the framework :

- [Getting started](get-started/installation.md) -> How to install the framework.
- [Layout](Layout/layout.md) -> Documentation on how the content is displayed in general (dark mode, responsive grid, etc...).
- [Content](contents/contents.md) -> Documentation about content. The content represents the native elements of HTML, such as forms, paragraphs, etc...
- [Elements](elements/elements.md) -> Documentation about the elements of the framework. An element is an HTML structure that is independent of others (an element does not depend on another element).
- [Components](components/components.md) -> Documentation about the components of the framework. A component is a set of elements that can be used together or an HTML structure more complex than an element. It can also be a structuring element of a page (like a menu).
- [Helpers](helpers/helpers.md/) -> Documentation about the helpers. A helper is a set of CSS class that allow you to quickly format HTML content.

If you encounter difficulties or discover a bug, feel free to open an issue on the [GitHub repository](https://github.com/Airmime/minstyle.io).

Any contribution is also welcome :)

Enjoy!

<a href="get-started/installation" class="ms-btn ms-primary ms-outline">Let's start -></a>