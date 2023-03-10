---
order: 12
---

## Now That We Have All That

For each of those resource URLs, we want to download them and write those files to disc.

```js
const fs = require('fs');
const path = require('path');

const writeResourceFiles = async (urls) => {
  urls.forEach((url) => {
    const { data: content } = await axios.get(url, {
      responseType: 'arraybuffer',
    });

    // hand-waving some implementation details here
    const dirPath = getDirectory(url);
    const filePath = path.join(dirPath, getFileName(url));

    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(filePath, content);
  });
};

// later
writeResourceFiles([...stylesheets, ...scripts, ...images, ...etc]);
```
