---
order: 14
---

### Writing HTML Files to Disc

```js
const writeHtmlFile = (page, processedHtml) => {
  const alias = getAlias(page.destinationUrl);
  const dirPath = path.join('dist', alias);
  const filePath = path.join(dirPath, 'index.html');

  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(filePath, processedHtml, 'utf-8');
};

// later
writeHtmlFile(page, processedHtml);
```
