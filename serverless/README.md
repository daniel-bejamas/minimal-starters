# Server setup

Uses serverless framework, aws service and cors

Workflow:

1. Create IAM user - get `<KEY>` and `<SECRET>`
2. Replace `service-name` and `profile-name` in package.json and serverless.yml
3. `sls config credentials --provider aws --key <KEY> --secret <SECRET> --profile <profile-name>`

Development:
`npm run dev`

Deploy:
`npm run deploy`
