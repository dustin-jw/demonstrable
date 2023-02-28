---
order: 38
---

### SSRF Prevention

- Segment remote resource access to reduce impact of SSRF
- Deny by default to block all but essential network traffic
- Sanitize and validate all client-supplied input data
- Use a positive allow list for the URL schema, port, and destination
- Do not send raw responses to clients and disable HTTP redirects
