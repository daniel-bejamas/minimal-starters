const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()

const promisify = fun =>
	new Promise((resolve, reject) => {
		fun((error, result) => {
			if (error) reject(error)
			else resolve(result)
		})
	})

const get = () =>
	promisify(callback => {
		const params = {
			TableName: 'tableName',
			Key: { ID: '<ID>' }
		}

		return dynamoDb.get(params, callback)
	})

const update = data =>
	promisify(callback => {
		const params = {
			TableName: 'tableName',
			Key: { ID: '<ID>' },
			UpdateExpression: 'SET field1_name = :field1_name, field2_name = :field2_name',
			ExpressionAttributeValues: {
				':field2_name': '<VALUE1>',
				':field2_name': '<VALUE2>'
			},
			ReturnValues: 'UPDATED_NEW'
		}

		return dynamoDb.update(params, callback)
	})

module.exports = { get, update }
