var connection = require("./connection")
var orm = {
    selectAll: function(tableName, modelCallback) {
        connection.query("SELECT * FROM ?? ", tableName, function(err, data) {
            modelCallback(data)
        })
    }, 
    insertOne: function(tableName, columns ,newBurger, modelCallback) {
  var statement=      connection.query("INSERT INTO ?? (??,??) values(?,?)",[tableName,...columns, newBurger.burger, false],function(err,data){
            modelCallback(data)
        })

        console.log(statement.sql)
    }
}

module.exports = orm