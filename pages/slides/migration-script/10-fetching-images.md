---
order: 10
---

### Fetching Images

```js
const getImageUrls = (html) => {
  const images = html.querySelectorAll(
    'img[src*="example."],img[src^="/"]:not([src^="//"])'
  );
  return Array.from(images).map((image) => image.src);
};

// later
const images = getImageUrls(parsedHtml);
```
