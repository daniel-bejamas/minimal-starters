# Netlify Identity & Gatsby

## Setup
1. Standard Netlify project
2. Netlify Identity settings:
    1. change registration to `on invite`
    2. add email templates
        - invitation: `/email-templates/invitation.html`
        - recovery: `/email-templates/recovery.html`
    3. set `GATSBY_NETLIFY_IDENTITY_API_URL` env variable to `{netlify-page-url}/.netlify/identity` (for example `https://practical-rose-123e23.netlify.app/.netlify/identity`)

### TODO
1. external providers
2. email templates
    1. confirmation
    2. email change
3. free registration (no invite required)