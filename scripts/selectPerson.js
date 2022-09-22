$(".person").on('click', function() {
    var e = $(this);
    if (!(e.hasClass("active"))) {
        $(".person").each(function (index, value) { 
             if($(this).is(e)){
                $(this).addClass("active");
             }else{
                $(this).removeClass("active");
             }
        });
        
        $("#name input").css("border","1px solid rgb(80, 25, 4)");
        $("#surname input").css("border","1px solid rgb(80, 25, 4)");
        $("#contract input").css("border","1px solid rgb(80, 25, 4)");
        $("#number").css("border","1px solid rgb(80, 25, 4)");
        
        $("#name input").val("");
        $("#surname input").val("");
        $("#contract input").val("");
        $("#number").val("(___)___-____");
    }
    
    if(e.attr("id")=="legalPerson"){
        $("#contract").css("display", "block");
    }else{
        $("#contract").css("display", "none");
    }
    
});