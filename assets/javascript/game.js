$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var lockgame = false;

    var bluevalue = Math.floor((Math.random() * 12) + 1);
    var orangevalue = Math.floor((Math.random() * 12) + 1);
    var pinkvalue = Math.floor((Math.random() * 12) + 1);
    var purplevalue = Math.floor((Math.random() * 12) + 1);
    var yourscore = 0;
    var randomnumber = Math.floor((Math.random() * 120) + 19);
    



    $("#random-number").html(randomnumber);
    console.log(randomnumber)


    $("#blue").on("click", function () {
        $("#your-score").html(bluevalue);
        yourscore = yourscore + bluevalue;
        $("#your-total-score").html("Your total score is: " + yourscore);
        if (yourscore === randomnumber) {
            wins ++;
            $("#wins").text("Wins:"+ wins);
            alert("You Win!");
            lockgame = true;
        }
        else if (yourscore > randomnumber) {
            losses ++;
            $("#losses").text("Losses:"+ losses);
            alert("You Lose!");
            lockgame = true;

        }
    });

    $("#orange").on("click", function () {
        $("#your-score").html(orangevalue);
        yourscore = yourscore + orangevalue;
        $("#your-total-score").html("Your total score is: " + yourscore);
        if (yourscore === randomnumber) {
            wins ++;
            $("#wins").text("Wins:"+ wins);
            alert("You Win!")
            lockgame = true;
        }
        else if (yourscore > randomnumber) {
            losses ++;
            $("#losses").text("Losses:"+ losses);
            alert("You Lose!");
            lockgame = true;
        }
    });

    $("#pink").on("click", function () {
        $("#your-score").html(pinkvalue);
        yourscore = yourscore + pinkvalue;
        $("#your-total-score").html("Your total score is: " + yourscore);
        if (yourscore === randomnumber) {
            wins ++;
            $("#wins").text("Wins:"+ wins);
            alert("You Win!")
            lockgame = true;
        }
        else if (yourscore > randomnumber) {
            losses ++;
            $("#losses").text("Losses:"+ losses);
            alert("You Lose!");
            lockgame = true;
        }
    });

    $("#purple").on("click", function () {
        $("#your-score").html(purplevalue);
        yourscore = yourscore + purplevalue;
        $("#your-total-score").html("Your total score is: " + yourscore);
        if (yourscore === randomnumber) {
            wins ++;
            $("#wins").text("Wins:"+ wins);
            alert("You Win!")
            lockgame = true;
        }
        else if (yourscore > randomnumber) {
            losses ++;
            $("#losses").text("Losses:"+ losses);
            alert("You Lose!");
            lockgame = true;
        }
    });



}); //closing tages for document ready function