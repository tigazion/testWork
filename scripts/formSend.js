
$("#send").on("click",cheakSend);
function cheakSend(){
    var cheak = 1;
    var name = $("#name input").val().trim();
    var surname = $("#surname input").val().trim();
    var contract = $("#contract input").val().trim();
    var number = $("#number").val().trim();
    var activeContract = $("#legalPerson").hasClass("active");

    number = number.replace(/[^0-9]/g, '');

    if(!name){
        $("#name input").css("border","1px solid red");
        cheak = 0;
    }else{
        $("#name input").css("border","1px solid rgb(80, 25, 4)");
    }

    if(!surname){
        $("#surname input").css("border","1px solid red");
        cheak = 0;
    }else{
        $("#surname input").css("border","1px solid rgb(80, 25, 4)");
    }

    if(!contract && activeContract){
        $("#contract input").css("border","1px solid red");
        cheak = 0;
    }else{
        $("#contract input").css("border","1px solid rgb(80, 25, 4)");
    }

    if(!number || number.length != 10){
        $("#number").css("border","1px solid red");
        cheak = 0;
    }else{
        $("#number").css("border","1px solid rgb(80, 25, 4)");
    }
    if(cheak){
        sendForm(name,surname,contract,number);
    }
}
function sendForm(name,surname,contract,number){
    var num = $("#region").text();

    num = num.replace(/[^0-9]/g, '');
    number = num+number;

    var activeContract = $("#legalPerson").hasClass("active");
    if(!activeContract){
        contract = "";
    }
    
    $.ajax({
        url: 'scripts/writeBd.php', 
        type: 'POST',  
        data: 'name='+name+'&surname='+surname+'&contract='+contract+'&number='+number,  
        success: function (data) { 
        }
    });
}
