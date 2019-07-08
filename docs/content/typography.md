## Typographie

By default, many of the **major elements of HTML** have been designated.

___

## Heading

<h1 style="margin:0 0 1rem 0; font-size: 35px; font-weight: 500; color: #34495e;">Title h1 (35px)</h1>
<h2 style="margin:0 0 1rem 0; font-size: 32px; font-weight: 500; color: #34495e;">Title h2 (32px)</h2>
<h3 style="margin:0 0 1rem 0; font-size: 29px; font-weight: 500; color: #34495e;">Title h3 (29px)</h3>
<h4 style="margin:0 0 1rem 0; font-size: 26px; font-weight: 500; color: #34495e;">Title h4 (26px)</h4>
<h5 style="margin:0 0 1rem 0; font-size: 22px; font-weight: 500; color: #34495e;">Title h5 (22px)</h5>
<h6 style="margin:0 0 1rem 0; font-size: 19px; font-weight: 500; color: #34495e;">Title h6 (19px)</h6>

```html
<h1>Title h1 (35px)</h1>
<h2>Title h2 (32px)</h2>
<h3>Title h3 (29px)</h3>
<h4>Title h4 (26px)</h4>
<h5>Title h5 (22px)</h5>
<h6>Title h6 (19px)</h6>
```
___

## Paragraphs

<p>
    Lorem ipsum dolor sit amet, <a href="#" style="color: #219ced; font-weight:normal;">consectetur adipisicing</a> elit. Pariatur mollitia, rem neque aperiam facere quasi reiciendis odit assumenda tempore eligendi impedit atque maiores iure eum quia doloribus ipsum odio quae!
</p>

```html
<p>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipisicing</a> elit. Pariatur mollitia, rem neque aperiam facere quasi reiciendis odit assumenda tempore eligendi impedit atque maiores iure eum quia doloribus ipsum odio quae!
</p>
```
___

## Text utilities

**Text colors**.

<p>
	Lorem ipsum dolor sit amet <span class="ms-text-info">ms-text-info</span> elit. Quibusdam aut vero eum, <span class="ms-text-success">ms-text-success</span> spa alias <span class="ms-text-black" style="background-color: gray">ms-text-black</span> accusamus <span class="ms-text-danger">ms-text-danger</span> officiis eligendi totam <span class="ms-text-white" style="background-color: black">ms-text-white</span>ipsa ratione deserunt <span class="ms-text-warning">ms-text-warning</span>, sit itaque numquam similique, cupiditate vitae <span class="ms-text-gray">ms-text-gray</span>.
</p>

```html
<p>
	Lorem ipsum dolor sit amet <span class="ms-text-info">ms-text-info</span> elit. Quibusdam aut vero eum, <span class="ms-text-success">ms-text-success</span> spa alias <span class="ms-text-black" style="background-color: gray">ms-text-black</span> accusamus <span class="ms-text-danger">ms-text-danger</span> officiis eligendi totam <span class="ms-text-white" style="background-color: black">ms-text-white</span>ipsa ratione deserunt <span class="ms-text-warning">ms-text-warning</span>, sit itaque numquam similique, cupiditate vitae <span class="ms-text-gray">ms-text-gray</span>.
</p>
```

**Text alignements**.

<p class="ms-text-left">Lorem ipsum dolor - ms-text-left</p>
<p class="ms-text-center">Lorem ipsum dolor - ms-text-center</p>
<p class="ms-text-right">Lorem ipsum dolor - ms-text-right</p>

```html
<p class="ms-text-left">Lorem ipsum dolor - ms-text-left</p>
<p class="ms-text-center">Lorem ipsum dolor - ms-text-center</p>
<p class="ms-text-right">Lorem ipsum dolor - ms-text-right</p>
```

**Text semantic**.

| Rendering | HTML Tag |
|---|---|
| <code>code</code>  |  `<code>` |
| <mark>Mark</mark> | `<mark>` |
| <kbd>terminal</kbd> | `<kbd>` |
|   |   |
|   |   |
|   |   |