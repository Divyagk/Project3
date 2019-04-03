const express = require('express')
const router = express.Router()
const Comment = require('../models/comment')


router.post("/submit/:id", function(req,res){
    const { rating , commentBy,comment, postId } = req.body

    const newComment = new Comment({
        rating: rating,
        commentBy: commentBy,
        comment:comment,
        postId: postId
    })

    newComment.save((err, dbComment) => {
        if (err) return res.json(err)
        res.json(dbComment)
        console.log(dbComment)
    })
})

router.get("/api/comment/:id", function(req,res){
    Comment.find({postId: req.params.id}).then(results => res.json(results))
})


module.exports = router