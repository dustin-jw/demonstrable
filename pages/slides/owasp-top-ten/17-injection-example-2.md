---
order: 17
---

<h3>
  Injection
  <span class="util-visually-hidden">
    Example 2
  </span>
</h3>

Here we have a vulnerable query that uses untrusted data.

```js
const query = `
  SELECT *
  FROM accounts
  WHERE custID='${req.params.id}'";
`;
```

An attacker can exploit this vulnerability to return all records by using `id=' or '1'='1`.

The query effectively becomes:

```js
const query = `
  SELECT *
  FROM accounts
  WHERE custID='' or '1'='1'";
`;
```
