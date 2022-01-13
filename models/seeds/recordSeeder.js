const bcrypt = require('bcryptjs')
if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config()
}
const Record = require('../Record')
const Category = require('../Category')
const User = require('../User')
const db = require('../../config/mongoose')
const SEED_USERS = require("../seedData.json").SEED_USERS
const SEED_RECORDS = require("../seedData.json").SEED_RECORDS

db.once('open', () => {
	bcrypt
		.genSalt(10)
		.then(salt => bcrypt.hash(SEED_USERS[0].password, salt))
		.then(hash => User.create({
			name: SEED_USERS[0].name,
			email: SEED_USERS[0].email,
			password: hash
		}))
		.then(user => {
			const userId = user._id
			const user1records = SEED_RECORDS.splice(3,1)
			return Promise.all(Array.from(
				user1records,
				(_, i) => Record.create({
					id: user1records[i].id,
					name: user1records[i].name,
					date: user1records[i].date,
					amount: user1records[i].amount,
					categoryId: user1records[i].categoryId,
					userId
				})
				))
		})
		.catch(error => console.log(error))

	bcrypt
		.genSalt(10)
		.then(salt => bcrypt.hash(SEED_USERS[1].password, salt))
		.then(hash => User.create({
			name: SEED_USERS[1].name,
			email: SEED_USERS[1].email,
			password: hash
		}))
		.then(user => {
			const userId = user._id
			const user2record = SEED_RECORDS.slice(3,4)
			return Record.create({
					id: user2records.id,
					name: user2records.name,
					date: user2records.date,
					amount: user2records.amount,
					categoryId: user2records.categoryId,
					userId
				})
		})
		.then(() => {
			console.log("Both users and records created.")
			process.exit()
		})
})