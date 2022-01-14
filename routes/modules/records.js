const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

router.get('/new', (req, res) => {
	return res.render('new')
})

router.get('/:id/edit', (req, res) => {
	// const userId = req.user._id
	const _id = req.params.id
	return Record.findOne({_id})
		.lean()
		.then(record => res.render('edit', { record }))
		.catch(error => console.log(error))
})




module.exports = router