---
order: 9
---

## Fetching Scripts

```js
const getScriptUrls = (html) => {
  const scripts = html.querySelectorAll(
    'script[src*="example."],script[src^="/"]:not([src^="//"])'
  );
  return Array.from(scripts).map((script) => script.src);
};

// later
const scripts = getScriptUrls(parsedHtml);
```
