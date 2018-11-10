$(function(){
    $(".devour").on("click", function(event){
        event.preventDefault();
        console.log("Devouring")
        var id = $(this).data("id");
        var dev = $(this).data("devour");

        var devState = {
            devour: dev,
            id: id
        }

        $.ajax("/api/burger/"+id, {
            type:"PUT",
            data: devState
        }).then(function(){
            console.log("SHOVED IT IN YOUR FACE!");
            location.reload();
        })
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#newBurger").val().trim()
        }

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("New Burger Cooked!");
            location.reload();
        })
    });

    $(".delete-burger").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");

        $.ajax("/api/burgers/"+ id, {
            type: "DELETE"
        }).then(function(){
            console.log("Removed Burger", id);
            location.reload();
        })
    })

    $
})