---
order: 6
---

#### Now You Need to Know About Context

That CSS might not look _too_ bad, but it added a sneaky dependence on your markup. Now you need to know where the component is being used, and you need to set the `.cmp-special-form--squished` class on it.

Depending on how your site is built, this can be anything from a minor nuisance to a major hassle. Hopefully, you can handle it at build time, but it might require client-side JS 😱
