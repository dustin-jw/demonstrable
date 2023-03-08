---
order: 6
---

## Fetching the Page

```js
const axios = require('axios');

const migratePages = (pagesToMigrate) => {
  pagesToMigrate.forEach((page) => {
    const { data: html } = await axios.get(page.sourceUrl);
  });
};
```
