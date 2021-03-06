const express = require('express')
const morgan = require('morgan')

const app = express()

const studentRouter = require('./Routes/studentRoutes')
const userRouter = require('./Routes/userRoutes')


app.use(morgan('dev'))

app.use(express.json())

app.use(express.static('./public'))

app.use((req,res,next) => {
  console.log('This is middleware')
  next()
})

app.use((req,res,next) => {
    req.requireTime = new Date().toISOString()
    next()
  })

app.use('/api/v1/student', studentRouter)
app.use('/api/v1/users', userRouter)

module.exports = app
