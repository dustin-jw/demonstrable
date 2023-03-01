---
order: 14
---

### Writing a Container Query

With your container defined, you can write container queries to apply different styles to child elements.

```css
.cmp-card {
  font-size: 1rem;
}

@container card-list (min-width: 20rem) {
  .cmp-card {
    font-size: 1.25rem;
  }
}
```

It's just that easy!
