$("#add-burger").on("click", function() {
 
    var newBurger = {
        burger: $("#input").val(),
        devoured: false
    }
console.log(newBurger)
    $.ajax({
        url:"api/burgers",
        method: "POST",
        data: newBurger
    }).then( function(data) {
        location.reload()
    })
})