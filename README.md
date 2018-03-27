# SYNOPSIS
Create dom elements using css syntax.

# USAGE
```bash
npm install asyncly/h
```

```js
const h = require('h')
```

Create a div element with the class foo.
```js
h('.foo')
```

```html
<div class="foo"></div>
```

Create an input element with the class foo.
```js
h('input.foo')
```

```html
<input class="foo">
```

Create an input with more classes
```js
h('input.foo.bar')
```

```html
<input class="foo bar">
```

Same as above but with an id (order is not important).
```js
h('input#quxx.foo.bar')
```

```html
<input id="quxx" class="foo bar">
```

Create an element with an attribute
```js
h('span[x=y]')
```

```html
<span x="y"></span>
```

Create an element with multiple attributes
```js
h('span.foo[x=y][q=hello]')
```

```html
<span class="foo" x="y" q="hello"></span>
```

Add child elements.
```js
h('p', 'Hello, World!')
```

```html
<p>Hello, World.</p>
```

All as many child elements as you want, even more `h`.
```js
const s = h('span.red', 'World')
h('p', 'Hello, ', s, '!')
```

```html
<p>Hello, <span class="red">World</span>!</p>
```

