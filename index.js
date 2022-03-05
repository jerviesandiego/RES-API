const express = require("express");
const mongoose = require("mongoose");
const Article = require("./model/Article.js");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
let dbURL = "mongodb+srv://admin:admin@cluster.fg8rk.mongodb.net/articleDB?retryWrites=true&w=majority";

mongoose.connect(dbURL, {useNewUrlParser:true, useUnifiedTopology:true})

    .then (() => {
        app.listen(3000, () => {
            console.log("Server is running for port 3000 and connected to articledb");
           
        
        });
})
    .catch((error) =>{
        console.log("Error");
    })

app.get("/addArticle", (req, res) => {
    res.send("Hello");
})

app.get("/readArticle", (req, res) => {
    Article.find({}, (error, foundArticles) => {
        if(error){
            console.log("Error");
        }  
            else{
                res.send(foundArticles);
            }
    })
})

app.post("/createArticle",(req,res) => {
    const article = new Article ({
        title: req.body.title,
        content: req.body.content
    })

    article.save ((error) => {
        if(error) {
            console.log(error);
        } else {
            res.redirect("/readArticle");
        }
    })
});