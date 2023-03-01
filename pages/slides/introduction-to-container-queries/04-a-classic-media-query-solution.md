---
order: 4
---

### A Classic Media Query Solution

Say you need a form where the fields need to be stacked vertically on small screens, arranged into two columns on medium-sized screens, then arranged in one row on larger screens. No problem for media queries, right?

```scss
.cmp-special-form {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 40rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 60rem) {
    display: flex;
  }
}
```
