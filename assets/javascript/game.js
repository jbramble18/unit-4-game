//page loads = random number is generated ......
//page load random number generated for each crystals......
//click on crystal and points are added to div.......
//if points = to random number, user wins.......
//new number is generated.......
// wins added to win div.......
// if point > random number, user losses.......
//new number is generated........
//losses added to losses........

var wins = 0;
var losses = 0;
var userScore = 0;

var gem1 = Math.floor(Math.random() * 11) + 1;
var gem2 = Math.floor(Math.random() * 11) + 1;
var gem3 = Math.floor(Math.random() * 11) + 1;
var gem4 = Math.floor(Math.random() * 11) + 1;


$(document).ready(function () {

    var computerNum = [Math.floor(Math.random() * 79 + 21)];
    $("#points").text(computerNum);

    var gem1 = Math.floor(Math.random() * 11) + 1;
    var gem2 = Math.floor(Math.random() * 11) + 1;
    var gem3 = Math.floor(Math.random() * 11) + 1;
    var gem4 = Math.floor(Math.random() * 11) + 1;

    function reset() {
        computerNum = [Math.floor(Math.random() * 79 + 21)];
        $("#points").text(computerNum);

        gem1 = Math.floor(Math.random() * 11) + 1;
        gem2 = Math.floor(Math.random() * 11) + 1;
        gem3 = Math.floor(Math.random() * 11) + 1;
        gem4 = Math.floor(Math.random() * 11) + 1;

        userScore = 0;

        $("#score").text(userScore);
    }

    function win() {
        alert("You won!")
        wins++;
        $("#wins").text("Wins: " + wins);
        reset();

    }

    function loss() {
        alert("You lost!");
        losses++;
        $("#losses").text("Losses:" + losses);
        reset();
    }

    $("#gem1").on("click", function () {
        userScore += gem1;
        console.log(gem1);
        $("#score").text(userScore);

        if (userScore == computerNum) {
            console.log("win called", userScore, computerNum);
            win();

        } else if (userScore > computerNum) {
            console.log("loss called", userScore, computerNum);
            loss();
        }
    })

    $("#gem2").on("click", function () {
        userScore += gem2;
        console.log(gem2);
        $("#score").text(userScore);

        if (userScore == computerNum) {
            console.log("win called", userScore, computerNum);
            win();

        } else if (userScore > computerNum) {
            console.log("loss called", userScore, computerNum);
            loss();
        }
    })

    $("#gem3").on("click", function () {
        userScore += gem3;
        console.log(gem3);
        $("#score").text(userScore);

        if (userScore == computerNum) {
            console.log("win called", userScore, computerNum);
            win();

        } else if (userScore > computerNum) {
            console.log("loss called", userScore, computerNum);
            loss();
        }
    })

    $("#gem4").on("click", function () {
        userScore += gem4;
        console.log(gem4);
        $("#score").text(userScore);

        if (userScore == computerNum) {
            console.log("win called", userScore, computerNum);
            win();

        } else if (userScore > computerNum) {
            console.log("loss called", userScore, computerNum);
            loss();
        }
    })






})