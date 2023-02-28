---
order: 29
---

### Preventing Identification and Authentication Failures

- Implement multi-factor authentication to prevent automated attacks from succeeding
- Change default credentials, especially for admin users
- Check for weak passwords and disallow them when users create accounts or change their passwords ([10,000 worst passwords](https://github.com/OWASP/passfault/blob/master/wordlists/wordlists/10k-worst-passwords.txt))
- Follow the [National Institute of Standards and Technology (NIST) guidelines](https://pages.nist.gov/800-63-3/sp800-63b.html#-5112-memorized-secret-verifiers) for password length, complexity, and rotation
- Limit or delay failed login attempts, and alert admins when brute force or other attacks are detected
