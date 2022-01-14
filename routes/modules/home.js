const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

// index page
router.get('/', (req, res) => {
	// const userId = req.user._id // req會帶一組user的資訊，指派一變數給它備用
	Record.find() // 查詢全部屬於userId的records
	.lean()
	.sort({_id:'asc'})
	.then(records => res.render('index', { records }))
	.catch(error => console.error(error))
})

// 待修
router.get('/sort', (req, res) => {
	const category = req.query.category
 	// const userId = req.user._id
	Record.find({})
		.lean()
		.sort({category})
		.then(records => res.render('index', {records, category}))
		.catch(error => console.log(error))
})

module.exports = router

// router.get('/', (req, res) => {
// 	// const userId = req.user._id // req會帶一組user的資訊，指派一變數給它備用
// 	Record.find() // 查詢全部屬於userId的records
// 	.lean()
// 	.sort({_id:'asc'})
// 	.then(records => res.render('index', { records }))
// 	.catch(error => console.error(error))
// })