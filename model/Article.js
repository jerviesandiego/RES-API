const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title:{
        type: String
    },

    content:{
        type: String
    }
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;