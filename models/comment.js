const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise


const commentSchema = new Schema({
    rating: {
        type: Number,
        require: true
    },
    commentBy: {
        type: String,
        require: true
    },
    
    timestamp: {
        type: Date, 
        default: Date.now,
        require: true
    },
    comment: {
        type: String,
        require: false
    },
    
    postId: {type: String}
});


// module.exports = mongoose.model("Comments", commentSchema);


const Comments = mongoose.model('Comments', commentSchema)
module.exports = Comments;


