---
order: 13
---

## Updating Paths in HTML

Our HTML is still referencing the files from the old production site, so we need to update those URLs to reference our new local files via their relative paths.

```js
const replaceUrlsInHtmlFiles = (html, resources) => {
  let processedHtml = html;
  resources.forEach((resource) => {
    // a little more hand-waving
    processedHtml = processedHtml.replaceAll(
      resource,
      getRelativePath(resource)
    );
  });

  return processedHtml;
};

// later
const processedHtml = replaceUrlsInHtmlFiles(html, [
  ...stylesheets,
  ...scripts,
  ...images,
  ...etc,
]);
```
