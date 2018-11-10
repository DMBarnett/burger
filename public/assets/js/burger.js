$(function(){
    $(".devour").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        var dev = $(this).data("devour");

        var devState = {
            devour: 1
        }

        $.ajax("/api/burger")
    })
})