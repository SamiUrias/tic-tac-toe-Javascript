/**
 * Created by samuel on 31/07/16.
 */


//The link with the DOM
var viewport = document.getElementById('totito');

/*
* started = 0: The game has not started
* started = 1: The game has started
* */
var	started 	= 0;

//Quantity of players
var quantity 	= 0;

/*Which player is playing*/
var player 		= 1;

/*Player Label*/
var playerLabel ="";

var positions = [];

function game(position){
	var output_html = "";

	//Stating point
	//Se empieza con el jugador uno
	playerLabel = "<div class='player-label'>";
	if (player == 1){
		playerLabel += "Jugador 1" + "</div>";
	}
	else{
		playerLabel += "Jugador 2" + "</div>";
	}


	//Hasta el momento que se hace un movimientos se evalua la logica del juego
	if(arguments[0] != undefined){
		console.log("Arguments: " + arguments[0]);
		output_html += playerLabel;
		output_html += drawTotito(arguments[0]);
		changePlayers();
	}
	else{
		output_html += playerLabel;
		output_html += drawTotito();
	}

	render(output_html);
}


//This is the render
function render($html){
	var output_html = "";
	console.log('Render');
	output_html = $html;

	viewport.innerHTML = output_html;
	addListeners();
	drawPosiions();
	winner();

}

function changePlayers(){
	if (player == 1){
		player = 2;
	}
	else{
		player =1;
	}
	console.log("-- Player: " + player);
}

//This function draws the tic tac toe
function drawTotito(pos) {
 var outputX =
	"<div class='totito-container'>"+
		"<div class='row' style='display: block'>" +
		"<div class='square' ></div>" +
		"<div class='square' ></div>" +
		"<div class='square' ></div>"+
		"</div>" +

		"<div class='row' style='display: block'>"+
		"<div class='square' ></div>"+
		"<div class='square' ></div>"+
		"<div class='square' ></div>"+
		"</div>"+

		"<div class='row' style='display: block'>"+
		"<div class='square' ></div>"+
		"<div class='square' ></div>"+
		"<div class='square' ></div>"+
		"</div>"+
	"</div>"


	return outputX;
}


function helperPlayerSelection(qnt){
	quantity = qnt;
	if (qnt == 1){
		console.log('One player');
		quantity = 1;
	}
	else {
		console.log('Two players');
		qnt = 2;
	}


	/*
	* Dibuja el estado del juego depues que se selecciona la cantidad de jugadores
	* */
	viewport.innerHTML = render(game);
}

function helperPosition(pos){
	if (player  == 1){
		positions[pos] = "X";
	}
	else{
		positions[pos]="O";
	}
	console.log(positions)
}

function drawPosiions(){
	var squares = document.getElementsByClassName('square');
	for (var k = 0; k<positions.length + 1; k++){
		if(positions[k] != undefined){
			squares[k].innerHTML = positions[k];
		}
	}
	console.log('Draw positions');
}




function addListeners(){
	var squares = document.getElementsByClassName('square');
	squares[0].addEventListener('click', function () {
		console.log("0");
		helperPosition(0);
		game(0);
		console.log(positions)
	});

	squares[1].addEventListener('click', function () {
		console.log("1");
		helperPosition(1);
		game(1);
		console.log(positions)
	});

	squares[2].addEventListener('click', function () {
		console.log("2");
		helperPosition(2);
		game(2);
		console.log(positions)
	});

	squares[3].addEventListener('click', function () {
		console.log("3");
		helperPosition(3);
		game(3);
		console.log(positions)
	});

	squares[4].addEventListener('click', function () {
		console.log("4");
		helperPosition(4);
		game(4);
		console.log(positions)
	});

	squares[5].addEventListener('click', function () {
		console.log("5");
		helperPosition(5);
		game(5);
		console.log(positions)
	});

	squares[6].addEventListener('click', function () {
		console.log("6");
		helperPosition(6);
		game(6);
		console.log(positions)
	});

	squares[7].addEventListener('click', function () {
		console.log("7");
		helperPosition(7);
		game(7);
		console.log(positions)
	});

	squares[8].addEventListener('click', function () {
		console.log("8");
		helperPosition(8);
		game(8);
		console.log(positions)
	});
}

function winner(){
	var victoria = false;

	//Primera fila
	if ((positions[0] == positions[1]) && (positions[1] == positions[2])){
		if(positions[0] != undefined){
			victoria = true;
			console.log("Victoria");
		}
	}

	//Segunda fila
	if ((positions[3] == positions[4]) && (positions[4] == positions[5])){
		if(positions[3] != undefined){
			victoria = true;
			console.log("Victoria");
		}
	}
		//Tercera fila
	if ((positions[6] == positions[7]) && (positions[7] == positions[8])){
		if(positions[6] != undefined){
			victoria = true;
			console.log("Victoria");
		}
	}


	//Primera columna
	if ((positions[0] == positions[3]) && (positions[3] == positions[6])){
		if(positions[0] != undefined){
			victoria = true;
			console.log("Victoria");
		}
	}

	//Segunda columna
	if ((positions[1] == positions[4]) && (positions[4] == positions[7])){
		if(positions[1] != undefined){
			victoria = true;
			console.log("Victoria");
		}
	}


	//Tercera columna
	if ((positions[2] == positions[5]) && (positions[5] == positions[8])){
		if(positions[2] != undefined){
			victoria = true;
			console.log("Victoria");
		}
	}

	//Diagonal superior
	if ((positions[6] == positions[4]) && (positions[4] == positions[2])){
		if(positions[6] != undefined){
			victoria = true;
			console.log("Victoria");
		}
	}

	//Diagonal inferior
	if ((positions[0] == positions[4]) && (positions[4] == positions[8])){
		if(positions[0] != undefined){
			victoria = true;
			console.log("Victoria");
		}
	}


	if (victoria == true){
		var winnerPhrase = "El ganador es: ";
		console.log("Hay un ganador");
		if (player == 1){
			winnerPhrase += "Jugador 2";
		}
		else {
			winnerPhrase += "Jugador 1";
		}
		viewport.innerHTML = winnerPhrase;
	}

}
/*
* Dibuja el estado del juego en su punto inicial
* */
// viewport.innerHTML = render(game);
game();
// drawPosiions();
