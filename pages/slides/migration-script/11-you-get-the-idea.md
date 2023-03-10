---
order: 11
---

## You Get the Idea

We'll do the same sort of thing for icons, manifests, videos, and anything with a `srcset` attribute so we get all the variations of images.

So far, we have this.

```js
const migratePages = (pagesToMigrate) => {
  pagesToMigrate.forEach((page) => {
    const { data: html } = await axios.get(page.sourceUrl);
    const parsedHtml = parseHtml(html);
    const stylesheets = getStylesheetUrls(parsedHtml);
    const scripts = getScriptUrls(parsedHtml);
    const images = getImageUrls(parsedHtml);
    const icons = getIconUrls(parsedHtml);
    const manifests = getManifestUrls(parsedHtml);
    const videos = getVideoUrls(parsedHtml);
    const srcsetUrls = getSrcsetUrls(parsedHtml);
  });
};
```
