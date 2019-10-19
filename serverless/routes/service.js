const router = require('express').Router()

router.get('/get', async (_req, res) => {
	res.json({ message: 'ok' })
})

module.exports = router
