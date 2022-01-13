const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const records = require('./modules/records')
const users = require('./modules/users')
// const auth = require('./modules/auth')
// const {authenticator} = require('../middleware/auth')

router.use('/users', users)
router.use('/records', records)
// router.use('/auth', auth)
router.use('/', home)

module.exports = router