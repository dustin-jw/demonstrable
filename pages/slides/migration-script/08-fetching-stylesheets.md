---
order: 8
---

## Fetching Stylesheets

```js
const getStylesheetUrls = (html) => {
  const stylesheets = html.querySelectorAll(
    'link[rel="stylesheet"][href*="example."],link[rel="stylesheet"][href^="/"]:not([href^="//"])'
  );
  return Array.from(stylesheets).map((stylesheet) => stylesheet.href);
};

// later
const stylesheets = getStylesheetUrls(parsedHtml);
```
