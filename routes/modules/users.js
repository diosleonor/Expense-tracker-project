const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../../models/user')
const bcrypt = require('bcryptjs')
router.get('/login', (req, res) => {
	return res.render('login')
})

router.get('/register', (req, res) => {
	return res.render('register')
})

module.exports = router