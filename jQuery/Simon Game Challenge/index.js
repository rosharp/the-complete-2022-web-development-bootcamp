var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var gamePattern = [];

var level = 0;

var started = false;



$(document).keypress(function() {
    if (!started) {
	    $("#level-title").text("Level " + level);
	    newSequence();
	    started = true;
    }
});

$('.btn').click(function() {
	var userChosenColour = $(this).attr("id"); 
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
	checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
	if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
		console.log("success");
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(function() { 
				newSequence();
			}, 1000);
		}
	} else {
		console.log("wrong");
                $("body").addClass("game-over");
		setTimeout(function() {
			$("body").removeClass("game-over");
		}, 200);
		playSound("wrong");
		$("#level-title").text("Game Over, Press Any Key to Restart");
		startOver();
	}
}

function newSequence() {
	userClickedPattern = [];
	level++;
	$("#level-title").text("Level " + level);
	var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
	$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColour);
}

function startOver() {
	level = 0;
	gamePattern = [];
	started = false;
}

function playSound(name) {
	var audio = new Audio("sounds/" + name + ".mp3");        
	audio.play();
}

function animatePress(currentColor) {
	$("#" + currentColor).addClass("pressed");
	setTimeout(function() {
		$("#" + currentColor).removeClass("pressed");
	}, 100);
}
