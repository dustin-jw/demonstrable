---
order: 11
---

#### Issues with Intrinsic Layouts

- They're often clever at the expense of being readable
  - Tell me you understood the sidebar thing without it being explained
  - `repeat(auto-fit, minmax(min(250px, 100%), 1fr))` is doing an awful lot of heavy lifting
- They don't completely solve our problems
  - We're changing the layout at a macro level, but what about the micro level?
  - How could we change typography details, colors, or other styles based on size? That leads us right back to media queries
