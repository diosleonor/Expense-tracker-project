const express = require('express')
const router = express.Router()
const Record = require('../../models/record.js')
const Category = require('../../models/category.js')

// index
router.get('/', async (req, res) => {
	const userId = req.user._id // req會帶一組user的資訊，指派一變數給它備用
	const records = await Record.find({userId}).lean().sort({date:'desc'})
	let totalAmount = 0
	await Promise.all(
		records.map( async (record) => {
		totalAmount += record.amount
		const category = await Category.findOne({id:record.categoryId})
		record.categoryId = category.icon
		return records
	}))
	res.render('index', { records, totalAmount })
})

// sort
router.get('/sort', async (req, res) => {
	const category = req.query.category
 	const userId = req.user._id
 	let totalAmount = 0
	const records = await Record.find({userId, categoryId: category}).lean().sort({date:'desc'})
	records.map(async (record) => {
		totalAmount += record.amount
		const category = await Category.findOne({id:record.categoryId})
		record.categoryId = category.icon
		return records
	})
	res.render('index', {records, category, totalAmount})
})

module.exports = router

// 第二個版本 需解決非同步問題
// router.get('/', (req, res) => {
// 	// const userId = req.user._id // req會帶一組user的資訊，指派一變數給它備用
// 	Record.find() // 查詢全部屬於userId的records
// 	.lean()
// 	.sort({_id:'asc'})
// 	.then(records => {
// 		const newArray =
// 		records.map((record) => {
// 			 Category.findOne({id:record.categoryId})
// 			.then((category) => {
// 				record.categoryId = category.icon
// 			})
// 		})
// 		console.log(newArray)
// 		res.render('index', { records })
// 	})
// 	.catch(error => console.error(error))
// })


// router.get('/', (req, res) => {
// 	// const userId = req.user._id // req會帶一組user的資訊，指派一變數給它備用
// 	Record.find() // 查詢全部屬於userId的records
// 	.lean()
// 	.sort({_id:'asc'})
// 	.then(records => res.render('index', { records }))
// 	.catch(error => console.error(error))
// })