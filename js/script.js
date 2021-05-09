$(function (){
    var cell_1 = $(".cell-1");
    var cell_2 = $(".cell-2");
    var cell_3 = $(".cell-3");
    var cell_4 = $(".cell-4");
    var cell_5 = $(".cell-5");
    var cell_6 = $(".cell-6");
    var cell_7 = $(".cell-7");
    var cell_8 = $(".cell-8");
    var cell_9 = $(".cell-9");
    var turn = 1 ;

    //--------- Start Game --------------
    startGame();
    function startGame(){
        $(".board tr td").click(function () {
            if (turn == 1 && !$(this).hasClass("filled")) {
                $(this).addClass("x");
                $(this).addClass("filled");
                $(this).css("cursor","not-allowed");
                turn = 2 ;
                var result = CheckWinner();
                if(!result){
                    CheckNoWinner();
                }

            }else if (turn == 2 && !$(this).hasClass("filled")) {
                $(this).addClass("o");
                $(this).addClass("filled");
                $(this).css("cursor", "not-allowed");
                turn = 1 ;
                var result = CheckWinner();
                if(!result){
                    CheckNoWinner();
                }
            }
        });
    }

    //------------ Check If We have Winner ---------------
    function CheckWinner(){
        if (cell_1.hasClass("o") && cell_2.hasClass("o") && cell_3.hasClass("o") ||
            cell_4.hasClass("o") && cell_5.hasClass("o") && cell_6.hasClass("o") ||
            cell_7.hasClass("o") && cell_8.hasClass("o") && cell_9.hasClass("o") ||
            cell_1.hasClass("o") && cell_4.hasClass("o") && cell_7.hasClass("o") ||
            cell_2.hasClass("o") && cell_5.hasClass("o") && cell_8.hasClass("o") ||
            cell_3.hasClass("o") && cell_6.hasClass("o") && cell_9.hasClass("o") ||
            cell_1.hasClass("o") && cell_5.hasClass("o") && cell_9.hasClass("o") ||
            cell_3.hasClass("o") && cell_5.hasClass("o") && cell_7.hasClass("o")){
                turn = 2;
                $(".msg").fadeIn(200);
                $(".msg-child").text("Winner : O");
                return true;
        }
        else if (cell_1.hasClass("x") && cell_2.hasClass("x") && cell_3.hasClass("x") ||
            cell_4.hasClass("x") && cell_5.hasClass("x") && cell_6.hasClass("x") ||
            cell_7.hasClass("x") && cell_8.hasClass("x") && cell_9.hasClass("x") ||
            cell_1.hasClass("x") && cell_4.hasClass("x") && cell_7.hasClass("x") ||
            cell_2.hasClass("x") && cell_5.hasClass("x") && cell_8.hasClass("x") ||
            cell_3.hasClass("x") && cell_6.hasClass("x") && cell_9.hasClass("x") ||
            cell_1.hasClass("x") && cell_5.hasClass("x") && cell_9.hasClass("x") ||
            cell_3.hasClass("x") && cell_5.hasClass("x") && cell_7.hasClass("x")){
                turn = 1;
                $(".msg").fadeIn(200);
                $(".msg-child").text("Winner : X");
                return true;
        }
    }

    //--------------- Reset ---------------
    function reset(){
        $(".board tr td").removeClass("o");
        $(".board tr td").removeClass("x");
        $(".board tr td").removeClass("filled");
        $(".board tr td").css("cursor","pointer");
    }

    $(".reset").click(function (){
        reset();
    });
    $(".reset-child").click(function (){
        $(".msg").fadeOut(200);
        reset();
    });


    //------------ Check If We have No Winner ------------------
    function CheckNoWinner(){
        var counter = 0 ;
        $(".board tr td").each(function (cellIndex,cellElement){
            if ($(cellElement).hasClass("filled")){
                counter++;
            }
        });
        if (counter == 9){
            $(".msg").fadeIn(200);
            $(".msg-child").text("Draw !");
        }
    }

});