# AWS DynamoDB Starter

## Setup

1. Create IAM user - get `<KEY>` and `<SECRET>`
2. Replace `service-name` and `profile-name` in package.json and serverless.yml,
3. Replace `tableName` and `region` in serverless.yml
4. `sls config credentials --provider aws --key <KEY> --secret <SECRET> --profile <profile-name>`
5. Modify db.js, remember about `tableName` and `ID`
6. Update `iamRoleStatements` in serverless.yml if other permissions are needed (e.g. deleting an item from the table)

### Development
`npm run dev`

### Deploy
`npm run deploy`

### NOTE
AWS sometimes doesn't like to create functions and resources at the same time - for the first time deploy it separately

### TODO
1. DB CRUD functions