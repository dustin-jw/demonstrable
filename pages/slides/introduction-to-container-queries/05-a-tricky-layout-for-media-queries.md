---
order: 5
---

#### A Tricky Layout for Media Queries

Now imagine that the same form appears in two different places. In one place, the form can take the full width of the page's main content area, but in the other, it has to share space with a call to action. Now things get complicated.

```css
@media (min-width: 40rem) {
  .cmp-special-form--squished {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 60rem) {
  .cmp-special-form--squished {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```
