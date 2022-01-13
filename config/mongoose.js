const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI)
const db = mongoose.connecttion

db.on('error', () =>{
	console.log('Mongodb error!')
})
db.once('open', () =>{
	console.log('Mongodb connected!')
})
module.exports = db