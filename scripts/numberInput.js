$("#number").on("focus", function () {
    
    setTimeout(() => {
      });
      var cursorTick = setInterval(function() {
        var text = $("#number").val();
        var input = document.getElementById("number");
        var focus = text.search(/\d(?=\D*$)/)
        if(focus == -1){
            focus = 0;
        }
        input.selectionStart = input.selectionEnd = focus+1;
      },1)
    
});

document.getElementById('number').addEventListener('keydown', function(event){
    var textStart = $("#number").val();
    if (['0','1','2','3','4','5','6','7','8','9'].includes(event.key)) {
        textStart =  textStart.replace("_",event.key);
        console.log(textStart);
    }  
    console.log(event.key);
    if (['Backspace'].includes(event.key)) {
        textStart =  textStart.replace(/\d(?=\D*$)/,"_");
        
    }  
    $("#number").val(textStart);
    event.preventDefault();
    // if (!['0','1','2','3','4','5','6','7','8','9','Backspace','Delete'].includes(event.key)) {
    //     event.preventDefault();
    // }    
});