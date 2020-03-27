const express = require('express')
const numbersRouter = express.Router()
const Numbers = require('../models/numbers.js')

//get all Numbers

numbersRouter.get("/", (req, res, next) => {
    numbersRouter.find((err, numbers) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(numbers)
    })
})

//get Numbers by UserID

numbersRouter.get("/user", (req, res, next) =>{
    console.log(req.user._id)
    Numbers.find({ user: req.user._id }, (err, numbers) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(numbers)
    })
})

//add new numbers

numbersRouter.post("/", (req, res, next) =>{
    req.body.user = req.user._id
    const newNumbers = new Numbers(req.body)
    newNumbers.save((err, savedNumbers) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedNumbers)
    })
})

//delete Numbers

numbersRouter.delete("/:numbersId", (req, res, next) =>{
    Numbers.findOneAndDelete(
        { _id: req.params.numbersId, user: req.user._id },
        (err, deletedNumbers) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedNumbers.name}`)
        }
    )
})

//update Numbers

numbersRouter.put('/:numbersId', (req, res, next) => {
    Numbers.findOneAndUpdate(
        { _id: req.params.numbersId, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedNumbers) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedNumbers)
        }
    )
})

module.exports = numbersRouter