var burger = require("../models/burger")

function routes(app) {
    app.get("/", function(req, res){
        burger.selectAll( function(data) {
            res.render("index", {burgers: data})
        })
    })
    app.post("/api/burgers", function(req, res){
        console.log(req.body)
        burger.insertOne(req.body, function(data) {
            res.json(data)
        })
    })
}


module.exports = routes