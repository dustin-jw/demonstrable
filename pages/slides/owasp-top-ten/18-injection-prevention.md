---
order: 18
---

### Injection Prevention

- Use safe APIs with parameterized interfaces (rather than constructing SQL manually, for example)
- Define valid patterns that user input can fit into, and validate user-supplied data
- Use LIMIT to prevent returning all records in the event of a successful injection
- Escape special characters
