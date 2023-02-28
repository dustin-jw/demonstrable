---
order: 35
---

### Preventing Security Logging and Monitoring Failures

- Ensure login, access control, and server-side input validation failures are logged with enough context to identify suspicious/malicious accounts and held long enough to do forensic analysis
- Ensure logs are generated in a format that log management tools can consume and that they are encoded correctly to prevent injections or attacks
- Ensure high-value transactions have an audit trail with integrity controls to prevent tampering or deletion (append-only database tables)
- Set up effective monitoring and alerting such that suspicious activity is detected quickly
- Establish or adopt an incident response and recovery plan
