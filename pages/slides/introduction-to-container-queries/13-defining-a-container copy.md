---
order: 13
---

### Defining a Container

Not everything is a container by default. You need to specify your containers using `container-type`. Optionally, you can give them a `container-name`.

`container-type` can be `inline-size` (width-only), `size` (width and height), or `normal` (we'll get to that later).

```css
.cmp-card-list {
  container-type: inline-size;
  container-name: card-list;
}
```
