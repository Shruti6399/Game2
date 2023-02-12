//defining variables
let buttoncolors = ["red" ,"blue" , "green" , "yellow"];
let gamePattern =[];
let userClickedPattern=[];
var n
var randomvariable
var level =0;
var started = true;
//generating game pattern
function nextSequence(){
    $("h1").text("Level " + level);
    level = level + 1;
    userClickedPattern =[]
    n = Math.random();
    n = Math.floor(n * 4);
    console.log(n);
    randomvariable = n;
    var randomChosenColour = buttoncolors[randomvariable];
    //console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    playSound(randomChosenColour);
}

//figuering the button clicked
$(".btn").click(function(){
    if(level != 0){
        var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        console.log("user" + userClickedPattern);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1)
        
    } 
  })

//making sound
function playSound(name){
    switch(name){
        case ("red"):
            $("#red").fadeIn(100).fadeOut(100).fadeIn(100);
            var r = new Audio("red.mp3")
            r.play();
            break;
        case("blue"):
            $("#blue").fadeIn(100).fadeOut(100).fadeIn(100);
            var b= new Audio("blue.mp3");
            b.play();
            break;
        case("green"):
            $("#green").fadeIn(100).fadeOut(100).fadeIn(100);
            var g = new Audio("green.mp3");
            g.play();
            break;
        case("yellow"):
            $("#yellow").fadeIn(100).fadeOut(100).fadeIn(100);
            var y =new Audio("yellow.mp3");
            y.play()
            break;
        default:
            // var w = new Audio("wrong.mp3");
            // w.play();
    }
}

//animating the button when the button is clicked.
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },100)
}

//checking the first key pressed.
document.addEventListener("keydown" , function(){
    if(started == true){
        $("h1").text("level 0");
        nextSequence();
        started =false;
    }
})
var count =0
//checking if correct button is pressed
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(gamePattern.length == userClickedPattern.length){
            setTimeout(function(){nextSequence()},1000)
        }
    }
    else{
        $("body").addClass("game-over")
        $("h1").text("Game Over, Press Any Key to Restart")
        var w = new Audio("wrong.mp3");
        w.play();
        setTimeout(function(){$("body").removeClass("game-over");},200)
        startover();
    }
}

//start over again
function startover(){
    started = true;
    level=0;
    gamePattern =[];
}
