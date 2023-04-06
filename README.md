# block-ui.js

A simple but powerful vanilla pure javascript plugin to block user interaction with a page while an action is being performed in the background.

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
import BlockUI from 'block-ui.js';
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

### License

ISC License