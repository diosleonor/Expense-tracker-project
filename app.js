const express = require('express')
// const session = require('express-session')
const app = express()
const exphbs = require('express-handlebars')
const hbshelpers = require('handlebars-helpers')
const multihelpers = hbshelpers()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
// const flash = require('connect-flash')
if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config()
}
const PORT = process.env.PORT
const routes = require('./routes')
// const usePassport = require('./config/passport')
require('./config/mongoose')

// 暫存區
const Record = require('./models/record')
const Category = require('./models/category')
const User = require('./models/User')

app.engine('hbs', exphbs({ defaultLayout: 'main', helpers:'multihelpers', extname: '.hbs'}))
app.set('view engine', 'hbs')

// // use express-session
// app.use(session({
// 	secret: process.env.SESSION_SECRET,
// 	resave: false, 
// 	saveUninitialized: true
// }))

// run every request in body parser before going down
app.use(bodyParser.urlencoded({ extended: true }))

// run every request in method override before going down
app.use(methodOverride('_method'))

// // call Passport function and send in app
// usePassport(app)
// app.use(flash())
// // switch nav bar expression accordingly
// // 將req攜帶的狀態及資料傳送給res，才能在前端樣板使用
// // res.locals 是 Express.js 幫我們開的一條捷徑，放在 res.locals 裡的資料，所有的 view 都可以存取
// app.use((req, res, next) => {
// 	res.locals.isAuthenticated = req.isAuthenticated()
// 	res.locals.user = req.user
// 	res.locals.success_msg = req.flash('success_msg')
// 	res.locals.warning_msg = req.flash('warning_msg')
// 	next()
// })
// // use router to include routes
app.use(routes)

// listen to app
app.listen(PORT, () => {
	console.log(`App is running on http://localhost:${PORT}`)
})