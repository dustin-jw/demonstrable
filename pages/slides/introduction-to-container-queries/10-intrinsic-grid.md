---
order: 10
---

#### Intrinsic Grid

Say you have a bunch of cards that you want to arrange in a grid if there's enough space. The more space, the more columns.

```css
.cmp-intrinsic-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
}
```
