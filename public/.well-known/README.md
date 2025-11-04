# .well-known Directory

This directory contains standard well-known URIs as defined by RFC 8615.

## Files

### security.txt
- **RFC:** 9116
- **Purpose:** Security vulnerability disclosure
- **Location:** `/.well-known/security.txt`
- **Also available at:** `/security.txt`
- **Expires:** 2026-12-31

### change-password
- **Purpose:** Password change redirect
- **Standard:** W3C
- **Redirects to:** Login page

## Future Files (When Needed)

### apple-app-site-association
For iOS Universal Links (if mobile app launched)

### assetlinks.json
For Android App Links (if mobile app launched)

### webfinger
For federated identity (if needed)

### openid-configuration
For OpenID Connect (if auth implemented)

## Standards

All files follow IANA registered standards:
https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml