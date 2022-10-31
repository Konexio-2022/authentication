require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')

require('./config/passport')
require('./models/index')

app.use(cors('*'))
app.use(express.json())

app.use(
  session({
    secret: process.env.SESSION_SECRET, // string permettant de "signer" nos sessions
    resave: true, // nous permet de garder notre session toujours a jour
    saveUninitialized: false // nous permet de sauvegarder notre session
  })
)

app.use('/auth', authRoutes)
app.use('/users', usersRoutes)

app.listen(5000, () => {
  console.log('Server running on 5000')
})
