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
		.then(salt => bcrypt.hash(SEED_USERS[1].password, salt))
		.then(hash => User.create({
			name: SEED_USERS[1].name,
			email: SEED_USERS[1].email,
			password: hash
		}))
		.then(user => {
			const userId = user._id
			const user2records = SEED_RECORDS.splice(3,1)
			return Promise.all(Array.from(
				user2records,
				(_, i) => Record.create({
					id: user2records[i].id,
					name: user2records[i].name,
					date: user2records[i].date,
					amount: user2records[i].amount,
					categoryId: user2records[i].categoryId,
					userId
				})
				))
		})
		.catch(error => console.log(error))

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
			SEED_RECORDS.splice(3,0)
			return Promise.all(Array.from(
				SEED_RECORDS,
				(_, i) => Record.create({
					id: SEED_RECORDS[i].id,
					name: SEED_RECORDS[i].name,
					date: SEED_RECORDS[i].date,
					amount: SEED_RECORDS[i].amount,
					categoryId: SEED_RECORDS[i].categoryId,
					userId
				})
				))
		})
		.then(() => {
			console.log("Both users and records created.")
			process.exit()
		})
})