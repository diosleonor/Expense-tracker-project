const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

// Create
router.get('/new', (req, res) => {
	return res.render('new')
})
router.post('/', (req, res) => {
	const userId = req.user._id
	const {name, date, category, amount} = req.body
	return Record.create({ name, date, categoryId:category, amount, userId })
		.then(() => res.redirect('/'))
		.catch(error => console.log(error))
})

// Update
router.get('/:id/edit', (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	return Record.findOne({_id, userId})
		.lean()
		.then(record => res.render('edit', { record }))
		.catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	const {name, date, category, amount} = req.body
	return Record.findOne({_id, userId})
		.then(record => {
			if (!date) {
				record.date = record.date
				record.name = name
				record.categoryId = category
				record.amount = amount
			} else {
				record = Object.assign(record, req.body)
			}
			return record.save()
		})
		.then(() => res.redirect(`/`))
		.catch(error => console.log(error))
})

// Delete
router.delete('/:id', (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	return Record.findOne({_id, userId})
		.then(record => record.remove())
		.then(() => res.redirect('/'))
		.catch(error => console.log(error))
})


module.exports = router