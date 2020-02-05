var orm = require("../config/orm")

var burger = {
    selectAll: function(controllerCallback) {
         orm.selectAll("burgers", function(data) {
             controllerCallback(data)
         })
    },
    insertOne: function(newBurger, controllerCallback) {
        orm.insertOne("burgers",["burger", "devoured"], newBurger, function(data){
            controllerCallback(data)
        })
    }

}

module.exports = burger