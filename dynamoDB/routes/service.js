const router = require('express').Router()
const db = require('../db')

router.get('/get', async (_req, res) => {
	const value_from_db = await db.get()
	res.json({ message: 'ok' })
})

module.exports = router
