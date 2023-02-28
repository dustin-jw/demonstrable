---
order: 9
---

### Broken Access Control Prevention

- Deny by default, enforce record ownership, invalidate sessions after logout, and rate limit APIs
- Implement access control mechanisms once, then re-use throughout the application (minimizing surface area for bugs)
- Log access control failures and alert admins after repeated failures
