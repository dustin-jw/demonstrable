---
order: 16
---

### Container Query Units

Container queries come with new units for sizing, similar to viewport units.

- `cqw` or `cqi` for 1% of a container's width or inline size, respectively
- `cqh` or `cqb` for 1% of a container's height or block size, respectively
- `cqmin` for the smaller value of `cqi` or `cqb`
- `cqmax` for the larger value of `cqi` or `cqb`

```css
@container (min-width: 20rem) {
  .cmp-card p {
    font-size: clamp(1rem, 1rem + 1cqi, 1.5rem);
  }
}
```
