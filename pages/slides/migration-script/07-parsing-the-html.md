---
order: 7
---

## Parsing the HTML

```js
const jsdom = require('jsdom');
const { DOMParser } = new jsdom.JSDOM('').window;
const parser = new DOMParser();
const parseHtml = (html) => parser.parseFromString(html, 'text/html');

// later
const { data: html } = await axios.get(page.sourceUrl);
const parsedHtml = parseHtml(html);
```
