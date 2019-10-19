const app = require('express')()

app.use(require('body-parser').json())
app.use(require('cors')())
app.use(require('./routes'))

app.get('/', async (_req, res) => {
	res.status(200).send('REST API')
})

/* Development */
if (process.env.NODE_ENV === 'dev') {
	const port = process.env.PORT || 5000
	app.listen(port, () => {
		console.log(`Running on http://localhost:${port}`)
	})
}

module.exports.server = require('serverless-http')(app)
