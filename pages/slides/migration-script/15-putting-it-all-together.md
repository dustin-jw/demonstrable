---
order: 15
---

## Putting it all Together

```js
const migratePages = (pagesToMigrate) => {
  pagesToMigrate.forEach((page) => {
    const { data: html } = await axios.get(page.sourceUrl);
    const parsedHtml = parseHtml(html);
    const stylesheets = getStylesheetUrls(parsedHtml);
    const scripts = getScriptUrls(parsedHtml);
    const images = getImageUrls(parsedHtml);
    const etc = getOtherResources(parsedHtml); // hand-waving
    writeResourceFiles([...stylesheets, ...scripts, ...images, ...etc]);

    const processedHtml = replaceUrlsInHtmlFiles(html, [
      ...stylesheets,
      ...scripts,
      ...images,
      ...etc,
    ]);
    writeHtmlFile(page, processedHtml);
  });
};
```
