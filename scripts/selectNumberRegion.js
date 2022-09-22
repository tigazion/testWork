$(".regionSelect").on('click', function() {
    var e = $(this);
        $(".regionSelect").each(function (index, value) { 
             if($(this).is(e)){
                $(this).addClass("activeRegion");
             }else{
                $(this).removeClass("activeRegion");
             }
        });
    $("#region").text(e.text());
});

$("#region").on('click', function() {
    if($("#regionBox").css("display")=="none"){
        $("#regionBox").css("display","block");
    }else{
        $("#regionBox").css("display","none");
    }
});