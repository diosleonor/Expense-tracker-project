const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
	id:{
		type: Number,
		required: false
	},
	userId:{
		type: Schema.Types.ObjectId,
		ref:'User',
		index: true,
		required: true
	},
	name:{
		type: String,
		required: true
	},
	categoryId:{
		type: Number, // 不確定是否要用Schema.Types.ObjectId
		required: true
	},
	date:{
		type: String,
		required: true,
	},
	amount:{
		type: Number,
		required: true
	}
})
module.exports = mongoose.model('Record', recordSchema)