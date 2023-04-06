<div dir="rtl">

# block-ui.js

<p>
<a href="https://github.com/vzool/block-ui.js/blob/main/README.md"><img src="https://img.shields.io/badge/lang-en-green.svg" alt="en" data-canonical-src="https://img.shields.io/badge/lang-en-green.svg" style="max-width: 100%;"></a>
<a href="https://npmjs.org/package/block-ui.js" title="View this project on NPM"><img src="https://img.shields.io/npm/v/block-ui.js.svg" alt="NPM رقم الاصدارة في مدير حزم مكتبات" /></a>
</p>

مكون إضافي بسيط ولكنه قوي بالجافا سكريبت خالص وذلك لعرض صفحة انتظار تمنع المستخدم من التفاعل مع الصفحة أثناء تنفيذ إجراءات متعددة في الخلفية.

![لقطة شاشة](screenshot.gif)

## التثبيت (Installation)

### مدير حزم مكتبات NPM الخاصة بـ Node.js

```bash
npm install block-ui.js
```

### مدير حزم مكتبات Yarn الخاص بـ Node.js

```bash
yarn add block-ui.js
```

### شبكة توصيل المحتوى (Content Delivery Network - CDN)

```html
<script src="https://unpkg.com/block-ui.js"></script>
```

## الاستخدام (Usage)

### الدمج البرمجي (Import)

</div>

```javascript
import 'block-ui.js';
```
<div dir="rtl">

### التهيئة (Initialize)

```javascript
document.vzool_blockui_image = 'https://i.imgur.com/3g7OaQx.gif'; // or local file like loader.gif
document.vzool_blockui_background = '#121111'; // optional
document.vzool_blockui_color = '#ffffff'; // optional
```

### حجب الصفحة (Block UI)

يجب أن يكون هناك عنصر بمعرف `id` في الصفحة لحظره باستخدام مُحمل gif ولون الخلفية المحدد في `document.vzool_blockui_background` و `document.vzool_blockui_color` المتغيرات أعلاه.

```javascript
BlockUI("container").show(); // not #container
```

### حالة حجب الصفحة (Block UI Status)

```javascript
BlockUI("container").blocked(); // true or false
```

### تحديث رسائل حجب الصفحة (Update Messages)


```javascript
BlockUI("container").message("<h1 style='padding-top: 190px;'>Loading...</h1>"); // set message
BlockUI("container").message(); // clear the message
```

يمكنك استخدام `padding-top` أو `padding-bottom` لتحريك الرسالة لأعلى أو لأسفل وفقًا لذلك ، لذا فهي محتوى `HTML` ، ويمكنك التحديث بأي شيء صالح لـ `HTML`.

* ملاحظة: يجب تهيئته باستدعاء `show()` أولاً ، وإلا فلن يعمل وسيُعيد فقط `false`.

### إزالة حجب الصفحة (Unblock UI)

</div>

```javascript
BlockUI("container").hide();
```

<div dir="rtl">

### المرجع (Reference)

https://onezeronull.com/2013/03/25/simple-element-blocker-with-and-without-jquery/#comment-842

### الترخيص (License)

ISC License

</div>