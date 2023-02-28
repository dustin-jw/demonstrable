---
order: 7
---

<h3>
  Broken Access Control
  <span class="util-visually-hidden">
    Example
  </span>
</h3>

A user goes to their account page at `/account?id=576` and the backend looks something like:

```js
app.get('/account', (req, res) => {
  const info = getAccountInfo(req.params.id);
  res.send(info);
});
```

What could go wrong?
