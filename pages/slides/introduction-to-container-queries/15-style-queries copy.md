---
order: 15
---

### Style Queries

I glossed over `container-type: normal` earlier, but that's meant for Container Style Queries. Use with caution, though, because [support may be spotty](https://caniuse.com/css-container-queries-style).

```css
.cmp-card-list {
  container-type: normal;
}

@container style(--featured: true) {
  .cmp-card {
    /* apply featured card styles */
    grid-column: 1 / -1;
    border: 0.25rem solid hotpink;
  }
}
```
