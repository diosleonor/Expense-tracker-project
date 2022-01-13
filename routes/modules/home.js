const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

// index page
router.get('/', (req, res) => {
	const userId = req.user._id // req會帶一組user的資訊，指派一變數給它備用
	Record.find({userId}) // 查詢全部屬於userId的records
	.lean()
	.sort({_id:'asc'})
	.then(records => res.render('index', { records }))
	.catch(error => console.error(error))
})

module.exports = router