const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

//middleware

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongoose://localhost:27017/gestational',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('You are now connected to the Gestational Diabetes DB')
)

//downloads?

//endpoints
app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressJwt({ secret: process.env.SECRET })) //req.user
app.use('/api/numbers', require('./routes/numbersRouter.js'))//routes for the levels

//more to come

app.use((err, req, res,  next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

//listen
app.listen(8888, () => {
    console.log('The Gestational Diabetes Servers is Poppin! Local port 8888')
})