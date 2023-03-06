---
order: 5
---

## Outlining the Process

```js
const migrate = (urls) => {
  urls.forEach((url) => {
    // fetch page
    // fetch the stylesheets used by the page
    // fetch the scripts used by the page
    // fetch the images used by the page
    // fetch other external resources used by the page
    // write external resources to disc
    // update references to resources in HTML
    // write HTML file to disc
  });
};
```
