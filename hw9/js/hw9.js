var letterdist = [
	9, 2, 2, 4, 12, 
	2, 3, 2, 9, 1, 
	1, 4, 2, 6, 8, 
	2, 1, 6, 4, 6, 
	4, 2, 2, 1, 2, 
	1, 2
];

var scoredist = {
	"A": 1,
	"B": 3,
	"C": 3,
	"D": 2,
	"E": 1,
	"F": 4,
	"G": 2,
	"H": 4,
	"I": 1,
	"J": 8,
	"K": 5,
	"L": 1,
	"M": 3,
	"N": 1,
	"O": 1,
	"P": 3,
	"Q": 10,
	"R": 1,
	"S": 1,
	"T": 1,
	"U": 1,
	"V": 4,
	"W": 4,
	"X": 8,
	"Y": 4,
	"Z": 10,
	" ": 0
}

var total = 100;
var bag = letterdist.slice();
var score = [];

$( document ).ready(function() {
	for(var i = 0; i < 15; i++) {
		var newslot = document.createElement("div");
		newslot.id = i;
		newslot.className = "slot";
		newslot.style = "left:" + (10 + 70*i) + "px;";
		if(i == 3 || i == 11) {
			newslot.innerHTML = "Double Letter Value";
			newslot.classList.add("pink");
		}
		if(i == 6 || i == 8) {
			newslot.innerHTML = "Double Word Value";
			newslot.classList.add("blue");
		}
		document.getElementById("board").appendChild(newslot);
		score[i] = " ";
	}
	
	for(var i = 0; i < 7; i++) {
		new_token(i);
	}
	
	$( ".token" ).draggable(
	{
		start: function(event, ui) {
			score[score.indexOf($(this).attr("id"))] = " ";
			calc_score();
		}
	}
	);
	$( ".slot" ).droppable({
		drop: function(event, ui) {
			$(ui.draggable).css("left", $(this).css("left"));
			$(ui.draggable).css("top", $(this).css("top"));
			score[parseInt($(this).attr("id"))] = $(ui.draggable).attr("id");
			calc_score();
		}
	});
});

function new_token(i) {
		var newtoken = document.createElement("div");
		newtoken.className = "token";
		newtoken.style = "left:" + (10 + 70*i) + "px;";
		newtoken.innerHTML = pull_letter();
		if(newtoken.innerHTML != " ")
			newtoken.id = newtoken.innerHTML + i;
		else newtoken.id = "_" + i;
		document.getElementById("hand").appendChild(newtoken);
}

function pull_letter() {
	var next = Math.floor(Math.random()*total);
	var i = 0;
	next -= bag[i];
	while(next > 0) {
		next -= bag[++i];
		
	}
	
	total--;
	bag[i]--;
	if(i >= 26)
		return " ";
	return String.fromCharCode(65 + i);
}

function calc_score() {
	var totalscore = 0;
	var multiplier = 1;
	$("#score").text("SCORE: ");
	for(var i = 0; i < 15; i++) {
		if(score[i] != " ") {
			var letterscore = scoredist[$("#" + score[i]).text()];
			
			
			if(i == 3 || i == 11) letterscore *= 2;
			totalscore += letterscore;
			if(i == 6 || i == 8) multiplier *= 2;
			$("#score").text($("#score").text() + letterscore + " (" + $("#" + score[i]).text() + ((i == 3 || i == 11) ? "x2) " : ") "));
		}
	}
	if(totalscore > 0)
		$("#score").text($("#score").text() + "x" + multiplier + " = " + totalscore*multiplier);
}

function new_hand() {
	$("#score").text("SCORE: ");
	
	for(var i = 0; i < 15; i++) {
		if(score[i] != " ") {
			var whichtoken = $("#" + score[i]).attr("id").substr(1);
			$("#" + score[i]).remove();
			new_token(parseInt(whichtoken));
		}
		score[i] = " ";
	}
	
	for(var i = 0; i < 7; i++) {
	}
	if(total < 7) $("#handbutton").attr("disabled", "disabled");
	$( ".token" ).draggable(
	{
		start: function(event, ui) {
			score[score.indexOf($(this).attr("id"))] = " ";
			calc_score();
		}
	}
	);
	$("#handbutton").text("New Hand (" + total + " left)");
}

function shuffle() {
	bag = letterdist.slice();
	total = 100;
	$("#handbutton").attr("disabled", false);
	new_hand();
}