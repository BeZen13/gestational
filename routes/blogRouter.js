const express = require('express')
const blogRouter = express.Router()
const Blog = require('../models/blog.js')



blogRouter.get("/", (req, res, next) => {
    blogRouter.find((err, blog) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(blog)
    })
})



blogRouter.get("/user", (req, res, next) =>{
    console.log(req.user._id)
    blog.find({ user: req.user._id }, (err, blog) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(blog)
    })
})


blogRouter.post("/", (req, res, next) =>{
    req.body.user = req.user._id
    const newBlog = new Blog(req.body)
    newBlog.save((err, savedBlog) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBlog)
    })
})



blogRouter.delete("/:blogId", (req, res, next) =>{
    Blog.findOneAndDelete(
        { _id: req.params.blogId, user: req.user._id },
        (err, deletedBlog) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted: ${deletedBlog._id}`)
        }
    )
})



blogRouter.put('/:blogId', (req, res, next) => {
    Blog.findOneAndUpdate(
        { _id: req.params.blogId, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedBlog) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBlog)
        }
    )
})

module.exports = blogRouter