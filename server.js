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
    'mongodb://localhost:27017/gestational',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('You are now connected to the Gestational Diabetes DB')
)



app.use('/auth', require('./routes/authRouter.js')) //auth
app.use('/api', expressJwt({ secret: process.env.SECRET })) //req.user
app.use('/api/number', require('./routes/numbersRouter.js'))//routes for the levels(numbers)
app.use('api/blog', require('./routes/blogRouter.js')) //routes blog posts for users

//more to come

app.use((err, req, res,  next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

//listen
app.listen(8000, () => {
    console.log('The Gestational Diabetes Servers is Poppin! Local port 8000')
})