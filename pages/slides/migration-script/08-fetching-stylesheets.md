---
order: 8
---

## Fetching Stylesheets

```js
const getStylesheetUrls = (html) => {
  // we want stylesheets from `example.` domains or referenced by relative path
  const stylesheets = html.querySelectorAll(
    'link[rel="stylesheet"][href*="example."],link[rel="stylesheet"][href^="/"]:not([href^="//"])'
  );
  return Array.from(stylesheets).map((stylesheet) => stylesheet.href);
};

// later
const stylesheets = getStylesheetUrls(parsedHtml);
```
