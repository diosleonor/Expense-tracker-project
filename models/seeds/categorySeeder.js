if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config()
}
const Category = require('../Category')
const db = require('../../config/mongoose')
const SEED_CATEGORIES = require("../seedData.json").SEED_CATEGORIES

db.once('open', async () => {
	console.log('Mongodb connected.')
	await Category.create(SEED_CATEGORIES)
	console.log('Categories created.')
	await process.exit()
})
