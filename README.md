# block-ui.js

<p>
<a href="https://github.com/vzool/block-ui.js/blob/main/README.ar.md"><img src="https://img.shields.io/badge/lang-ar-green.svg" alt="ar" data-canonical-src="https://img.shields.io/badge/lang-en-green.svg" style="max-width: 100%;"></a>
<a href="https://npmjs.org/package/block-ui.js" title="View this project on NPM"><img src="https://img.shields.io/npm/v/block-ui.js.svg" alt="NPM version" /></a>
</p>

A simple but powerful vanilla pure javascript plugin to block user interaction with a page while an action is being performed in the background.

![Screenshot](screenshot.gif)

## Installation

### NPM

```bash
npm install block-ui.js
```

### Yarn

```bash
yarn add block-ui.js
```

### CDN

```html
<script src="https://unpkg.com/block-ui.js"></script>
```

## Usage

### Import

```javascript
import 'block-ui.js';
```

### Initialize

```javascript
document.vzool_blockui_image = 'https://i.imgur.com/3g7OaQx.gif'; // or local file like loader.gif
document.vzool_blockui_background = '#121111'; // optional
document.vzool_blockui_color = '#ffffff'; // optional
```

### Block UI

There should be an element with `id` identifier in the page to block it with loader gif and background color set in `document.vzool_blockui_background` and `document.vzool_blockui_color` variables above.

```javascript
BlockUI("container").show(); // not #container
```

### Block UI Status

```javascript
BlockUI("container").blocked(); // true or false
```

### Update Messages


```javascript
BlockUI("container").message("<h1 style='padding-top: 190px;'>Loading...</h1>"); // set message
BlockUI("container").message(); // clear the message
```

You can use `padding-top` or `padding-bottom` to move the message up or down accordingly, so it is `HTML` content, you can update with anything which is `HTML` valid.

* Note: it should be initialized with calling `show()` method first, otherwise it will not work and just return `false`.

### Unblock UI

```javascript
BlockUI("container").hide();
```

### Reference

https://onezeronull.com/2013/03/25/simple-element-blocker-with-and-without-jquery/#comment-842

### License

ISC License