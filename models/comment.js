const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  Name: { type: String},
  Comment: { type: String},
  date: { type: Date, default: Date.now },
  
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;