const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

// Create
router.get('/new', (req, res) => {
	return res.render('new')
})



// Update
router.get('/:id/edit', (req, res) => {
	// const userId = req.user._id
	const _id = req.params.id
	return Record.findOne({_id})
		.lean()
		.then(record => res.render('edit', { record }))
		.catch(error => console.log(error))
})



// Delete
router.delete('/:id', (req, res) => {
	// const userId = req.user._id
	const _id = req.params.id
	return Record.findOne({_id})
		.then(record => record.remove())
		.then(() => res.redirect('/'))
		.catch(error => console.log(error))
})


module.exports = router