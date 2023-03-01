---
order: 5
---

#### A Tricky Layout for Media Queries

Now imagine that the same form appears in two different places. In one place, the form can take the full width of the page's main content area, but in the other, it has to share space with a call to action. Now things get complicated.

```scss
.cmp-special-form {
  /* default styles */

  &--squished {
    @media (min-width: 40rem) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 60rem) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
}
```
