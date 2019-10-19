const app = require('express')()

app.use(require('body-parser').json())
app.use(require('./routes'))

app.get('/', async (_req, res) => {
	res.status(200).send('REST API')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Running on http://localhost:${port}`)
})
