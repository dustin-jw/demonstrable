---
order: 9
---

#### Intrinsic Sidebar

For a sidebar that is stacked above the main content on small screens, we can use flexbox to handle switching it to a sidebar on larger screens instead of a media query.

```css
.cmp-sidebar-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.cmp-sidebar-wrapper > :first-child {
  flex-grow: 1;
}

.cmp-sidebar-wrapper > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: 50%;
}
```
